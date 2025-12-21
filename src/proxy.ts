import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

import { auth } from "@/shared/server";

const PROTECTED_ROUTE = "/dashboard";
const SIGNIN_ROUTE = "/sign-in";

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isProtectedRoute = path.startsWith(PROTECTED_ROUTE);
  const isSigninRoute = path === SIGNIN_ROUTE;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (isProtectedRoute && !session) {
    // THIS IS NOT SECURE!
    // This is the recommended approach to optimistically redirect users
    // We recommend handling auth checks in each page/route
    return NextResponse.redirect(new URL("/sign-in", request.nextUrl));
  }

  if (isSigninRoute && session) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
