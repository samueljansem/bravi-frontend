import { createStitches } from '@stitches/react';

export const { styled, globalCss } = createStitches({
    theme: {
        fonts: {
            default: 'Roboto, sans-serif',
        },
        fontSizes: {
            md: '93.75%',
            sm: '87.5%',
        },
        fontWeights: {
            normal: 400,
            bold: 600,
        },
        colors: {
            primary: '#2176ff',
            hiContrast: '#121214',
            hiContrast2: '#29292e',
            loContrast: '#E6E6E6',
            loContrast2: '#AEAEAE',
            gray: '#777777',
        },
    },
    media: {
        md: '(min-width: 720px) and (max-width: 1080px)',
        sm: '(max-width: 720px)',
    },
});
