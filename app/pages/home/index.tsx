import Constants from "expo-constants";
import * as React from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const screen = Dimensions.get("screen");
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.welcome}>
          <View style={styles.notification}>
            <TouchableOpacity onPress={() => {}}>
              <FontAwesome name="bell" size={20} color={"gray"} />
            </TouchableOpacity>
          </View>
          <View style={styles.personalInfo}>
            <Text style={styles.goodMorning}>Good norning</Text>
            <Text style={styles.name}>Raisa Adriana</Text>
          </View>
        </View>
        <View>
          <ImageBackground
            source={require("@/assets/images/CardBG.png")}
            style={styles.card}
            imageStyle={styles.cardImage} // optional: borderRadius for background
          >
            {/* Top icons */}
            <View style={styles.topRow}>
              <View style={styles.logo} />
              <View style={styles.contactlessIcon} />
            </View>

            {/* Card number */}
            <Text style={styles.cardNumber}>•••• •••• •••• 2858</Text>

            {/* Balance */}
            <View style={styles.balanceContainer}>
              <Text style={styles.balanceLabel}>Balance</Text>
              <Text style={styles.balanceValue}>$63,250.00</Text>
            </View>

            {/* Chip */}
            <View style={styles.chip} />
          </ImageBackground>
        </View>
      </View>
      <View style={styles.content}>
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
  },
  header: {
    height: "40%",
    width: "100%",
    // zIndex: 2,
    backgroundColor: "#6172F3",
  },
  content: {
    zIndex: 1,
    backgroundColor: "#ecf0f1",
    height: screen.width * 2,
    width: screen.width * 2,
    // borderWidth: 5,
    // borderColor: "orange",
    borderRadius: screen.width,
    position: "absolute",
    bottom: screen.height * 0.7 - screen.height,
    alignItems: "center",
  },
  welcome: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    padding: 20,
    justifyContent: "space-between",
  },
  notification: {
    alignSelf: "flex-start",
    padding: 7,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: "#C7D7FE",
  },
  personalInfo: {
    flex: 1,
    gap: 4,
  },
  goodMorning: {
    color: "#C7D7FE",
    fontSize: 14,
    fontWeight: 500,
  },
  name: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 600,
  },

  card: {
    width: 200,
    height: 200,
    borderRadius: 20,
    padding: 20,
    zIndex: 100,
    justifyContent: "space-between",
  },
  cardImage: {
    borderRadius: 20,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 40,
    backgroundColor: "white", // replace with actual logo if needed
    borderRadius: 8,
  },
  contactlessIcon: {
    width: 30,
    height: 30,
    backgroundColor: "white", // replace with actual icon if needed
    borderRadius: 15,
  },
  cardNumber: {
    color: "white",
    fontSize: 22,
    letterSpacing: 4,
  },
  balanceContainer: {
    marginTop: 10,
  },
  balanceLabel: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 14,
  },
  balanceValue: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  chip: {
    width: 50,
    height: 40,
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: 6,
    alignSelf: "flex-end",
  },
});
