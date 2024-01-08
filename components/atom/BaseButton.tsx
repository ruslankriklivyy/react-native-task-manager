import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { ReactNode } from "react";

import { StyledText } from "@/components/atom/index";
import { FONTS } from "@/constants/Fonts";

interface BaseButtonProps {
  onPress: () => void;
  prevElement?: ReactNode;
  style?: StyleProp<ViewStyle>;
  styleLabel?: StyleProp<TextStyle>;
  label: string;
  activeOpacity?: number;
}

export default function BaseButton({
  label,
  activeOpacity = 0.7,
  prevElement,
  style,
  styleLabel,
  onPress,
}: BaseButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={[baseButtonStyles.baseButton, style]}
      onPress={() => onPress()}
    >
      <View style={baseButtonStyles.baseButtonContent}>
        {prevElement && (
          <View style={baseButtonStyles.prevElement}>{prevElement}</View>
        )}

        <StyledText style={[baseButtonStyles.baseButtonLabel, styleLabel]}>
          {label}
        </StyledText>
      </View>
    </TouchableOpacity>
  );
}

const baseButtonStyles = StyleSheet.create({
  baseButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ABC4EA",
    padding: 15,
    borderRadius: 15,
  },
  baseButtonContent: {
    alignItems: "center",
    flexDirection: "row",
  },
  baseButtonLabel: {
    fontSize: 16,
    color: "#000",
    fontFamily: FONTS.RubikMedium,
    fontWeight: "500",
  },
  prevElement: {
    marginRight: 15,
  },
});
