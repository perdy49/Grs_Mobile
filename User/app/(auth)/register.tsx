import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
} from "react-native";
import { styles } from "../../styles/register";
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

