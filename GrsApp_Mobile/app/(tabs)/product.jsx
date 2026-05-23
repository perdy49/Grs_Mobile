import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function ProductPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color="#999" />
          <TextInput placeholder="Cari Disini..." style={styles.input} />
        </View>

        <TouchableOpacity
          style={styles.iconCircle}
          onPress={() => router.push("/(function)/notif")}
        >
          <Ionicons name="notifications-outline" size={20} color="#4CAF50" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* BANNER */}
        <View style={styles.banner}>
          <Image
            source={require("../../assets/images/sample-produk3.png")}
            style={styles.bannerImage}
          />
          <View style={styles.bannerText}>
            <Text style={styles.bannerTitle}>Harga Mulai dari</Text>
            <Text style={styles.bannerPrice}>20.000</Text>
          </View>
        </View>

        {/* DOT INDICATOR */}
        <View style={styles.dots}>
          <View style={styles.dotActive} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        {/* KATEGORI */}
        <View style={styles.categoryContainer}>
          {[...Array(10)].map((_, i) => (
            <View key={i} style={styles.categoryItem}>
              <Image
                source={require("../../assets/images/logo2.png")}
                style={styles.categoryImage}
              />
              <Text style={styles.categoryText}>Paket Buah</Text>
            </View>
          ))}
        </View>

        {/* REKOMENDASI */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Rekomendasi Produk</Text>
          <TouchableOpacity style={styles.filterBtn}>
            <Text>Semua</Text>
          </TouchableOpacity>
        </View>

        {/* PRODUK LIST */}
        <View style={styles.productGrid}>
          {[...Array(6)].map((_, i) => (
            <View key={i} style={styles.card}>
              <Image
                source={require("../../assets/images/sample-produk1.png")}
                style={styles.cardImage}
              />
              <Text style={styles.cardTitle}>Jeruk 1 Kg</Text>

              <TouchableOpacity style={styles.buyBtn}>
                <Text style={styles.buyText}>Beli</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 50,
    marginBottom: 10
  },

  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    borderRadius: 20,
    height: 40
  },

  input: {
    marginLeft: 8,
    flex: 1
  },

  iconCircle: {
    marginLeft: 10,
    backgroundColor: "#E8F5E9",
    padding: 10,
    borderRadius: 50
  },

  banner: {
    marginHorizontal: 16,
    borderRadius: 15,
    overflow: "hidden",
    marginTop: 30,
  },

  bannerImage: {
    width: "100%",
    height: 140
  },

  bannerText: {
    position: "absolute",
    left: 10,
    top: 10
  },

  bannerTitle: {
    color: "#fff",
    fontSize: 12
  },

  bannerPrice: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },

  dots: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
    marginTop: 20,
    marginBottom:40
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#ccc",
    marginHorizontal: 3
  },

  dotActive: {
    width: 6,
    height: 6,
    borderRadius: 4,
    backgroundColor: "#4CAF50",
    marginHorizontal: 3
  },

  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },

  categoryItem: {
    width: "18%",
    alignItems: "center",
    marginBottom: 15
  },

  categoryImage: {
    width: 40,
    height: 40,
    marginBottom: 5,
    borderRadius: 20,
  },

  categoryText: {
    fontSize: 10,
    textAlign: "center",
    color: "#4CAF50",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // 🔥 INI KUNCI
    paddingHorizontal: 16,
    marginTop: 30,
    marginBottom: 30
  },

  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16
  },

  filterBtn: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6
  },

  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 12,
    padding: 10
  },

  cardImage: {
    width: "100%",
    height: 80,
    borderRadius: 10
  },

  cardTitle: {
    marginTop: 5,
    fontSize: 12
  },

  buyBtn: {
    marginTop: 5,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    paddingVertical: 5,
    alignItems: "center"
  },

  buyText: {
    color: "#fff",
    fontSize: 12
  }
});