import { NextResponse, type NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const defaultLocale: string = "en";
const supportedLocale: string[] = ["en", "bn"];

const detectLocale = (request: NextRequest) => {
  const acceptedLang = request.headers.get("accept-language") || undefined;
  const headers = { "accept-language": acceptedLang };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, supportedLocale, defaultLocale);
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isPathnameHasLocale = supportedLocale.some((locale) =>
    pathname.startsWith(`/${locale}`)
  );
  if (isPathnameHasLocale) return NextResponse.next();
  else {
    const preferredLocale = detectLocale(request);
    request.nextUrl.pathname = `/${preferredLocale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }
}

export const config = {
  matcher: [
    // Skip /_next/, /assets/
    "/((?!_next|assets|/).*)",
  ],
};
