import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: theme.colors.white
    },
    secureText: {
        secureTextEntry: true
    }
});

const TextInput = ({ style, errors, ...props }) => {
  const textInputStyle = [
        styles.input,
        style === 'secureText' && styles.secureText,
        style

    ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;