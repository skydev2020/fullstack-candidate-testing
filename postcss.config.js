module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        // Ziada: running PurgeCSS in production to keep the CSS size to a minimum.
        ...(process.env.NODE_ENV === 'production'
            ? {
                '@fullhuman/postcss-purgecss': {
                    content: [
                        './components/**/*.js',
                        './pages/**/*.js'
                    ],
                    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
                }
            }
            : {})
    }
};