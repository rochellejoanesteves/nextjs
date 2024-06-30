import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: ["en", "ko", "cn"],
    defaultLocale: "en"
});

export const config = {
    matcher: ["/", "/(en|ko|cn)/:path*"]
}

