import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Analytics() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Analytics Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, color: "#fff" },
});
