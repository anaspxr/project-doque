import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isAdminRoute = (route: string) =>
  route.startsWith("/admin") && route !== "/admin/adminlogin";

const isUserProtectedRoute = (route: string) =>
  route.startsWith("/w") ||
  route.startsWith("/u") ||
  route.startsWith("/accept-invitation") ||
  route.startsWith("/onboarding");

export function middleware(req: NextRequest) {
  const token = req.cookies.get("user")?.value;
  const adminToken = req.cookies.get("adminToken")?.value;
  const url = req.nextUrl.clone();
  const pathname = url.pathname;

  if (!adminToken && isAdminRoute(pathname)) {
    url.pathname = "/404";
    return NextResponse.redirect(url);
  }

  if (adminToken && pathname === "/admin/adminlogin") {
    url.pathname = "/admin/dashboard";
    return NextResponse.redirect(url);
  }

  if (!token && isUserProtectedRoute(pathname)) {
    url.pathname = "/signin";
    return NextResponse.redirect(url);
  }

  if (token && (pathname === "/signin" || pathname === "/signup")) {
    url.pathname = "/u/home";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Apply middleware to all routes except public ones like /signin, /signup, /home
    "/((?!home|_next|_next/static|_next/image|images|favicon.ico|reset-password|forgot-password|verify-otp).*)",
  ],
};
