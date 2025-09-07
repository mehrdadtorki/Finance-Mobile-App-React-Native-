import NavigationBar from "@/components/navigation-bar/NavigationBar";
import { SafeAreaView, StyleSheet, View } from "react-native";

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
  container: { flex: 1 },
  header: { padding: 16 },
  headerText: { color: "#fff", fontSize: 18, fontWeight: "600" },
  content: { flex: 1 },
});
