import * as React from "react";
import Svg, { SvgProps, G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const PlusIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="#868A99"
        fillRule="evenodd"
        d="M8 0c.93 0 1.684.754 1.684 1.684v4.632h4.632a1.684 1.684 0 1 1 0 3.368H9.684v4.632a1.684 1.684 0 1 1-3.368 0V9.684H1.684a1.684 1.684 0 0 1 0-3.368h4.632V1.684C6.316.754 7.07 0 8 0Z"
        clipRule="evenodd"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default PlusIcon;
