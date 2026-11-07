import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  useWindowDimensions
} from "react-native";
import { styles } from "../styles/onboarding"
import { useRef, useState } from "react";
import { useRouter } from "expo-router";

const MAX_WIDTH = 420;

const slides = [
  {
    id: "1",
    title: "Mari berkenalan dengan aplikasi kami GreensApp",
    subtitle:
      "GreensApp adalah aplikasi yang bergerak di bidang jual beli seputar tanaman",
    image: require("../assets/images/animasi.png"),
    button: "Get Started"
  },
  {
    id: "2",
    title: "Beli Apapun di GreensApp Tanaman dan pupuk Tersedia",
    subtitle:
      "Di GreensApp kamu bisa membeli kebutuhan pertanian dan sebagainya",
    image: require("../assets/images/animasi1.png"),
    button: "Next"
  },
  {
    id: "3",
    title: "Mari memulai bersama Aplikasi GreensApp",
    subtitle: "Ayo coba sekarang dan lihat produk yang kami sediakan",
    image: require("../assets/images/animasi2.png"),
    button: "Next"
  }
];

export default function Onboarding() {
  const router = useRouter();
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width } = useWindowDimensions();
  
  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true
      });
    } else {
      router.replace("/(auth)/login");
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        {/* Skip */}
        {currentIndex !== 0 && (
          <TouchableOpacity
            style={styles.skip}
            onPress={() => router.replace("/(auth)/login")}
          >
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        )}

        {/* Slides */}
        <View style={styles.sliderWrapper}>
          <FlatList
            style={{ flex: 1 }}
            contentContainerStyle={{ flexGrow: 1 }}
            ref={flatListRef}
            data={slides}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            getItemLayout={(_, index) => ({
              length: width,
              offset: width * index,
              index
            })}
            onScroll={(e) => {
              const index = Math.round(e.nativeEvent.contentOffset.x / width);
              setCurrentIndex(index);
            }}
            scrollEventThrottle={16}
            renderItem={({ item }) => (
              <View style={[styles.slide, { width }]}>
                <View style={styles.content}>
                  <Image source={item.image} style={styles.image} />

                  <Text style={styles.title}>{item.title}</Text>

                  <Text style={styles.subtitle}>{item.subtitle}</Text>
                </View>
              </View>
            )}
          />
        </View>

        <View style={styles.bottom}>
          <View style={styles.dots}>
            {slides.map((_, i) => (
              <View
                key={i}
                style={[
                  styles.dot,
                  {
                    backgroundColor: i === currentIndex ? "#4CAF50" : "#D9D9D9"
                  }
                ]}
              />
            ))}
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={handleNext}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>
              {slides[currentIndex]?.button || "Next"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
