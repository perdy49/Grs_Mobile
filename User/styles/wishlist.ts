import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 50,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 10,
    marginTop: 15,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
  },

  filterContainer: {
    flexDirection: "row",
    justifyContent: "center", // 🔥 INI KUNCI
    alignItems: "center",
    gap: 8,
    marginBottom: 50,
    marginTop: 40,
  },

  filterActive: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  filterActiveText: {
    color: "#fff",
    fontSize: 12,
  },

  filterBtn: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  filterText: {
    fontSize: 12,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },

  card: {
    width: "48%",
    marginBottom: 30,
  },

  image: {
    width: "100%",
    height: 120,
    borderRadius: 12,
  },

  loveIcon: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#4CAF50",
    borderRadius: 20,
    padding: 6,
  },

  name: {
    marginTop: 10,
    fontSize: 12,
  },

  price: {
    fontSize: 11,
    color: "#666",
  },

  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    gap: 8,
  },

  page: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },

  pageActive: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
  },

  pageActiveText: {
    color: "#fff",
    fontSize: 10,
  },
});
