import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  locationLabel: {
    fontSize: 12,
    color: "#777",
  },

  location: {
    fontSize: 14,
    fontWeight: "600",
  },

  bell: {
    backgroundColor: "#E8F5E9",
    padding: 8,
    borderRadius: 20,
  },

  searchBox: {
    marginTop: 15,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 15,
    alignItems: "center",
  },

  searchInput: {
    marginLeft: 10,
    flex: 1,
  },

  banner: {
    marginTop: 20,
    backgroundColor: "#4CAF50",
    borderRadius: 15,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  bannerText: {
    color: "#fff",
    fontSize: 12,
  },

  bannerTextBold: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  bannerButton: {
    marginTop: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 10,
  },

  bannerButtonText: {
    color: "#4CAF50",
    fontSize: 12,
  },

  bannerImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },

  dots: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },

  sectionHeader: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 45,
  },

  seeAll: {
    fontSize: 12,
    color: "#4CAF50",
  },

  categoryItem: {
    alignItems: "center",
    marginRight: 15,
    marginTop: 10,
  },

  categoryImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  categoryText: {
    fontSize: 12,
    marginTop: 5,
  },

  tabs: {
    flexDirection: "row",
    marginTop: 35,
  },

  tabActive: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    marginRight: 10,
    fontSize: 12,
  },

  tab: {
    backgroundColor: "#eee",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    marginRight: 10,
    fontSize: 12,
  },

  products: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 30,
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
  },

  productImage: {
    width: "100%",
    height: 70,
    borderRadius: 10,
  },

  productName: {
    fontSize: 12,
    marginTop: 5,
  },

  price: {
    marginTop: 10,
    fontSize: 12,
    color: "#4CAF50",
    fontWeight: "600",
  },

  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 0,
    marginTop: 40,
  },

  cardImage: {
    width: "100%",
    height: 80,
    borderRadius: 10,
  },

  cardTitle: {
    marginTop: 5,
    fontSize: 12,
  },

  buyBtn: {
    marginTop: 5,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    paddingVertical: 5,
    alignItems: "center",
  },

  buyText: {
    color: "#fff",
    fontSize: 12,
  },
});