import {SafeAreaView} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

function AppGradient({ children, colors }: Readonly<{ children: any, colors: string[] }>) {
  return (
    <LinearGradient colors={colors} className="flex-1">
      <SafeAreaView className="flex-1 px-5 pt-12">
        {children}
      </SafeAreaView>
    </LinearGradient>
  )
}

export default AppGradient;
