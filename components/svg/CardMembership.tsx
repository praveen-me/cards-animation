import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg";

const CardMembership = (props: SvgProps) => (
  <Svg width={34} height={35} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M28.333 3.333H5.667a2.824 2.824 0 0 0-2.834 2.834V21.75a2.824 2.824 0 0 0 2.834 2.833h5.666v7.084L17 28.833l5.667 2.834v-7.084h5.666a2.823 2.823 0 0 0 2.834-2.833V6.167a2.824 2.824 0 0 0-2.834-2.834Zm0 18.417H5.667v-2.833h22.666v2.833Zm0-7.083H5.667v-8.5h22.666v8.5Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 .5h34v34H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default CardMembership;
