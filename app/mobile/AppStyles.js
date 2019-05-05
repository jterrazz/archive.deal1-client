import { StyleSheet } from "react-native";

export const colors = {
  textBase: "rgb(29, 29, 31)",
  textClear: "rgb(173, 173, 179)",
  textClearer: "rgb(223, 224, 237)",
  backgroundBase: "rgb(247, 247, 248)",
  borderClear: "rgb(240, 240, 245)",
  primaryBase: "rgb(128, 136, 223)",
  primaryDark: "rgb(118, 113, 188)",
  tagColors: [" rgb(244, 173, 148)", "rgb(96, 213, 190)", "rgb(117, 171, 242)", "rgb(245, 207, 70)"]
};

export const sizes = {
  xs: 5,
  sm: 10,
  base: 20,
  lg: 40,
  xl: 80,

  // Radius
  borderRadius: 5,

  // Text
  textBase: 16,
  textSmall: 12,
  h1: 23,
  h2: 21,
  h3: 19
};

export const shadows = {
  light: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.07,
    shadowRadius: 5
  }
};

export default StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundBase: {
    backgroundColor: colors.backgroundBase
  },
  inputWhite: {
    backgroundColor: "white",
    borderColor: colors.borderClear,
    borderRadius: sizes.borderRadius,
    borderWidth: 1,
    paddingTop: 3,
    paddingBottom: 3,
    marginLeft: -10,
    marginRight: -10,
    ...shadows.light
  },
  textTitle: {
    color: colors.textBase,
    fontSize: sizes.h1
  }
});
