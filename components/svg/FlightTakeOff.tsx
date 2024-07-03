import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const FlightTakeOff = (props) => (
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
        d="M3.542 27.417h26.916v2.833H3.542v-2.833Zm27.724-13.26a2.12 2.12 0 0 0-2.607-1.502l-7.522 2.012-9.775-9.11-2.735.723 5.865 10.157-7.04 1.885L4.66 16.14l-2.054.552 3.669 6.361 23.474-6.276a2.156 2.156 0 0 0 1.516-2.62Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 .5h34v34H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default FlightTakeOff;
