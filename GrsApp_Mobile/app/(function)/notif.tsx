import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";

import { useState } from "react";
import QRCode from "react-native-qrcode-svg";

export default function NotificationPage() {
  const router = useRouter();
  const [showQrModal, setShowQrModal] = useState(false);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#333" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Notifikasi</Text>

          <View style={{ width: 24 }} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* SECTION 1 */}
          <Text style={styles.date}>14 Oktober 2024</Text>

          {[...Array(4)].map((_, i) => (
            <View key={i} style={styles.card}>
              <View style={styles.cardLeft}>
                <Ionicons name="receipt-outline" size={20} color="#fff" />
              </View>

              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>
                  Pembelian Handphone Oppo A6
                </Text>
                <Text style={styles.cardSub}>Pembelian berhasil</Text>
              </View>

              <TouchableOpacity onPress={() => setShowQrModal(true)}>
                <Ionicons name="chevron-forward" size={20} color="#fff" />
              </TouchableOpacity>
              
            </View>
          ))}

          {/* SECTION 2 */}
          <Text style={styles.date}>5 Januari 2025</Text>

          {[...Array(3)].map((_, i) => (
            <View key={i} style={styles.card}>
              <View style={styles.cardLeft}>
                <Ionicons name="receipt-outline" size={20} color="#fff" />
              </View>

              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>
                  Pembelian Handphone Oppo A6
                </Text>
                <Text style={styles.cardSub}>Pembelian berhasil</Text>
              </View>

              <TouchableOpacity onPress={() => setShowQrModal(true)}>
                <Ionicons name="chevron-forward" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          ))}

          <View style={{ height: 100 }} />
        </ScrollView>

        {/* FLOATING BUTTON */}
        <TouchableOpacity style={styles.fab}>
          <Ionicons name="add" size={24} color="#fff" />
        </TouchableOpacity>

        {showQrModal && (
          <View style={styles.modalOverlay}>
            <View style={styles.modalCard}>
              <Text style={styles.modalTitle}>Lacak Barang</Text>

              <QRCode value="GRSAPP-TRACKING-001" size={180} />

              <Text style={styles.modalDesc}>
                Scan QR Code untuk melihat status pengiriman barang.
              </Text>

              <TouchableOpacity
                style={styles.closeBtn}
                onPress={() => setShowQrModal(false)}
              >
                <Text style={styles.closeText}>Tutup</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </>
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
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 10
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: "bold"
  },

  date: {
    fontSize: 12,
    color: "#888",
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 10
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4CAF50",
    marginHorizontal: 16,
    marginBottom: 10,
    borderRadius: 12,
    padding: 12
  },

  cardLeft: {
    width: 35,
    height: 35,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10
  },

  cardContent: {
    flex: 1
  },

  cardTitle: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600"
  },

  cardSub: {
    color: "#E8F5E9",
    fontSize: 11,
    marginTop: 2
  },

  fab: {
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "#4CAF50",
    width: 55,
    height: 55,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5
  },

  modalOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20
  },

  modalCard: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 20,
    padding: 25,
    alignItems: "center"
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 20
  },

  modalDesc: {
    textAlign: "center",
    marginTop: 20,
    color: "#666",
    fontSize: 13,
    lineHeight: 20
  },

  closeBtn: {
    marginTop: 25,
    backgroundColor: "#4CAF50",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 12
  },

  closeText: {
    color: "#fff",
    fontWeight: "600"
  }
});
