import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },

  skip: {
    position: "absolute",
    top: 40, // 🔥 turunin sedikit
    right: 30,
    zIndex: 999,
    elevation: 10, // 🔥 WAJIB buat Android
  },

  skipText: {
    color: "#4CAF50",
    fontSize: 12,
  },

  // 🔥 FIX UTAMA
  slide: {
    flex: 1, // 🔥 INI KUNCI
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  image: {
    width: 180,
    height: 180,
    resizeMode: "contain",
    marginBottom: 24,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 8,
    maxWidth: 260,
  },

  green: {
    color: "#4CAF50",
  },

  subtitle: {
    fontSize: 12,
    color: "#777",
    textAlign: "center",
    marginBottom: 20,
    maxWidth: 260,
  },

  dots: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 4,
  },

  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 70, // 🔥 bikin ga full lebar
    borderRadius: 16,
    alignSelf: "center", // 🔥 biar di tengah
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 13,
    fontWeight: "600",
  },
  sliderWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  bottom: {
    paddingBottom: 30,
  },

  content: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
