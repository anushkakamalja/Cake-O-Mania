const colors = require('tailwindcss/colors');
module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            blueGray: colors.blueGray,
            coolGray: colors.coolGray,
            gray: colors.gray,
            trueGray: colors.trueGray,
            warmGray: colors.warmGray,
            red: colors.red,
            orange: colors.orange,
            amber: colors.amber,
            yellow: colors.yellow,
            lime: colors.lime,
            green: colors.green,
            emerald: colors.emerald,
            teal: colors.teal,
            cyan: colors.cyan,
            sky: colors.sky,
            blue: colors.blue,
            indigo: colors.indigo,
            violet: colors.violet,
            purple: colors.purple,
            fuchsia: colors.fuchsia,
            pink: colors.pink,
            rose: colors.rose,
            white: colors.white,
            black: colors.black,
            myCyan: {
                100: '#5fcac7'
            },
            brown: {
                100: '#4b4342'
            },
            lightPink: {
                100: '#ff91a4'
            }
        },
        extend: {
            backgroundImage: (theme) => ({
                'footer-bg': "url('/images/footer.jpg')"
            }),
            fontFamily: {
                header: ['Merienda One'],
                body: ['ABeeZee'],
                hero: ['Leckerli One']
            }
        }
    },
    variants: {
        extend: {
            invert: ['hover', 'focus'],
            display: ['group-hover']
        }
    },
    plugins: []
};
