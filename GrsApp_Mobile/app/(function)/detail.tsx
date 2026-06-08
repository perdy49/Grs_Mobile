import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, Stack } from "expo-router";
import { useState } from "react";

import DateTimePicker from "@react-native-community/datetimepicker";

export default function DetailScreen() {
  const router = useRouter();
  const [showCheckout, setShowCheckout] = useState(false);

  const [selectedPayment, setSelectedPayment] = useState("");
  const [selectedWallet, setSelectedWallet] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [selectedSchedule, setSelectedSchedule] = useState("");
  const [customDate, setCustomDate] = useState("");

  const [showPaymentDropdown, setShowPaymentDropdown] = useState(false);

  const [addressDetail, setAddressDetail] = useState("");

  const [region, setRegion] = useState({
    latitude: -6.9175,
    longitude: 107.6191,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  const [deliveryDate, setDeliveryDate] = useState(new Date());

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        {/* BACK BUTTON */}
        {!showCheckout && (
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => router.back()}
          >
            <Ionicons name="chevron-back" size={22} color="#333" />
          </TouchableOpacity>
        )}

        {/* IMAGE */}
        <View style={styles.topSection}>
          <Image
            source={require("../../assets/images/detail.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* CARD */}
        <View style={styles.card}>
          <Text style={styles.title}>Tanaman 1</Text>

          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>4.0 (100 pengunjung)</Text>
          </View>

          <View style={styles.sizeGroup}>
            <View style={styles.sizeRow}>
              <TouchableOpacity style={styles.sizeBtn}>
                <Text style={styles.sizeText}>Kecil</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.sizeBtn, styles.activeSize]}>
                <Text style={styles.sizeTextActive}>Sedang</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.sizeRowCenter}>
              <TouchableOpacity style={styles.sizeBtn}>
                <Text style={styles.sizeText}>Besar</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.descTitle}>Tentang:</Text>
          <Text style={styles.descText}>
            Barang ini adalah pupuk dengan pot yang kami sediakan dan juga
            terdapat tanaman untuk dibudidayakan.
          </Text>

          <TouchableOpacity
            style={styles.buyBtn}
            onPress={() => setShowCheckout(true)}
          >
            <Text style={styles.buyText}>Beli</Text>
          </TouchableOpacity>
        </View>

        {showCheckout && (
          <View style={styles.modalOverlay}>
            <View style={styles.modalCard}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.modalTitle}>Checkout Produk</Text>

                <Text style={styles.sectionTitle}>Informasi Produk</Text>

                <Text style={styles.modalText}>Tanaman 1 - Ukuran Sedang</Text>

                <Text style={styles.modalText}>Harga : Rp 10.000</Text>

                <Text style={styles.sectionTitle}>Metode Pembayaran</Text>

                <TouchableOpacity
                  style={styles.dropdownBtn}
                  onPress={() => setShowPaymentDropdown(!showPaymentDropdown)}
                >
                  <Text>{selectedPayment || "Pilih Metode Pembayaran"}</Text>

                  <Ionicons
                    name={showPaymentDropdown ? "chevron-up" : "chevron-down"}
                    size={18}
                    color="#555"
                  />
                </TouchableOpacity>

                {showPaymentDropdown && (
                  <>
                    <TouchableOpacity
                      style={[
                        styles.selectCard,
                        selectedPayment === "E-Wallet" && styles.selectedCard
                      ]}
                      onPress={() => {
                        setSelectedPayment("E-Wallet");
                        setSelectedBank("");
                      }}
                    >
                      <Text
                        style={
                          selectedPayment === "E-Wallet"
                            ? styles.selectedText
                            : styles.selectText
                        }
                      >
                        E-Wallet
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[
                        styles.selectCard,
                        selectedPayment === "Transfer Bank" &&
                          styles.selectedCard
                      ]}
                      onPress={() => {
                        setSelectedPayment("Transfer Bank");
                        setSelectedWallet("");
                      }}
                    >
                      <Text
                        style={
                          selectedPayment === "Transfer Bank"
                            ? styles.selectedText
                            : styles.selectText
                        }
                      >
                        Transfer Bank
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[
                        styles.selectCard,
                        selectedPayment === "COD" && styles.selectedCard
                      ]}
                      onPress={() => {
                        setSelectedPayment("COD");
                        setSelectedWallet("");
                        setSelectedBank("");
                      }}
                    >
                      <Text
                        style={
                          selectedPayment === "COD"
                            ? styles.selectedText
                            : styles.selectText
                        }
                      >
                        Cash On Delivery (COD)
                      </Text>
                    </TouchableOpacity>
                  </>
                )}

                {selectedPayment === "E-Wallet" && (
                  <>
                    <Text style={styles.sectionTitle}>Pilih E-Wallet</Text>

                    {["GoPay", "DANA", "OVO"].map((wallet) => (
                      <TouchableOpacity
                        key={wallet}
                        style={[
                          styles.selectCard,
                          selectedWallet === wallet && styles.selectedCard
                        ]}
                        onPress={() => setSelectedWallet(wallet)}
                      >
                        <Text
                          style={
                            selectedWallet === wallet
                              ? styles.selectedText
                              : styles.selectText
                          }
                        >
                          {wallet}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </>
                )}

                {selectedPayment === "Transfer Bank" && (
                  <>
                    <Text style={styles.sectionTitle}>Pilih Bank</Text>

                    {["BCA", "BRI", "Mandiri", "BNI"].map((bank) => (
                      <TouchableOpacity
                        key={bank}
                        style={[
                          styles.selectCard,
                          selectedBank === bank && styles.selectedCard
                        ]}
                        onPress={() => setSelectedBank(bank)}
                      >
                        <Text
                          style={
                            selectedBank === bank
                              ? styles.selectedText
                              : styles.selectText
                          }
                        >
                          {bank}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </>
                )}

                <Text style={styles.sectionTitle}>Lokasi Pengiriman</Text>

                <MapView
                  style={styles.map}
                  region={region}
                  onRegionChangeComplete={(value) => setRegion(value)}
                >
                  <Marker
                    coordinate={{
                      latitude: region.latitude,
                      longitude: region.longitude
                    }}
                    draggable
                    onDragEnd={(e) =>
                      setRegion({
                        ...region,
                        latitude: e.nativeEvent.coordinate.latitude,
                        longitude: e.nativeEvent.coordinate.longitude
                      })
                    }
                  />
                </MapView>

                <TextInput
                  style={styles.addressInput}
                  placeholder="Masukkan alamat lengkap, nama jalan, RT/RW, patokan lokasi, dll"
                  multiline
                  value={addressDetail}
                  onChangeText={setAddressDetail}
                />

                <Text style={styles.sectionTitle}>Jadwal Pengiriman</Text>

                {[
                  "Pagi (08:00 - 12:00)",
                  "Siang (13:00 - 17:00)",
                  "Sore (18:00 - 21:00)",
                  "Custom"
                ].map((item) => (
                  <TouchableOpacity
                    key={item}
                    style={[
                      styles.selectCard,
                      selectedSchedule === item && styles.selectedCard
                    ]}
                    onPress={() => setSelectedSchedule(item)}
                  >
                    <Text
                      style={
                        selectedSchedule === item
                          ? styles.selectedText
                          : styles.selectText
                      }
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}

                {selectedSchedule === "Custom" && (
                  <>
                    <TouchableOpacity
                      style={styles.selectCard}
                      onPress={() => setShowDatePicker(true)}
                    >
                      <Text>{deliveryDate.toLocaleDateString("id-ID")}</Text>
                    </TouchableOpacity>

                    {showDatePicker && (
                      <DateTimePicker
                        value={deliveryDate}
                        mode="date"
                        minimumDate={new Date()}
                        onChange={(event, date) => {
                          setShowDatePicker(false);

                          if (date) {
                            setDeliveryDate(date);
                          }
                        }}
                      />
                    )}
                  </>
                )}

                <View style={styles.summaryBox}>
                  <Text>Produk : Rp 10.000</Text>
                  <Text>Ongkir : Rp 5.000</Text>
                  <Text style={styles.totalText}>Total : Rp 15.000</Text>
                </View>

                <TouchableOpacity style={styles.payBtn}>
                  <Text style={styles.payText}>Bayar Sekarang</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.closeBtn}
                  onPress={() => setShowCheckout(false)}
                >
                  <Text style={styles.closeText}>Tutup</Text>
                </TouchableOpacity>
              </ScrollView>
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
    backgroundColor: "#fff"
  },

  backBtn: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
    backgroundColor: "#eee",
    borderRadius: 20,
    padding: 6
  },

  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
    marginBottom: 40
  },

  image: {
    width: 200,
    height: 200
  },

  card: {
    flex: 1,
    backgroundColor: "#4CAF6A",
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 50
  },

  topSection: {
    alignItems: "center",
    marginTop: 140,
    marginBottom: 20
  },

  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5
  },

  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15
  },

  ratingText: {
    color: "#fff",
    marginLeft: 5,
    fontSize: 12
  },

  sizeContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10
  },

  sizeBtn: {
    backgroundColor: "#ddd",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20
  },

  activeSize: {
    backgroundColor: "#A5D6A7"
  },

  sizeText: {
    fontSize: 12,
    color: "#333"
  },

  sizeTextActive: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold"
  },

  descTitle: {
    color: "#fff",
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 13
  },

  descText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 5,
    marginBottom: 15
  },

  buyBtn: {
    backgroundColor: "#5DADE2",
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20
  },

  buyText: {
    color: "#fff",
    fontWeight: "bold"
  },

  sizeWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginBottom: 15
  },

  sizeGroup: {
    marginBottom: 15,
    marginTop: 35
  },

  sizeRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 8
  },

  sizeRowCenter: {
    flexDirection: "row",
    justifyContent: "center"
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
    width: "100%",
    maxHeight: "80%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10
  },

  modalText: {
    fontSize: 13,
    marginBottom: 5
  },

  optionRow: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },

  summaryBox: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#F5F5F5",
    borderRadius: 10
  },

  totalText: {
    marginTop: 8,
    fontWeight: "bold",
    color: "#4CAF50"
  },

  payBtn: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20
  },

  payText: {
    color: "#fff",
    fontWeight: "bold"
  },

  closeBtn: {
    marginTop: 10,
    alignItems: "center"
  },

  closeText: {
    color: "#666"
  },

  dropdownBtn: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  selectCard: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    padding: 12,
    marginTop: 8
  },

  selectedCard: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50"
  },

  selectText: {
    color: "#333"
  },

  selectedText: {
    color: "#fff",
    fontWeight: "bold"
  },

  map: {
    width: "100%",
    height: 220,
    borderRadius: 15,
    marginTop: 10
  },

  addressInput: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    padding: 12,
    marginTop: 12,
    minHeight: 90,
    textAlignVertical: "top"
  }
});
