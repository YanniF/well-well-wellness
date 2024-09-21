import {ImageBackground, SafeAreaView, Text, View} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import {StatusBar} from "expo-status-bar";

import beachImage from '@/assets/meditation-images/beach.webp'

function index() {
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient className="flex-1" colors={['rgba(0, 0, 0, .3)', 'rgba(0, 0, 0, .7)']}>
          <SafeAreaView className="flex flex-1 px-1 justify-between">
            <View>
              <Text className="text-center text-white font-bold text-4xl mt-6">Well Well Wellness</Text>
              <Text className="text-center text-white text-regular text-2xl mt-3">
                Simplifying Meditation for Everyone
              </Text>
            </View>
            <StatusBar style="light" />
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

export default index;
