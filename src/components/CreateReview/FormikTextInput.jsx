import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from '../TextInput';
import Text from '../Text';
import theme from '../../theme';
import { useState } from 'react';


const styles = StyleSheet.create({
  errorText: {
    color: theme.colors.error,
    padding: theme.paddingLeft.error
  },

});

const FormikTextInput = ({ name, placeholder, multiline, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const [ height, setHeight] = useState(40);
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
        style={{borderRadius: 10, height: height}}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        placeholder={placeholder}
        secureTextEntry={shouldBeSecureOrNot()}
        multiline={multiline}
        onContentSizeChange={(event) => setHeight(event.nativeEvent.contentSize.height)}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;