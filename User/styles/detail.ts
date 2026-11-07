import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  backBtn: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
    backgroundColor: "#eee",
    borderRadius: 20,
    padding: 6,
  },

  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
    marginBottom: 40,
  },

  image: {
    width: 200,
    height: 200,
  },

  card: {
    flex: 1,
    backgroundColor: "#4CAF6A",
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 50,
  },

  topSection: {
    alignItems: "center",
    marginTop: 140,
    marginBottom: 20,
  },

  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },

  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  ratingText: {
    color: "#fff",
    marginLeft: 5,
    fontSize: 12,
  },

  sizeContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },

  sizeBtn: {
    backgroundColor: "#ddd",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },

  activeSize: {
    backgroundColor: "#A5D6A7",
  },

  sizeText: {
    fontSize: 12,
    color: "#333",
  },

  sizeTextActive: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
  },

  descTitle: {
    color: "#fff",
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 13,
  },

  descText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 5,
    marginBottom: 15,
  },

  buyBtn: {
    backgroundColor: "#5DADE2",
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
  },

  buyText: {
    color: "#fff",
    fontWeight: "bold",
  },

  sizeWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginBottom: 15,
  },

  sizeGroup: {
    marginBottom: 15,
    marginTop: 35,
  },

  sizeRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 8,
  },

  sizeRowCenter: {
    flexDirection: "row",
    justifyContent: "center",
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
    width: "100%",
    maxHeight: "80%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
  },

  modalText: {
    fontSize: 13,
    marginBottom: 5,
  },

  optionRow: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  summaryBox: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
  },

  totalText: {
    marginTop: 8,
    fontWeight: "bold",
    color: "#4CAF50",
  },

  payBtn: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },

  payText: {
    color: "#fff",
    fontWeight: "bold",
  },

  closeBtn: {
    marginTop: 10,
    alignItems: "center",
  },

  closeText: {
    color: "#666",
  },

  dropdownBtn: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  selectCard: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    padding: 12,
    marginTop: 8,
  },

  selectedCard: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
  },

  selectText: {
    color: "#333",
  },

  selectedText: {
    color: "#fff",
    fontWeight: "bold",
  },

  map: {
    width: "100%",
    height: 220,
    borderRadius: 15,
    marginTop: 10,
  },

  addressInput: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    padding: 12,
    marginTop: 12,
    minHeight: 90,
    textAlignVertical: "top",
  },
});
