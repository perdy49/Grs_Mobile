import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
  },

  /* HEADER */
  header: {
    height: 170,
    position: "relative",
  },

  headerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  headerTop: {
    marginTop: 50,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  headerIcons: {
    flexDirection: "row",
    gap: 14,
  },

  /* PROFILE */
  profileWrapper: {
    marginTop: -40,
    paddingHorizontal: 16,
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
    elevation: 4,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },

  name: {
    fontWeight: "bold",
    fontSize: 14,
  },

  email: {
    fontSize: 12,
    color: "#777",
  },

  /* DETAIL INFORMASI */
  section: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginTop: 24,
    borderRadius: 18,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
  },

  sectionSubtitle: {
    fontSize: 11,
    color: "#999",
    marginTop: 4,
  },

  /* ADD BUTTON */
  addBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4CAF50",
    paddingHorizontal: 13,
    paddingVertical: 9,
    borderRadius: 20,
    gap: 4,
  },

  addText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },

  /* INFORMATION ITEM */
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F8F9F8",
    borderWidth: 1,
    borderColor: "#EEEEEE",
    borderRadius: 14,
    padding: 13,
  },

  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 12,
  },

  itemIcon: {
    width: 46,
    height: 46,
    borderRadius: 13,
    backgroundColor: "#E8F5E9",
    justifyContent: "center",
    alignItems: "center",
  },

  itemInfo: {
    flex: 1,
  },

  itemTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
  },

  itemSub: {
    fontSize: 11,
    color: "#777",
    marginTop: 4,
  },

  itemBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 7,
  },

  badgeText: {
    fontSize: 10,
    color: "#4CAF50",
    fontWeight: "500",
  },

  itemRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginLeft: 5,
  },

  actionBtn: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: "#EEEEEE",
    justifyContent: "center",
    alignItems: "center",
  },

  /* LOGOUT */
  logoutBtn: {
    marginHorizontal: 16,
    marginTop: 24,
    backgroundColor: "#E53935",
    paddingVertical: 14,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  logoutText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});
