import { Text } from "react-native";

import { Text as DefaultText } from "react-native/Libraries/Text/Text";
import { ThemeProps } from "@/types/common/ThemeProps";

export type StyledTextProps = ThemeProps & DefaultText["props"];

export default function StyledText(props: StyledTextProps) {
  const { style, ...otherProps } = props;

  return (
    <Text
      {...props}
      style={[
        props.style,
        { fontFamily: "RubikRegular", color: "#000" },
        style,
      ]}
      {...otherProps}
    />
  );
}
