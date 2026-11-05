import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [successVisible, setSuccessVisible] = useState(false);

  const handleRegister = () => {
    setSuccessVisible(true);

    setTimeout(() => {
      setSuccessVisible(false);
      router.replace("/login");
    }, 2500);
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <Image
            source={require("../../assets/images/bubble1.png")}
            style={styles.bubble}
          />

          <Text style={styles.title}>Create Your{"\n"}Account</Text>
        </View>

        {/* CARD */}
        <View style={styles.card}>
          <Text style={styles.label}>Nama</Text>
          <TextInput placeholder="NamaKamu" style={styles.input} />

          <Text style={styles.label}>Email</Text>
          <TextInput placeholder="EmailKamu@gmail.com" style={styles.input} />

          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordWrapper}>
            <TextInput
              placeholder="PasswordKamu123"
              secureTextEntry={!showPassword}
              style={styles.passwordInput}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={20}
                color="#888"
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.passwordWrapper}>
            <TextInput
              placeholder="KonfirmasiPasswordKamu"
              secureTextEntry={!showConfirm}
              style={styles.passwordInput}
            />
            <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
              <Ionicons
                name={showConfirm ? "eye-off" : "eye"}
                size={20}
                color="#888"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.footerText}>
            Sudah punya akun?{" "}
            <Text style={styles.link} onPress={() => router.push("/login")}>
              Sign In
            </Text>
          </Text>
        </View>

        <Modal transparent visible={successVisible} animationType="fade">
          <View style={styles.modalOverlay}>
            <View style={styles.successCard}>
              <View style={styles.iconContainer}>
                <Ionicons name="checkmark-circle" size={80} color="#4CAF7A" />
              </View>

              <Text style={styles.successTitle}>Registrasi Berhasil!</Text>

              <Text style={styles.successMessage}>
                Akun GrsApp kamu berhasil dibuat. Silakan login untuk mulai
                berbelanja buah dan sayur segar.
              </Text>

              <Text style={styles.redirectText}>
                Mengarahkan ke halaman login...
              </Text>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#4CAF7A" },
  header: { flex: 1, justifyContent: "center", paddingHorizontal: 25 },
  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "600",
    zIndex: 2
  },
  card: {
    flex: 2,
    backgroundColor: "#F5F5F5",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25
  },
  label: { marginTop: 12, fontSize: 14, color: "#333" },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 8
  },
  passwordWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  passwordInput: { flex: 1, paddingVertical: 8 },
  button: {
    marginTop: 50,
    backgroundColor: "#4CAF7A",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center"
  },
  buttonText: { color: "#fff", fontWeight: "600" },
  footerText: { textAlign: "center", marginTop: 20, fontSize: 12 },
  link: { color: "#4CAF7A", fontWeight: "600" },

  bubble: {
    position: "absolute",
    top: 40,
    left: -20,
    width: 400,
    height: 200,
    resizeMode: "contain"
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center"
  },

  successCard: {
    width: "85%",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    padding: 30,
    alignItems: "center",
    elevation: 10
  },

  iconContainer: {
    marginBottom: 15
  },

  successTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#222",
    marginBottom: 10
  },

  successMessage: {
    textAlign: "center",
    color: "#666",
    fontSize: 14,
    lineHeight: 22
  },

  redirectText: {
    marginTop: 20,
    color: "#4CAF7A",
    fontWeight: "600"
  }
});
