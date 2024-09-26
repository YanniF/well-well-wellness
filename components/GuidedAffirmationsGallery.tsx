import {GalleryPreviewData} from "@/constants/models/AffirmationCategory";
import {FlatList, Image, Pressable, Text, View} from "react-native";
import {Link} from "expo-router";

interface GuidedAffirmationsGalleryProps {
  title: string;
  previews: GalleryPreviewData[],
}

function GuidedAffirmationsGallery({ title, previews }: GuidedAffirmationsGalleryProps) {
  return (
    <View className="my-5">
      <View className="mb-2">
        <Text className="text-white font-bold text-xl">{ title }</Text>
      </View>
      <View className="space-y-2">
        <FlatList
          data={previews}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          renderItem={({ item, index }) => (
            <Link href={`/affirmations/${item.id}`} asChild>
              <Pressable>
                <View className="h-36 w-32 rounded-md mr-4">
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    className="w-full h-full rounded-md"
                  />
                  <Text>ProductGallery</Text>
                </View>
              </Pressable>
            </Link>
          )}
        />
      </View>
    </View>
  )
}

export default GuidedAffirmationsGallery
