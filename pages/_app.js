import '../styles/globals.css';
import 'antd/dist/antd.css';
import React, { Component } from 'react';
import useSWR, { SWRConfig } from 'swr';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
      }}
    >
      {' '}
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </SWRConfig>
  );
}

export default MyApp;
