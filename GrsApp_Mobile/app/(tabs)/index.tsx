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

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.locationLabel}>Lokasi</Text>
            <Text style={styles.location}>Sukabumi Jawa Barat</Text>
          </View>

          <TouchableOpacity
            style={styles.bell}
            onPress={() => router.push("/(function)/notif")}>
            <Ionicons name="notifications-outline" size={18} color="#4CAF50" />
          </TouchableOpacity>
        </View>

        {/* SEARCH */}
        <View style={styles.searchBox}>
          <Ionicons name="search" size={16} color="#999" />
          <TextInput placeholder="Cari disini..." style={styles.searchInput} />
        </View>

        {/* BANNER */}
        <View style={styles.banner}>
          <View>
            <Text style={styles.bannerText}>Harga Mulai dari</Text>
            <Text style={styles.bannerTextBold}>20 ribu saja!</Text>

            <TouchableOpacity style={styles.bannerButton}>
              <Text style={styles.bannerButtonText}>Cek Disini</Text>
            </TouchableOpacity>
          </View>

          <Image
            source={require("../../assets/images/sample-produk1.png")}
            style={styles.bannerImage}
          />
        </View>

        {/* DOTS */}
        <View style={styles.dots}>
          <View style={[styles.dot, { backgroundColor: "#4CAF50" }]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        {/* KATEGORI */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Kategori</Text>
          <Text style={styles.seeAll}>Lihat Semua</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {["Pupuk", "Buah", "Sayuran", "Bibit", "Booster"].map((item, i) => (
            <View key={i} style={styles.categoryItem}>
              <Image
                source={require("../../assets/images/sample-produk2.png")}
                style={styles.categoryImage}
              />
              <Text style={styles.categoryText}>{item}</Text>
            </View>
          ))}
        </ScrollView>

        {/* DISKON */}
        <Text style={styles.sectionTitle}>Barang Diskon</Text>

        <View style={styles.tabs}>
          <Text style={styles.tabActive}>Semua</Text>
          <Text style={styles.tab}>Diskon</Text>
          <Text style={styles.tab}>Populer</Text>
        </View>

        {/* PRODUK */}
        <View style={styles.products}>
          {[1, 2, 3].map((_, i) => (
            <TouchableOpacity
              key={i}
              style={styles.card}
              onPress={() => router.push("/detail" as any)}
            >
              <Image
                source={require("../../assets/images/sample-produk1.png")}
                style={styles.productImage}
              />

              <Text style={styles.productName}>Jeruk 1kg</Text>
              <Text style={styles.price}>Rp 10.000</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 40,
    paddingHorizontal: 20
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  locationLabel: {
    fontSize: 12,
    color: "#777"
  },

  location: {
    fontSize: 14,
    fontWeight: "600"
  },

  bell: {
    backgroundColor: "#E8F5E9",
    padding: 8,
    borderRadius: 20
  },

  searchBox: {
    marginTop: 15,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 15,
    alignItems: "center"
  },

  searchInput: {
    marginLeft: 10,
    flex: 1
  },

  banner: {
    marginTop: 20,
    backgroundColor: "#4CAF50",
    borderRadius: 15,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  bannerText: {
    color: "#fff",
    fontSize: 12
  },

  bannerTextBold: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700"
  },

  bannerButton: {
    marginTop: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 10
  },

  bannerButtonText: {
    color: "#4CAF50",
    fontSize: 12
  },

  bannerImage: {
    width: 80,
    height: 80,
    resizeMode: "contain"
  },

  dots: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#ccc",
    marginHorizontal: 4
  },

  sectionHeader: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 45,
  },

  seeAll: {
    fontSize: 12,
    color: "#4CAF50"
  },

  categoryItem: {
    alignItems: "center",
    marginRight: 15,
    marginTop: 10
  },

  categoryImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },

  categoryText: {
    fontSize: 12,
    marginTop: 5
  },

  tabs: {
    flexDirection: "row",
    marginTop: 35
  },

  tabActive: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    marginRight: 10,
    fontSize: 12
  },

  tab: {
    backgroundColor: "#eee",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    marginRight: 10,
    fontSize: 12
  },

  products: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 30
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 12
  },

  productImage: {
    width: "100%",
    height: 70,
    borderRadius: 10
  },

  productName: {
    fontSize: 12,
    marginTop: 5
  },

  price: {
    fontSize: 12,
    color: "#4CAF50",
    fontWeight: "600"
  }
});