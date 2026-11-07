import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { styles } from "../../styles/profile";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, Stack } from "expo-router";

export default function ProfilePage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/bg-profile1.png")}
          style={styles.headerBg}
        />

        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>Profile Saya</Text>

          <View style={styles.headerIcons}>
            <Ionicons name="create-outline" size={18} color="#fff" />
            <Ionicons name="search-outline" size={18} color="#fff" />
            <Ionicons name="menu-outline" size={18} color="#fff" />
          </View>
        </View>
      </View>

      {/* PROFILE CARD */}
      <View style={styles.profileWrapper}>
        <View style={styles.profileCard}>
          <Image
            source={require("../../assets/images/icon-profile1.png")}
            style={styles.avatar}
          />

          <View>
            <Text style={styles.name}>Perdy Imam Samudra</Text>
            <Text style={styles.email}>perdyimam@gmail.com</Text>
          </View>
        </View>
      </View>

      {/* CONTENT */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* DETAIL INFORMASI */}
        <View style={styles.section}>
          {/* SECTION HEADER */}
          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>Detail Informasi</Text>
              <Text style={styles.sectionSubtitle}>
                Informasi pendidikan Anda
              </Text>
            </View>

            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => router.push("/(auth)/login")}
            >
              <Ionicons name="add" size={18} color="#fff" />
              <Text style={styles.addText}>Tambah</Text>
            </TouchableOpacity>
          </View>

          {/* INFORMATION CARD */}
          <View style={styles.item}>
            <View style={styles.itemLeft}>
              <View style={styles.itemIcon}>
                <Ionicons name="school-outline" size={23} color="#4CAF50" />
              </View>

              <View style={styles.itemInfo}>
                <Text style={styles.itemTitle}>Universitas Nusa Putra</Text>

                <Text style={styles.itemSub}>Teknik Informatika</Text>

                <View style={styles.itemBadge}>
                  <Ionicons name="checkmark-circle" size={13} color="#4CAF50" />
                  <Text style={styles.badgeText}>Pendidikan</Text>
                </View>
              </View>
            </View>

            <View style={styles.itemRight}>
              <TouchableOpacity style={styles.actionBtn}>
                <Ionicons name="create-outline" size={19} color="#555" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionBtn}>
                <Ionicons name="trash-outline" size={19} color="#E53935" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* LOGOUT */}
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => router.replace("/(auth)/login")}
        >
          <Ionicons name="log-out-outline" size={20} color="#fff" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

