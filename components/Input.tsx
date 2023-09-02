import { StyleSheet, Text, TextInput, View } from "react-native";
import { FC } from "react";
import { InputProps } from "../interfaces/InputProps";

export const Input: FC<InputProps> = ({
  label,
  value,
  onChangeText,
  keyboardType,
  exampleText,
  error,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, error && styles.inputError]}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
      {exampleText && <Text style={styles.example}>{exampleText}</Text>}
      {error && <Text style={styles.errorMessage}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
    width: "100%",
  },
  label: {
    fontSize: 18,
    color: "#fff",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    marginTop: 5,
    color: "#fff",
  },
  inputError: {
    borderColor: "red",
  },
  example: {
    fontSize: 12,
    color: "#888",
  },
  errorMessage: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});
