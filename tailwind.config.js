module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                cyan: {
                    100: '#5fcac7'
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
        extend: {
            display: ['group-hover']
        }
    },
    plugins: []
};
