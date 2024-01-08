import { StyleSheet, TextInput } from "react-native";
import { FONTS } from "@/constants/Fonts";

interface BaseInputProps {
  onChange: (value: string) => void;
  placeholder?: string;
  hasError?: boolean;
  value: string;
}

export default function BaseInput({
  value,
  placeholder,
  hasError = false,
  onChange,
}: BaseInputProps) {
  return (
    <TextInput
      style={[
        baseInputStyles.input,
        { borderColor: hasError ? "red" : "inherit" },
      ]}
      placeholder={placeholder}
      onChangeText={onChange}
      value={value}
    />
  );
}

const baseInputStyles = StyleSheet.create({
  input: {
    width: "100%",
    fontSize: 16,
    fontFamily: FONTS.RubikRegular,
    height: 50,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#939396",
    borderRadius: 8,
  },
});
