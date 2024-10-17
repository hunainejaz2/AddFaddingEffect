// Authentication is disabled for now

// import type { NextAuthConfig } from "next-auth";
// import google from "next-auth/providers/google";

// export default {
//   providers: [google],
//   trustHost: true,
//   callbacks: {
//     // this function runs on each and every request according to the matcher in middleware file
//     authorized: async ({ auth, request: { nextUrl } }) => {
//       /*
//         TODO: Uncomment This and add the code to protect routes in the similar way as in the example below
//       */
//       // const isLoggedIn = !!auth?.user;
//       // const isOnUser = nextUrl.pathname.startsWith("/user");
//       // if (isOnUser) {
//       //   if (isLoggedIn) {
//       //     return true;
//       //   }
//       //   return false;
//       // }
//       return true;
//     },
//   },
//   // theme: {
//   //   logo: "/logo.svg",
//   // },
// } satisfies NextAuthConfig;
