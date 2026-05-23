import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
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
        {/* SECTION 1 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Detail Informasi</Text>

          {[...Array(2)].map((_, i) => (
            <View key={i} style={styles.item}>
              <View style={styles.itemLeft}>
                <Ionicons name="school-outline" size={20} color="#555" />
                <View>
                  <Text style={styles.itemTitle}>Universitas Nusa Putra</Text>
                  <Text style={styles.itemSub}>Teknik Informatika</Text>
                </View>
              </View>

              <View style={styles.itemRight}>
                <Ionicons name="create-outline" size={18} color="#555" />
                <Ionicons name="trash-outline" size={18} color="#555" />
              </View>
            </View>
          ))}

          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => router.push("/(auth)/login")}>
            <Text style={styles.addText}>Buat Informasi Baru</Text>
          </TouchableOpacity>
        </View>

        {/* SECTION 2 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Detail Informasi</Text>

          {[...Array(2)].map((_, i) => (
            <View key={i} style={styles.item}>
              <View style={styles.itemLeft}>
                <Ionicons name="school-outline" size={20} color="#555" />
                <View>
                  <Text style={styles.itemTitle}>Universitas Nusa Putra</Text>
                  <Text style={styles.itemSub}>Teknik Informatika</Text>
                </View>
              </View>

              <View style={styles.itemRight}>
                <Ionicons name="create-outline" size={18} color="#555" />
                <Ionicons name="trash-outline" size={18} color="#555" />
              </View>
            </View>
          ))}
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3"
  },

  /* HEADER */
  header: {
    height: 170,
    position: "relative"
  },

  headerBg: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },

  headerTop: {
    marginTop: 50,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },

  headerIcons: {
    flexDirection: "row",
    gap: 14
  },

  /* PROFILE */
  profileWrapper: {
    marginTop: -40,
    paddingHorizontal: 16
  },

  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 14,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12
  },

  name: {
    fontWeight: "bold",
    fontSize: 14
  },

  email: {
    fontSize: 12,
    color: "#777"
  },

  /* SECTION */
  section: {
    backgroundColor: "#EDEDED",
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 14,
    padding: 14
  },

  sectionTitle: {
    fontSize: 12,
    marginBottom: 10,
    color: "#555"
  },

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd"
  },

  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },

  itemTitle: {
    fontSize: 12,
    fontWeight: "500"
  },

  itemSub: {
    fontSize: 11,
    color: "#777"
  },

  itemRight: {
    flexDirection: "row",
    gap: 10
  },

  addBtn: {
    marginTop: 15,
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center"
  },

  addText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "500"
  }
});
