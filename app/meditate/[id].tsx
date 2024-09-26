import {ImageBackground, Pressable, Text, View} from "react-native";
import {router, useLocalSearchParams} from "expo-router";
import {AntDesign} from "@expo/vector-icons";
import CustomButton from "@/components/CustomButton";
import {useEffect, useState} from "react";
import {Audio} from "expo-av";

import AppGradient from "@/components/AppGradient";
import MeditationImages from "@/constants/meditation-images";
import { MEDITATION_DATA, AUDIO_FILES } from "@/constants/meditation-data";
import {useTimerContext} from "@/context/TimerContext";

function Meditate() {
  const {id} = useLocalSearchParams()

  const { duration: secondsRemaining, setDuration } = useTimerContext()

  const [isMeditating, setIsMeditating] = useState<boolean>(false)
  const [sound, setSound] = useState<Audio.Sound>();
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  const formattedMinutes = String(Math.floor(secondsRemaining / 60)).padStart(2, '0')
  const formattedSeconds = String(Math.floor(secondsRemaining % 60)).padStart(2, '0')

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (secondsRemaining === 0) {
      if (isPlayingAudio) {
        sound?.pauseAsync()
      }

      setIsMeditating(false)
      setIsPlayingAudio(false)

      return
    }

    if (isMeditating) {
      timerId = setTimeout(() => {
        setDuration(secondsRemaining - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timerId)
    }
  }, [secondsRemaining, isMeditating]);

  useEffect(() => {
    return () => {
      setDuration(10)
      sound?.unloadAsync()
    }
  }, [sound]);

  const toggleMeditationSessionStatus = async () => {
    if (secondsRemaining === 0) {
      setDuration(10)
    }

    setIsMeditating(!isMeditating)

    await toggleSound()
  }

  const toggleSound = async () => {
    const audio = sound || await initializeSound()

    const status = await audio?.getStatusAsync()

    if (status?.isLoaded && !isPlayingAudio) {
      await audio.playAsync()
      setIsPlayingAudio(true)
    }
    else {
      await audio.pauseAsync()
      setIsPlayingAudio(false)
    }
  }

  const initializeSound = async () => {
    const audioFileName = MEDITATION_DATA[Number(id) - 1].audio;

    const { sound } = await Audio.Sound.createAsync(
      AUDIO_FILES[audioFileName]
    );

    setSound(sound);

    return sound;
  }

  const handleAdjustDuration = () => {
    if (isMeditating) {
      toggleMeditationSessionStatus()
    }

    router.push('/(modal)/adjust-meditation-duration');
  };

  return (
    <View className="flex-1">
      <ImageBackground
        source={MeditationImages[Number(id) - 1]}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["transparent", "rgba(0,0,0,0.4)"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-16 left-6 z-10"
          >
            <AntDesign
              name="leftcircleo" size={48} color="white" />
          </Pressable>

          <View className="flex-1 justify-center">
            <View className="mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center">
              <Text className="text-4xl text-gray-800 font-rmono">
                {formattedMinutes}:{formattedSeconds}
              </Text>
            </View>
          </View>

          <View className="mb-5">
            <CustomButton
              title="Adjust duration"
              onPress={handleAdjustDuration}
            />
            <CustomButton
              title={isMeditating ? "Stop" : "Start Meditation"}
              onPress={toggleMeditationSessionStatus}
              containerStyles="mt-4"
            />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  )
}

export default Meditate;
