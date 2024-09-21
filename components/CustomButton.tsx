import {TouchableOpacity, Text} from "react-native";

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  textStyles?: string;
  containerStyles?: string;
}

function CustomButton({ title, textStyles = '', containerStyles = '', onPress }: Readonly<CustomButtonProps>) {
  return (
    <TouchableOpacity
      activeOpacity={.7}
      className={`bg-white rounded-xl min-h-[62px] justify-center items-center ${containerStyles} `}
      onPress={onPress}
    >
      <Text className={`text-primary font-semibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton;
