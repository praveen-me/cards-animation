import CardMembership from "@/components/svg/CardMembership";
import ChipIcon from "@/components/svg/ChipIcon";
import FingerPrint from "@/components/svg/FingerPrint";
import FlightTakeOff from "@/components/svg/FlightTakeOff";
import HealthAndSafety from "@/components/svg/HealthAndSafety";
import HistoryEducationIcon from "@/components/svg/HistoryEducationIcon";
import LightBulb from "@/components/svg/LightBulb";
import Visa from "@/components/svg/Visa";
import WaterDrop from "@/components/svg/WaterDrop";
import WifiIcon from "@/components/svg/WifiIcon";
import React from "react";

const icons = {
  lightBulb: LightBulb,
  fingerPrint: FingerPrint,
  takeoff: FlightTakeOff,
  waterDrop: WaterDrop,
  healthAndSafety: HealthAndSafety,
  historyEducation: HistoryEducationIcon,
  cardMemberShip: CardMembership,
  chipIcon: ChipIcon,
  wifi: WifiIcon,
  visa: Visa,
};

interface ISvgIconProps {
  icon: keyof typeof icons;
  size?: number;
  fill?: string;
}

export default function SvgIcon(props: ISvgIconProps) {
  if (!props.icon) return null;

  const Icon = icons[props.icon];
  return <Icon {...props} />;
}
