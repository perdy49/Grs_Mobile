import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

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

          <Text style={styles.forgot}>Lupa kata sandi?</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.replace("/(tabs)")}
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
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#4CAF7A" },
  header: { flex: 1, justifyContent: "center", paddingHorizontal: 25 },
  title: {
    color: "#fff",
    fontSize: 28,
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
  label: { marginTop: 20, fontSize: 14, color: "#333" },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 8
  },
  passwordWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  passwordInput: { flex: 1, paddingVertical: 8 },
  forgot: { textAlign: "right", fontSize: 12, marginTop: 20, color: "#777" },
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
    left: -60,
    width: 400,
    height: 200,
    resizeMode: "contain"
  },
});
