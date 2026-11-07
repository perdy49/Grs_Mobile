import {
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { styles } from "../../styles/notif";

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

