import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const HealthAndSafety = (props) => (
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
        d="M14.875 18.917h-3.542v-4.25h3.542v-3.542h4.25v3.542h3.542v4.25h-3.542v3.541h-4.25v-3.541ZM17 3.333 5.667 7.583v8.628c0 7.154 4.83 13.827 11.333 15.456 6.503-1.63 11.333-8.302 11.333-15.456V7.583L17 3.333Zm8.5 12.878c0 5.667-3.613 10.908-8.5 12.509-4.887-1.6-8.5-6.828-8.5-12.51V9.553L17 6.366l8.5 3.188v6.658Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 .5h34v34H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default HealthAndSafety;
