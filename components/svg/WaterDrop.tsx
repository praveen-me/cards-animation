import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const WaterDrop = (props) => (
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
        d="M17 3.333C9.45 9.78 5.667 15.347 5.667 20.05c0 7.055 5.383 11.617 11.333 11.617s11.333-4.562 11.333-11.617c0-4.703-3.782-10.27-11.333-16.717Zm0 25.5c-4.746 0-8.5-3.64-8.5-8.783 0-3.315 2.762-7.707 8.5-12.948 5.738 5.241 8.5 9.619 8.5 12.948 0 5.142-3.754 8.783-8.5 8.783Zm-5.908-8.5c.525 0 .95.369 1.049.879.58 3.145 3.23 4.221 5.156 4.066.61-.029 1.12.453 1.12 1.062 0 .567-.454 1.034-1.02 1.063-3.018.184-6.545-1.545-7.353-5.837-.113-.638.397-1.233 1.048-1.233Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 .5h34v34H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default WaterDrop;
