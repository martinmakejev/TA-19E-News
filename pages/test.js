function fetcher(url, username, password) {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  }).then((res) => res.json());
}

export function useUser(username, password) {
  const { data, mutate, error } = useSWR(
    ['https://tptusers.vercel.app/api/v1/login', username, password],
    fetcher
  );

  const loading = !data && !error;
  const loggedOut = error && error.status === 403;

  console.log('swr data', data);
  console.log('swr error', error);

  return {
    loading,
    loggedOut,
    user: data,
    mutate,
  };
}

const { user } = useUser('my-username', 'my-strong-password');
