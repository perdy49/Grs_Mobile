import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, Stack } from "expo-router";

export default function DetailScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        {/* BACK BUTTON */}
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={22} color="#333" />
        </TouchableOpacity>

        {/* IMAGE */}
        <View style={styles.topSection}>
          <Image
            source={require("../../assets/images/detail.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* CARD */}
        <View style={styles.card}>
          <Text style={styles.title}>Tanaman 1</Text>

          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>4.0 (100 pengunjung)</Text>
          </View>

          <View style={styles.sizeGroup}>
            <View style={styles.sizeRow}>
              <TouchableOpacity style={styles.sizeBtn}>
                <Text style={styles.sizeText}>Kecil</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.sizeBtn, styles.activeSize]}>
                <Text style={styles.sizeTextActive}>Sedang</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.sizeRowCenter}>
              <TouchableOpacity style={styles.sizeBtn}>
                <Text style={styles.sizeText}>Besar</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.descTitle}>Tentang:</Text>
          <Text style={styles.descText}>
            Barang ini adalah pupuk dengan pot yang kami sediakan dan juga
            terdapat tanaman untuk dibudidayakan.
          </Text>

          <TouchableOpacity style={styles.buyBtn}>
            <Text style={styles.buyText}>Beli</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  backBtn: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
    backgroundColor: "#eee",
    borderRadius: 20,
    padding: 6
  },

  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
    marginBottom: 40
  },

  image: {
    width: 200,
    height: 200
  },

  card: {
    flex: 1,
    backgroundColor: "#4CAF6A",
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 50
  },

  topSection: {
    alignItems: "center",
    marginTop: 140,
    marginBottom: 20
  },

  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5
  },

  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15
  },

  ratingText: {
    color: "#fff",
    marginLeft: 5,
    fontSize: 12
  },

  sizeContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10
  },

  sizeBtn: {
    backgroundColor: "#ddd",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20
  },

  activeSize: {
    backgroundColor: "#A5D6A7"
  },

  sizeText: {
    fontSize: 12,
    color: "#333"
  },

  sizeTextActive: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold"
  },

  descTitle: {
    color: "#fff",
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 13
  },

  descText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 5,
    marginBottom: 15
  },

  buyBtn: {
    backgroundColor: "#5DADE2",
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
  },

  buyText: {
    color: "#fff",
    fontWeight: "bold"
  },

  sizeWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginBottom: 15
  },

  sizeGroup: {
    marginBottom: 15,
    marginTop: 35,
  },

  sizeRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 8
  },

  sizeRowCenter: {
    flexDirection: "row",
    justifyContent: "center"
  }
});
