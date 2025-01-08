import { TouchableOpacity, Text } from "react-native";

import { ButtonProps } from "@/types/type";

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return "bg-[#FFE8D6]";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
    case "info":
      return "bg-[#15919B]";
    case "outline":
      return "bg-transparent border-neutral-300 border-[0.5px]";
    default:
      return "bg-[#5E3023]";
      // return "bg-[#181f32]";
  }
};

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return "text-white";
    case "secondary":
      return "text-[#5E3023]";
    case "danger":
      return "text-red-100";
    case "success":
      return "text-green-100";
    case "info":
      return "text-green-100";
    default:
      return "text-white";
  }
};

const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  classname,
  textClassname,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full rounded-lg p-3 flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${getBgVariantStyle(bgVariant)} ${classname}`}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <Text className={`text-lg font-RobotoMedium ${getTextVariantStyle(textVariant)} ${textClassname}`}>
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;