import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { styles } from "../../styles/product";
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
            <TouchableOpacity
              key={i}
              style={styles.card}
              onPress={() => router.push("/(function)/detail")}
            >
              <Image
                source={require("../../assets/images/sample-produk1.png")}
                style={styles.cardImage}
              />

              <Text style={styles.cardTitle}>Jeruk 1 Kg</Text>
              <Text style={styles.price}>Rp 10.000</Text>

              <TouchableOpacity
                style={styles.buyBtn}
                onPress={() => router.push("/(function)/detail")}
              >
                <Text style={styles.buyText}>Beli</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

