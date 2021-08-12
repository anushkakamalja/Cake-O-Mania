const { urlObjectKeys } = require('next/dist/next-server/lib/utils');

module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                'footer-bg': "url('/images/cakebg.png')"
            }),
            colors: {
                cyan: {
                    DEFAULT: '#5fcac7'
                }
            },
            fontFamily: {
                header: ['Merienda One'],
                body: ['ABeeZee'],
                hero: ['Leckerli One']
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
