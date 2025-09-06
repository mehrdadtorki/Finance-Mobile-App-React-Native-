import Constants from "expo-constants";
import * as React from "react";
import {
  Button,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Svg, { Path } from "react-native-svg";
import WithdrawIcon from "../../../assets/icons/features/withdraw.svg";
import TopUpIcon from "../../../assets/icons/features/topUp.svg";
import PayIcon from "../../../assets/icons/features/topUp.svg";
import TransferIcon from "../../../assets/icons/features/transfer.svg";

import SpotifyIcon from "../../../assets/icons/transactions/spotify.svg";
import PaypalIcon from "../../../assets/icons/transactions/paypal.svg";

const screen = Dimensions.get("screen");

// Feature items for mapping
const FEATURES = [
  { title: "Transfer", Icon: TransferIcon },
  { title: "Pay", Icon: PayIcon },
  { title: "Top Up", Icon: TopUpIcon },
  { title: "Withdraw", Icon: WithdrawIcon },
];

// Transactions for mapping
const TRANSACTIONS = [
  {
    title: "Spotify",
    description: "Description",
    amount: "$25.00",
    icon: SpotifyIcon,
  },
  {
    title: "Paypal",
    description: "Description",
    amount: "$25.00",
    icon: PaypalIcon,
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/LayoutBG.png")}
        imageStyle={styles.layoutBackgroundImage}
      >
        {/* Header with SVG curve */}
        <View style={styles.header}>
          <Svg
            width={screen.width}
            height={screen.height * 0.4}
            style={StyleSheet.absoluteFill}
          >
            <Path
              d={`M0,0 H${screen.width} V${screen.height * 0.3} Q${
                screen.width / 2.5
              },${screen.height * 0.2} 0,${screen.height * 0.3} Z`}
              fill="#6172F3"
            />
          </Svg>

          <View style={styles.welcome}>
            <View style={styles.notification}>
              <TouchableOpacity onPress={() => {}}>
                <FontAwesome name="bell" size={20} color={"gray"} />
              </TouchableOpacity>
            </View>
            <View style={styles.personalInfo}>
              <Text style={styles.goodMorning}>Good morning</Text>
              <Text style={styles.name}>Raisa Adriana</Text>
            </View>
          </View>
        </View>

        {/* Main content */}
        <View style={styles.content}>
          {/* Card */}
          <View style={styles.cardContainer}>
            <ImageBackground
              source={require("@/assets/images/CardBG.png")}
              style={styles.card}
              imageStyle={styles.cardImage}
            >
              <View style={styles.topRow}>
                <View style={styles.logo} />
                <View style={styles.contactlessIcon} />
              </View>

              <Text style={styles.cardNumber}>•••• •••• •••• 2858</Text>

              <View style={styles.balanceContainer}>
                <Text style={styles.balanceLabel}>Balance</Text>
                <Text style={styles.balanceValue}>$63,250.00</Text>
              </View>

              <View style={styles.chip} />
            </ImageBackground>
          </View>

          {/* Features */}
          <View style={styles.featuresList}>
            {FEATURES.map(({ title, Icon }) => (
              <View key={title} style={styles.featureItem}>
                <View style={styles.featureCard}>
                  <Icon width={70} height={70} />
                </View>
                <Text style={styles.featureItemTitle}>{title}</Text>
              </View>
            ))}
          </View>

          {/* Transactions */}
          <View style={styles.transactionsContainer}>
            <View style={styles.transactionsContainerHeader}>
              <Text style={styles.transactionsContainerTitle}>
                Transactions
              </Text>
              <Button
                title="All Transactions"
                onPress={() => {}}
                color={"#ffffff"}
              />
            </View>
            <View style={styles.devider} />

            <View style={styles.transactionsContainerContent}>
              {TRANSACTIONS.map((tx, index) => (
                <React.Fragment key={index}>
                  <View style={styles.transactionItemCard}>
                    <View style={styles.transactionItemCardIcon}>
                      <tx.icon width={34} height={34} />
                    </View>
                    <View style={styles.transactionItemCardContent}>
                      <Text style={styles.transactionItemCardTitle}>
                        {tx.title}
                      </Text>
                      <Text style={styles.transactionItemCardDescription}>
                        {tx.description}
                      </Text>
                    </View>
                    <View style={styles.transactionItemCardPrice}>
                      <Text>{tx.amount}</Text>
                    </View>
                  </View>
                  {index < TRANSACTIONS.length - 1 && (
                    <View style={styles.devider} />
                  )}
                </React.Fragment>
              ))}
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
  },
  layoutBackgroundImage: {
    height: screen.height,
    width: screen.width,
    zIndex: 1,
  },
  header: {
    height: screen.height * 0.4,
    width: screen.width,
    paddingTop: 20,
    overflow: "hidden",
    zIndex: -1,
  },
  content: {
    zIndex: 10,
    backgroundColor: "#ecf0f1",
    width: screen.width,
    height: screen.height,
    alignItems: "center",
  },
  welcome: {
    flexDirection: "row-reverse",
    alignItems: "center",
    padding: 25,
    justifyContent: "space-between",
  },
  notification: {
    alignSelf: "flex-start",
    padding: 7,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: "#C7D7FE",
  },
  personalInfo: { flex: 1, gap: 4 },
  goodMorning: { color: "#C7D7FE", fontSize: 14, fontWeight: "500" },
  name: { color: "#fff", fontSize: 20, fontWeight: "600" },
  cardContainer: {
    zIndex: 100,
    position: "absolute",
    top: -screen.height * 0.26,
    width: screen.width,
    alignItems: "center",
    paddingTop: 20,
  },
  card: {
    width: screen.width * 0.9,
    height: 200,
    borderRadius: 20,
    padding: 20,
    justifyContent: "space-between",
  },
  cardImage: { borderRadius: 20 },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: { width: 40, height: 40, backgroundColor: "white", borderRadius: 8 },
  contactlessIcon: {
    width: 30,
    height: 30,
    backgroundColor: "white",
    borderRadius: 15,
  },
  cardNumber: { color: "white", fontSize: 22, letterSpacing: 4 },
  balanceContainer: { marginTop: 10 },
  balanceLabel: { color: "rgba(255,255,255,0.7)", fontSize: 14 },
  balanceValue: { color: "white", fontSize: 20, fontWeight: "bold" },
  chip: {
    width: 50,
    height: 40,
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: 6,
    alignSelf: "flex-end",
  },
  featuresList: {
    marginTop: 20,
    backgroundColor: "#fff",
    width: screen.width * 0.9,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 4,
  },
  featureItem: { rowGap: 8, alignItems: "center" },
  featureCard: {
    borderRadius: "50%",
    alignItems: "center",
    backgroundColor: "#EEF4FF",
  },
  featureItemTitle: { fontSize: 12, fontWeight: 500, textAlign: "center" },
  transactionsContainer: {
    marginTop: 20,
    backgroundColor: "#fff",
    width: screen.width * 0.9,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    gap: 4,
  },
  transactionsContainerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  transactionsContainerContent: {
    width: "100%",
    overflow: "scroll",
    height: 130,
  },
  transactionsContainerTitle: {
    color: "#344054",
    fontSize: 16,
    fontWeight: 500,
  },
  devider: {
    borderBottomColor: "#F2F4F7",
    borderBottomWidth: 1,
    marginTop: 10,
  },
  transactionItemCard: {
    width: "100%",
    paddingVertical: 10,
    flexDirection: "row",
  },
  transactionItemCardContent: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 12,
  },
  transactionItemCardIcon: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#F2F4F7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 1px 2px rgba(40, 16, 30, 0.05)",
  },
  transactionItemCardTitle: {
    color: "#101828",
    fontSize: 14,
    fontWeight: 500,
  },
  transactionItemCardDescription: { fontSize: 12, color: "gray" },
  transactionItemCardPrice: {
    color: "#344054",
    fontSize: 14,
    fontWeight: 500,
    alignSelf: "center",
  },
});
