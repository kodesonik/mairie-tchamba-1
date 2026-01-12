/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                'tchamba-green': '#006a4e', // Togo Green
                'tchamba-yellow': '#ffce00', // Togo Yellow
                'tchamba-red': '#d21034',   // Togo Red
            }
        },
    },
    plugins: [],
}
