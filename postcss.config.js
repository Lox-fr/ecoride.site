export const plugins = {
    autoprefixer: {},
    "@fullhuman/postcss-purgecss": {
        content: [
            "./templates/*.html.twig",
            "./templates/**/*.html.twig",
            "./assets/*.js",
            "./assets/**/*.js",
        ],
    },
};
