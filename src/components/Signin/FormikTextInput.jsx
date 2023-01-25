import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from '../TextInput';
import Text from '../Text';
import theme from '../../theme';


const styles = StyleSheet.create({
  errorText: {
    color: theme.colors.error,
    padding: theme.paddingLeft.error
  },

});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  const shouldBeSecureOrNot = () => {
    if (name === 'password') {
        return true;
        }
    return false;
    };
    

  return (
    <>
      <TextInput
        style={{borderRadius: 10}}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        placeholder={name}
        secureTextEntry={shouldBeSecureOrNot()}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;