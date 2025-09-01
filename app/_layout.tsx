import NavigationBar from "@/components/navigation-bar/NavigationBar";
import { Stack } from "expo-router";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>🚀 My App</Text>
      </View>

      {/* Navigation screens */}
      {/* <Stack screenOptions={{ headerShown: false }} /> */}

      {/* Custom Footer */}
      <NavigationBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { padding: 16, backgroundColor: "#007AFF" },
  headerText: { color: "#fff", fontSize: 18, fontWeight: "600" },
  footer: { padding: 12, backgroundColor: "#eee", alignItems: "center" },
  footerText: { fontSize: 14, color: "#666" },
});
