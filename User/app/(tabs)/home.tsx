import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import {styles} from "../../styles/home";
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
            onPress={() => router.push("/(function)/notif")}
          >
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

