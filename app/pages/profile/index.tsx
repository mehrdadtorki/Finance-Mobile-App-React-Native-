import Constants from "expo-constants";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const screen = Dimensions.get("screen");

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.setting}>
          {/* <TouchableOpacity onPress={() => {}}> */}
          <FontAwesome name="bell-o" size={20} color="white" />
          {/* </TouchableOpacity> */}
        </View>
        <View>
          <Text style={styles.pageTitle}>Profile</Text>
        </View>
      </View>
      {/* Content can go here */}
      <View style={styles.content}>
        <View style={styles.profileContainer}>
          <Text style={styles.username}></Text>
          <Text style={styles.email}></Text>
        </View>
        {/* <View style={styles.bannerContainer}></View>
        <View style={styles.accountDetailsContainer}></View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    backgroundColor: "#6172F3",
  },
  header: {
    width: "100%",
    paddingVertical: 24,
    // paddingHorizontal: 20,
    // paddingBottom: 20,
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  setting: {
    padding: 16,
  },
  pageTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: 600,
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
    height: screen.height * 0.75,
    width: screen.width,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  profileContainer: {
    display: "flex",
    flexDirection: "column",
    rowGap: 12,
  },
  username: {
    fontSize: 20,
    fontWeight: "600",
    color: "#101828",
  },
  email: {
    fontSize: 14,
    fontWeight: "400",
    color: "#475467",
  },
});
