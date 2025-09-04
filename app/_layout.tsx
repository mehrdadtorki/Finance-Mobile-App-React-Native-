import NavigationBar from "@/components/navigation-bar/NavigationBar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <NavigationBar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "red" }, // <- same background for all
  header: { padding: 16, backgroundColor: "#007AFF" },
  headerText: { color: "#fff", fontSize: 18, fontWeight: "600" },
  content: { flex: 1, color: "#06dbadff", backgroundColor: "#bb2b2bff" },
});
