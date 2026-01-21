export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/my-dashboard/', '/my-properties/', '/my-message/', '/my-profile/'],
        },
        sitemap: 'https://jxre.ca/sitemap.xml',
    };
}
