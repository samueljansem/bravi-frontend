import { globalCss } from '../stitches.config';

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },

    body: {
        background: '$loContrast',
        color: '$hiContrast',
        '-webkit-font-smoothing': 'antialiased',
    },

    html: {
        '@md': {
            fontSize: '$md',
        },
        '@sm': {
            fontSize: '$sm',
        },
    },

    'body, input, textarea, select, button': {
        fontWeight: '$normal',
        fontSize: '1rem',
        fontFamily: '$default',
    },

    'h1, h2, h3, h4, h5, h6, strong': {
        fontWeight: '$bold',
    },

    button: {
        cursor: 'pointer',
    },

    a: {
        color: 'inherit',
        textDecoration: 'none',
    },
});
