import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const HistoryEducationIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={35}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M12.75 6.167v1.955a10.033 10.033 0 0 0-3.698-.709 9.878 9.878 0 0 0-7.012 2.905l4.717 4.717H8.33v1.573a6.623 6.623 0 0 0 4.406 1.926v3.216H8.5V26a2.842 2.842 0 0 0 2.833 2.833H25.5a4.244 4.244 0 0 0 4.25-4.25V6.167h-17Zm-1.572 9.08v-3.045h-3.23l-1.474-1.474a7.184 7.184 0 0 1 2.578-.481c1.899 0 3.67.736 5.016 2.068l1.997 1.998-.283.283a3.826 3.826 0 0 1-2.72 1.133c-.666 0-1.318-.17-1.884-.481Zm15.739 9.336A1.42 1.42 0 0 1 25.5 26a1.42 1.42 0 0 1-1.417-1.417V21.75h-8.5v-3.67a6.6 6.6 0 0 0 2.21-1.458l.284-.284 4.009 3.995h1.997v-1.997l-8.5-8.458V9h11.334v15.583Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 .5h34v34H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default HistoryEducationIcon;
