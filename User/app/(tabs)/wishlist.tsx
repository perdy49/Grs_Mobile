import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { styles } from "../../styles/wishlist";
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

