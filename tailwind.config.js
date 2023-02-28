const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './node_modules/flowbite-react/**/*.js',
        './components/**/*.{html,js,ts,jsx,tsx}',
        './pages/**/*.{html,js,ts,jsx,tsx}',
        './index.html',
        // Or if using `src` directory:
        './src/**/*.{html,js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
        colors: {
            primary: colors.blue,
            secondary: colors.neutral,
            neutral: colors.gray,
            black: colors.black,
            white: colors.white,
            zinc: colors.zinc,
            blue: colors.blue,
        },
    },
    plugins: [require('flowbite/plugin')],
    darkMode: 'media',
};
