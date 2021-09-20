const colors = require('tailwindcss/colors');
module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        stroke: (theme) => ({
            cyan: theme('colors.myCyan.100'),
            choco: theme('colors.mybrown.100'),
            pink: theme('colors.mypink.100'),
            white: theme('colors.white.100')
        }),
        fill: (theme) => ({
            mypink: theme('colors.mypink.100'),
            white: theme('colors.white'),
            transparent: theme('colors.transparent'),
            cyan: theme('colors.myCyan.100')
        }),

        colors: {
            transparent: 'transparent',
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
            mybrown: {
                100: '#4b4342'
            },
            mypink: {
                100: '#ff91a4'
            },
            mygrey: {
                100: '#edecec',
                200: '#f8f8f8'
            }
        },

        extend: {
            backgroundImage: (theme) => ({
                'footer-bg': "url('/images/footer.jpg')",
                spec: "url('/images/spec.jpg')",
                'cake-bg': "url('/images/cakedivider.png')",
                'video-bg': "url('/images/video_bg4.png')",
                'checkout-bg': "url('/images/donuts.jpg')"
            }),

            fontFamily: {
                header: ['Merienda One'],
                body: ['ABeeZee'],
                hero: ['Leckerli One']
            },
            strokeWidth: {
                6: '6',
                8: '8'
            }
        }
    },
    variants: {
        extend: {
            invert: ['hover', 'focus'],
            display: ['group-hover'],
            fill: ['hover', 'focus']
        }
    },
    plugins: []
};
