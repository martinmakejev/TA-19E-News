import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'bob@prisma.io' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },

      async authorize(credentials, req) {
        console.log('made it to authorize');
        console.log('credentials', credentials);
        try {
          console.log(process.env.NEXTAUTH_URL);
          const res = await fetch('https://tptusers.vercel.app/api/v1/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
          });
          if (res.status === 401) {
            throw new Error('Invalid credentials');
          }
          console.log('After!');
          const user = await res.json();
          console.log('After! 2');
          if (res.ok && user) {
            console.log('user: ', user);
            return user;
          }
        } catch (e) {
          const errorMessage = e.message;
          throw new Error(errorMessage + '&email=' + credentials.email);
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
});
