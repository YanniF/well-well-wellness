import {router, useLocalSearchParams} from "expo-router";
import {ImageBackground, Pressable, ScrollView, Text, View} from "react-native";
import {useEffect, useState} from "react";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import {GalleryPreviewData} from "@/constants/models/AffirmationCategory";
import AppGradient from "@/components/AppGradient";
import {AntDesign} from "@expo/vector-icons";

function AffirmationPractice () {
  const {itemId} = useLocalSearchParams()

  const [affirmation, setAffirmation] = useState<GalleryPreviewData>()
  const [sentences, setSentences] = useState<string[]>([]);

  useEffect(() => {
    for (const aff of AFFIRMATION_GALLERY) {
      const affirmationToStart = aff.data.find(a => a.id === Number(itemId));

      if (affirmationToStart) {
        setAffirmation(affirmationToStart)

        const affirmationsArray = affirmationToStart.text.split(".");

        if (affirmationsArray[affirmationsArray.length - 1] === "") {
          affirmationsArray.pop();
        }

        setSentences(affirmationsArray);

        return;
      }
    }
  }, [])

  return (
    <View className="flex-1">
      <ImageBackground source={affirmation?.image} resizeMode="cover" className="flex-1">
        <AppGradient colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]}>
          <Pressable onPress={() => router.back()} className="absolute top-16 left-6 z-10">
            <AntDesign name="leftcircleo" size={48} color="white" />
          </Pressable>

          <ScrollView
            className="mt-20"
            showsVerticalScrollIndicator={false}
          >
            <View className="h-full border-white justify-center">
              <View className="h-4/5 justify-center">
                {sentences.map((sentence, i) => (
                  <Text
                    className="text-white text-3xl mb-12 font-bold text-center"
                    key={'sentence-' + i}
                  >
                    {sentence}.
                  </Text>
                ))}
              </View>
            </View>
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  )
}

export default AffirmationPractice
