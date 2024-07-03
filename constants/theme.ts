import colors from "@/constants/colors";
import { fontSizes, metrics } from "@/constants/metrics";
import commonStyles from "@/constants/styles";

enum FontFamily {
  Roboto = "SpaceGroteskBold",
  SpaceGroteskBold = "SpaceGroteskBold",
  SpaceGroteskMedium = "SpaceGroteskMedium",
  SpaceGroteskRegular = "SpaceGroteskRegular",
  Helevetica = "Helvetica",
}

export const theme = {
  colors,
  commonStyles,
  metrics,
  fontfamily: FontFamily,
  fontSizes,
};
