import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function WishlistPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#333" />
        </TouchableOpacity>

        <Text style={styles.title}>Wishlist</Text>

        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* FILTER */}
        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterActive}>
            <Text style={styles.filterActiveText}>Semua</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filterBtn}>
            <Text style={styles.filterText}>Wishlist Pilihan</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filterBtn}>
            <Text style={styles.filterText}>Lainnya</Text>
          </TouchableOpacity>
        </View>

        {/* GRID PRODUK */}
        <View style={styles.grid}>
          {[...Array(6)].map((_, i) => (
            <View key={i} style={styles.card}>
              <View>
                <Image
                  source={require("../../assets/images/sample-produk3.png")}
                  style={styles.image}
                />

                {/* LOVE ICON */}
                <TouchableOpacity style={styles.loveIcon}>
                  <Ionicons name="heart" size={14} color="#fff" />
                </TouchableOpacity>
              </View>

              <Text style={styles.name}>Apel 1kg</Text>
              <Text style={styles.price}>Rp. 20.000</Text>
            </View>
          ))}
        </View>

        {/* PAGINATION */}
        <View style={styles.pagination}>
          <View style={styles.pageActive}>
            <Text style={styles.pageActiveText}>1</Text>
          </View>

          <View style={styles.page}>
            <Text>2</Text>
          </View>

          <View style={styles.page}>
            <Text>3</Text>
          </View>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 50
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 10,
    marginTop: 15
  },

  title: {
    fontSize: 16,
    fontWeight: "bold"
  },

  filterContainer: {
  flexDirection: "row",
  justifyContent: "center", // 🔥 INI KUNCI
  alignItems: "center",
  gap: 8,
  marginBottom: 50,
  marginTop: 40
},

  filterActive: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20
  },

  filterActiveText: {
    color: "#fff",
    fontSize: 12
  },

  filterBtn: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20
  },

  filterText: {
    fontSize: 12
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16
  },

  card: {
    width: "48%",
    marginBottom: 30
  },

  image: {
    width: "100%",
    height: 120,
    borderRadius: 12
  },

  loveIcon: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#4CAF50",
    borderRadius: 20,
    padding: 6
  },

  name: {
    marginTop: 10,
    fontSize: 12
  },

  price: {
    fontSize: 11,
    color: "#666"
  },

  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    gap: 8
  },

  page: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center"
  },

  pageActive: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center"
  },

  pageActiveText: {
    color: "#fff",
    fontSize: 10
  }
});
