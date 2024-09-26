import {ImageBackground, Text, View} from 'react-native';
import {StatusBar} from "expo-status-bar";
import {useRouter} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import Animated, {
  FadeInDown,
  FadeInUp,
  withSpring,
} from "react-native-reanimated";

import CustomButton from "@/components/CustomButton";
import AppGradient from "@/components/AppGradient";
// @ts-ignore
import beachImage from '@/assets/meditation-images/beach.webp'

function App() {
  const router = useRouter()

  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={['rgba(0, 0,  0, .3)', 'rgba(0, 0, 0, .4)']}>
          <SafeAreaView className="flex flex-1 px-1 pb-12 justify-between">
            <Animated.View
              entering={FadeInDown.delay(300)
                .mass(0.5)
                .stiffness(80)
                .springify(20)}
            >
              <Text className="text-center text-white font-bold text-4xl">Well Well Wellness</Text>
              <Text className="text-center text-white text-regular text-2xl mt-3">
                Simplifying Meditation for Everyone
              </Text>
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(300)
              .mass(0.5)
              .stiffness(80)
              .springify(20)}
            >
              <CustomButton onPress={() => router.push('/nature-meditate')} title="Get Started"/>
            </Animated.View>
            <StatusBar style="light"/>
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
}

export default App;
