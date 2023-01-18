import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    input: {
        height: 40,
        marginLeft: 12,
        marginRight: 12,
        marginTop: 12,
        borderWidth: 1,
        padding: theme.padding.signIn,
        backgroundColor: theme.colors.white
    },
    secureText: {
        secureTextEntry: true
    },
    error: {
        borderColor: theme.colors.error
    }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
        styles.input,
        style === 'secureText' && styles.secureText,
        error !== undefined && styles.error,
        style

    ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;