import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("screen").width;
const designBaseWidth = 532;

export const scaleSizeFromBase = (size: number) => {
  const scaleFactor = screenWidth / designBaseWidth;
  return size * scaleFactor;
};

export const getCards = () => {
  return [
    {
      cardBg: require("@/assets/images/card_bg_1.png"),
      name: "Ananya Khan",
      cardNumber: "6674 6691 9800 7355",
      expiryDate: "03/24",
      bankName: "Tech Bank",
    },
    {
      cardBg: require("@/assets/images/card_bg_2.png"),
      name: "Ananya Khan",
      cardNumber: "2330 9264 2286 1529",
      expiryDate: "01/30",
      bankName: "Tech Bank",
    },
    {
      cardBg: require("@/assets/images/card_bg_3.png"),
      name: "Aarav Nair",
      cardNumber: "3436 3991 4782 5454",
      expiryDate: "07/28",
      bankName: "Tech Bank",
    },
    {
      cardBg: require("@/assets/images/card_bg_4.png"),
      name: "Meera Sharma",
      cardNumber: "3859 2664 7906 2615",
      expiryDate: "04/27",
      bankName: "Future Bank",
    },
    {
      cardBg: require("@/assets/images/card_bg_5.png"),
      name: "Vivaan Patel",
      cardNumber: "7462 6979 1777 6729",
      expiryDate: "02/24",
      bankName: "Creative Bank",
      theme: "dark",
    },
    {
      cardBg: require("@/assets/images/card_bg_6.png"),
      name: "Maya Nair",
      cardNumber: "8551 1175 7591 1286",
      expiryDate: "06/27",
      bankName: "Bank of Designers",
    },
    {
      cardBg: require("@/assets/images/card_bg_7.png"),
      name: "Ishaan Patel",
      cardNumber: "9569 8946 5453 9320",
      expiryDate: "04/26",
      bankName: "Future Bank",
    },
    {
      cardBg: require("@/assets/images/card_bg_8.png"),
      name: "Vivaan Bose",
      cardNumber: "8529 7736 1457 4476",
      expiryDate: "04/24",
      bankName: "Innovators Bank",
      theme: "dark",
    },
    {
      cardBg: require("@/assets/images/card_bg_9.png"),
      name: "Ananya Reddy",
      cardNumber: "6861 7093 4909 6034",
      expiryDate: "07/25",
      bankName: "Creative Bank",
    },
    {
      cardBg: require("@/assets/images/card_bg_10.png"),
      name: "Ishaan Sharma",
      cardNumber: "6437 4584 2631 9806",
      expiryDate: "12/27",
      bankName: "Tech Bank",
    },
    {
      cardBg: require("@/assets/images/card_bg_11.png"),
      name: "Kabir Bose",
      cardNumber: "1929 5795 5524 2500",
      expiryDate: "03/29",
      bankName: "Bank of Designers",
    },
  ];
};
