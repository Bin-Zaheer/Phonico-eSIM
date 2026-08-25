import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth";

export default auth(function proxy(
  request: NextRequest & { auth: any },
) {
  const userToken = request.auth;
  const currentPath = request.nextUrl.pathname;
  console.log(
    "yeh mera user token hai",
    userToken,
  );

  if (
    !userToken &&
    currentPath !== "/login" &&
    currentPath !== "/register"
  ) {
    return NextResponse.redirect(
      new URL("/login", request.url),
    );
  }
  if (
    userToken &&
    (currentPath === "/login" ||
      currentPath === "/register")
  ) {
    return NextResponse.redirect(
      new URL("/", request.url),
    );
  }
});

export const config = {
  matcher: [
    // "/",
    "/login",
    "/register",
    // "/blog/:path*",
    // "/plans",
    // "/easypay",
    "/checkout",
  ],
};
