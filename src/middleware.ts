import { NextRequest, NextResponse } from 'next/server';
import { getSessionCookie } from "better-auth/cookies";

export default function middleware(req: NextRequest) {
    // Get the pathname from the URL
    const pathname = req.nextUrl.pathname;
    console.log("url is" + pathname);
    

    // Check if the user is authenticated by looking for a session token or authentication cookie
    // This is a placeholder - replace with your actual auth check method
    const isAuthenticated = getSessionCookie(req, {
        // Optionally pass config if cookie name, prefix or useSecureCookies option is customized in auth config.
		cookieName: "session_token",
		cookiePrefix: "better-auth",
		
    });

    console.log(isAuthenticated);
    
    // If user is authenticated and trying to access / or /login, redirect to /workspace
    if (isAuthenticated && (pathname === '/' || pathname === '/login')) {
        const url = req.nextUrl.clone();
        url.pathname = '/workspace';
        return NextResponse.redirect(url);
    }

    // If user is not authenticated and trying to access any page other than / or /login,
    // redirect to login page
    if (!isAuthenticated && pathname !== '/' && pathname !== '/login') {
        const url = req.nextUrl.clone();
        url.pathname = '/login';
        return NextResponse.redirect(url);
    }

    // For all other cases, continue with the request
    return NextResponse.next();
}

export const config = {
    // Update matcher to include all pages
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};