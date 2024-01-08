import { View as DefaultView } from "react-native";

import useThemeColor from "../../hooks/useThemeColor";
import { ThemeProps } from "../../types/common/ThemeProps";

export type StyledViewProps = ThemeProps & DefaultView["props"];

export default function StyledView(props: StyledViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
