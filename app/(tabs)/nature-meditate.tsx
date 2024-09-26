import {FlatList, ImageBackground, Pressable, Text, View, StyleSheet} from "react-native";
import AppGradient from "@/components/AppGradient";
import {StatusBar} from "expo-status-bar";

import { MEDITATION_DATA, MeditationType } from "@/constants/meditation-data";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import {LinearGradient} from "expo-linear-gradient";
import {router} from "expo-router";

function NatureMeditate() {
  return (
    <View className="flex-1">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View className="my-6">
          <Text className="text-gray-200 mb-3 font-bold text-4xl text-left">
            Welcome back
          </Text>
          <Text className="text-indigo-100 text-xl font-medium">
            Start your meditation practice today
          </Text>
        </View>
        <View>
          <FlatList
            data={MEDITATION_DATA}
            className="mb-20"
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => router.push(`/meditate/${item.id}`)}
                className="h-48 my-3 rounded-md overflow-hidden"
              >
                <ImageBackground
                  source={MEDITATION_IMAGES[item.id - 1]}
                  resizeMode="cover"
                  className="flex-1 rounded-lg justify-center"
                >
                  <LinearGradient
                    colors={["transparent", "rgba(0, 0, 0, 0.4)"]}
                    className="items-center justify-center w-full h-full"
                  >
                    <Text className="text-gray-100 text-3xl font-bold text-center">{item.title}</Text>
                  </LinearGradient>
                </ImageBackground>
              </Pressable>
            )}
          />
        </View>
      </AppGradient>

      <StatusBar style="light" />
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: 150,
  },
});

export default NatureMeditate;
