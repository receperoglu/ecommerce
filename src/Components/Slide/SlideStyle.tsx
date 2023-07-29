import { createStyles, rem } from '@mantine/core';

export const SlideStyle = createStyles((theme) => ({
    card: {
        height: rem(440),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundSize: '50%',
        backgroundRepeat: "no-repeat", 
        backgroundPosition: "bottom"
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        color: theme.black,
        lineHeight: 1.2,
        fontSize: rem(32),
        marginTop: theme.spacing.xs,
    },

    category: {
        backgroundColor: theme.colors.red,
        color: theme.white,
        opacity: 0.7,
        fontWeight: 700,
        textTransform: 'uppercase',
        borderRadius: theme.radius.md,
        padding: theme.spacing.md
    },
}));