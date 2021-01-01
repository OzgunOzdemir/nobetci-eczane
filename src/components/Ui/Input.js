import React from "react";
import { TextInput } from "react-native";

const InputComponent = ({
  value,
  onChangeText,
  secureTextEntry,
  maxLength,
  multiline,
  numberOfLines,
  placeholder,
  keyboardType,
  onChange,
  editable
}) => {
  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      autoCorrect={false}
      multiline={multiline}
      numberOfLines={numberOfLines}
      style={{borderWidth: 1, borderColor: "#ffffff",  backgroundColor: "#ffffff", color: "#58595B", fontWeight: "normal", fontSize: 17, paddingLeft: 20, marginTop:10, borderRadius: 10, height: 50, width: "100%"}}
      value={value}
      onChangeText={onChangeText}
      maxLength={maxLength}
      placeholder={placeholder}
      keyboardType={keyboardType}
      onChange={onChange}
      editable={editable}
    />
  );
};

export { InputComponent };