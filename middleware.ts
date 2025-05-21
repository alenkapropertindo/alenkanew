// import NextAuth from "next-auth";

// import authConfig from "@/auth.config";
// import {
//   DEFAULT_LOGIN_REDIRECT,
//   apiAuthPrefix,
//   authRoutes,
//   publicRoutes,
// } from "@/routes";
// import { NextApiRequest, NextApiResponse } from "next";

// const  {auth}  = NextAuth(authConfig);

// export default auth((req) => {
//   const { nextUrl } = req;
//   const isLoggedIn = !!req.auth;

//   const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
//   // const publicRoutes = ["/", "/detail"];
//   // const isPublicRoute = publicRoutes.some(
//   //   (p) => nextUrl.pathname === p || nextUrl.pathname.startsWith(`${p}/`)
//   // );
//   const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
//   const isAuthRoute = authRoutes.includes(nextUrl.pathname);

//   if (isApiAuthRoute) {
//     return null;
//   }

//   if (isAuthRoute) {
//     if (isLoggedIn) {
//       return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
//     }
//     return null;
//   }

//   if (!isLoggedIn && !isPublicRoute) {
//     return Response.redirect(new URL("/auth/login", nextUrl));
//   }

//   return null;
// });

// // Optionally, don't invoke Middleware on some paths
// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };




import { NextResponse } from "next/server";
// import { NextApiRequest, NextApiResponse } from "next";

import NextAuth, { NextAuthRequest } from "next-auth";
import authConfig from "@/auth.config";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
} from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth(
  (req: NextAuthRequest) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const publicRoutes = ["/", "/detail"];
    const isPublicRoute = publicRoutes.some(
      (p) =>
        nextUrl.pathname === p || nextUrl.pathname.startsWith(`${p}/`)
    );
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if (isApiAuthRoute) {
      return; 
    }

   
    if (isAuthRoute) {
      if (isLoggedIn) {
        return NextResponse.redirect(
          new URL(DEFAULT_LOGIN_REDIRECT, nextUrl)
        );
      }
      return; 
    }

    if (!isLoggedIn && !isPublicRoute) {
      return NextResponse.redirect(
        new URL("/auth/login", nextUrl)
      );
    }

    return;
  }
);

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
