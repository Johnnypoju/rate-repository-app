import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontfamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorTextSecondary: {
        color: theme.colors.textSecondary
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorBanner: {
        color: theme.colors.white
    },
    fontSizeSubHeading: {
        fontSize: theme.fontSizes.subheading
    },
    fontWeightBold: {
        fontWeight: theme.fontWeights.bold
    },
    padding: {
        paddingBottom: theme.padding.backgroundBottom,
        paddingTop: theme.padding.paddingTop
    },
    backGroundColorLanguages: {
        backgroundColor: theme.colors.primary,
        color: theme.colors.white,
        backgroundRadius: theme.colors.backgroundRadius,
        alignSelf: 'flex-start',
        padding: theme.padding.languageBar,
        borderRadius: theme.borderRadius.languageBar

    },
    stats: {
        textAlign: 'center',
        fontWeight: theme.fontWeights.bold
    },
    statDescription: {
        textAlign: 'center',
        color: 'grey'
    },

});

const Text = ({ color, fontSize, fontWeight, style, backgroundColor, type, padding, ...props}) => {
    const textStyle = [
        styles.text,
        color === 'textSecondary' && styles.colorTextSecondary,
        color === 'primary' && styles.colorPrimary,
        color === 'white' && styles.colorBanner,
        padding === 'padding' && styles.padding,
        fontSize === 'subHeading' && styles.fontSizeSubHeading,
        fontWeight === 'bold' && styles.fontWeightBold,
        backgroundColor === 'languages' && styles.backGroundColorLanguages,
        type === 'stats' && styles.stats,
        type === 'description' && styles.statDescription,
        style
    ];

    return <NativeText style={textStyle} {...props} />
};

export default Text;