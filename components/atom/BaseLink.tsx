import { StyleSheet, TouchableOpacity } from "react-native";
import { Href, router } from "expo-router";

import { StyledText } from "@/components/atom/index";
import { FONTS } from "@/constants/Fonts";

interface BaseLinkProps {
  label: string;
  link: string;
}

export default function BaseLink({ label, link }: BaseLinkProps) {
  return (
    <TouchableOpacity onPress={() => router.push(link as Href<unknown>)}>
      <StyledText style={baseLinkStyles.baseLinkLabel}>{label}</StyledText>
    </TouchableOpacity>
  );
}

const baseLinkStyles = StyleSheet.create({
  baseLinkLabel: {
    color: "#3d83ee",
    fontSize: 16,
    fontFamily: FONTS.RubikMedium,
    fontWeight: "500",
  },
});
