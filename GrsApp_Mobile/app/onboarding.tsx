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

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center"
  },

  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40
  },

  skip: {
    position: "absolute",
    top: 40, // 🔥 turunin sedikit
    right: 30,
    zIndex: 999,
    elevation: 10 // 🔥 WAJIB buat Android
  },

  skipText: {
    color: "#4CAF50",
    fontSize: 12
  },

  // 🔥 FIX UTAMA
  slide: {
    flex: 1, // 🔥 INI KUNCI
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10
  },

  image: {
    width: 180,
    height: 180,
    resizeMode: "contain",
    marginBottom: 24
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 8,
    maxWidth: 260
  },

  green: {
    color: "#4CAF50"
  },

  subtitle: {
    fontSize: 12,
    color: "#777",
    textAlign: "center",
    marginBottom: 20,
    maxWidth: 260
  },

  dots: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 4
  },

  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 70, // 🔥 bikin ga full lebar
    borderRadius: 16,
    alignSelf: "center" // 🔥 biar di tengah
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 13,
    fontWeight: "600"
  },
  sliderWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  bottom: {
    paddingBottom: 30
  },

  content: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  }
});
