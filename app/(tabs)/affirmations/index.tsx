import {View, Text, ScrollView} from "react-native";

import AppGradient from "@/components/AppGradient";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery"
import GuidedAffirmationsGallery from "@/components/GuidedAffirmationsGallery";

function Index() {
  return (
    <View className="flex-1">
      <AppGradient colors={['#2e1f58', '#54426b', '#a790af']}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-zinc-50 text-3xl font-bold">Change your beliefs with affirmations</Text>
          <View>
            {AFFIRMATION_GALLERY.map((item) => (
              <GuidedAffirmationsGallery
                key={item.title}
                title={item.title}
                previews={item.data}
              />
            ))}
          </View>
        </ScrollView>
      </AppGradient>

    </View>
  )
}

export default Index;
