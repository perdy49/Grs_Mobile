import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { styles } from "../../styles/login";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);

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

          <Text style={styles.title}>Hello{"\n"}Sign in</Text>
        </View>

        {/* CARD */}
        <View style={styles.card}>
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

          <TouchableOpacity onPress={() => setShowForgotModal(true)}>
            <Text style={styles.forgot}>Lupa kata sandi?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.replace("/(tabs)/home")}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          <Text style={styles.footerText}>
            Tidak Punya Akun?{" "}
            <Text style={styles.link} onPress={() => router.push("/register")}>
              Sign Up
            </Text>
          </Text>
        </View>

        {showForgotModal && (
          <View style={styles.modalOverlay}>
            <View style={styles.modalCard}>
              <Text style={styles.modalTitle}>Pulihkan Akun</Text>

              <Text style={styles.modalDesc}>
                Pilih metode pemulihan akun yang tersedia.
              </Text>

              <TouchableOpacity style={styles.methodButton}>
                <Ionicons name="mail-outline" size={20} color="#4CAF7A" />
                <Text style={styles.methodText}>
                  Kirim kode verifikasi ke Gmail
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.methodButton}>
                <Ionicons name="call-outline" size={20} color="#4CAF7A" />
                <Text style={styles.methodText}>
                  Verifikasi melalui Nomor Telepon
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setShowForgotModal(false)}
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

