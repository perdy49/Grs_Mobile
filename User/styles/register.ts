import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#4CAF7A" },
  header: { flex: 1, justifyContent: "center", paddingHorizontal: 25 },
  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "600",
    zIndex: 2,
  },
  card: {
    flex: 2,
    backgroundColor: "#F5F5F5",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
  },
  label: { marginTop: 12, fontSize: 14, color: "#333" },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 8,
  },
  passwordWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  passwordInput: { flex: 1, paddingVertical: 8 },
  button: {
    marginTop: 50,
    backgroundColor: "#4CAF7A",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
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
    resizeMode: "contain",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  successCard: {
    width: "85%",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    padding: 30,
    alignItems: "center",
    elevation: 10,
  },

  iconContainer: {
    marginBottom: 15,
  },

  successTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#222",
    marginBottom: 10,
  },

  successMessage: {
    textAlign: "center",
    color: "#666",
    fontSize: 14,
    lineHeight: 22,
  },

  redirectText: {
    marginTop: 20,
    color: "#4CAF7A",
    fontWeight: "600",
  },
});
