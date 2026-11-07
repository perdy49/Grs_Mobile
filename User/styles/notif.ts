import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 50,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 10,
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },

  date: {
    fontSize: 12,
    color: "#888",
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 10,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4CAF50",
    marginHorizontal: 16,
    marginBottom: 10,
    borderRadius: 12,
    padding: 12,
  },

  cardLeft: {
    width: 35,
    height: 35,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
  },

  cardSub: {
    color: "#E8F5E9",
    fontSize: 11,
    marginTop: 2,
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
    elevation: 5,
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
    paddingHorizontal: 20,
  },

  modalCard: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 20,
  },

  modalDesc: {
    textAlign: "center",
    marginTop: 20,
    color: "#666",
    fontSize: 13,
    lineHeight: 20,
  },

  closeBtn: {
    marginTop: 25,
    backgroundColor: "#4CAF50",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 12,
  },

  closeText: {
    color: "#fff",
    fontWeight: "600",
  },
});
