import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export const middleware = async (request) => {
  const { pathname } = request.nextUrl;
  try {
    let cookie = request.cookies.get("jet-token")?.value;
    if (!cookie || !cookie.startsWith("Bearer")) {
      throw new Error("Invalid Token");
    }
    const secret = new TextEncoder().encode(process.env.jwt_secret);
    await jwtVerify(cookie.split("Bearer ")[1], secret);
    return NextResponse.next();
  } catch (error) {
    console.log(error.message);
    return NextResponse.redirect(new URL(`/login?redirectUrl=${pathname}`, request.url));
  }
};

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/profile/:path*", "/dashboard/:path*"],
};
