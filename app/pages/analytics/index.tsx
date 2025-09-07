import React from "react";
import {
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  GestureResponderEvent,
} from "react-native";
import TransactionsChart from "./components/Chart";
import Entypo from "react-native-vector-icons/Entypo";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Constants from "expo-constants";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

const screen = Dimensions.get("screen");

/** ---------- Reusable Components ---------- **/

type HeaderButtonProps = {
  onPress?: (event: GestureResponderEvent) => void;
  children: React.ReactNode;
  bordered?: boolean;
};

const HeaderButton: React.FC<HeaderButtonProps> = ({
  onPress,
  children,
  bordered = false,
}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.headerButton, bordered && styles.headerButtonBorder]}>
      {children}
    </View>
  </TouchableOpacity>
);

type StatusCardProps = {
  icon: React.ReactNode;
  color: string;
  label: string;
  amount: string;
};

const StatusCard: React.FC<StatusCardProps> = ({
  icon,
  color,
  label,
  amount,
}) => (
  <View style={styles.chartStatusCard}>
    <View style={[styles.statusIcon, { backgroundColor: color }]}>{icon}</View>
    <View>
      <Text style={styles.statusLabel}>{label}</Text>
      <Text style={styles.statusAmount}>{amount}</Text>
    </View>
  </View>
);

type TransactionItemProps = {
  name: string;
  amount: string;
};

const TransactionItem: React.FC<TransactionItemProps> = ({ name, amount }) => (
  <View style={styles.chartTransactionScrollViewItem}>
    <View style={styles.transactionAvatar}>
      <Ionicons name="person" color="#F2F4F7" size={24} />
    </View>
    <Text style={{ fontSize: 14, fontWeight: 500, color: "#101828" }}>
      {name}
    </Text>
    <Text style={{ fontSize: 12, fontWeight: 400, color: "#667085" }}>
      {amount}
    </Text>
  </View>
);

/** ---------- Main Screen ---------- **/

export default function Analytics() {
  const transactions: TransactionItemProps[] = [
    { name: "Jane", amount: "$120,000.000" },
    { name: "John", amount: "$95,200.000" },
    { name: "Emma", amount: "$45,300.000" },
    { name: "Liam", amount: "$10,000.000" },
    { name: "Olivia", amount: "$87,900.000" },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <HeaderButton bordered>
          <Entypo name="dots-three-horizontal" color="#344054" size={24} />
        </HeaderButton>
        <HeaderButton>
          <Text style={styles.headerTitle}>All Transactions</Text>
        </HeaderButton>
        <HeaderButton bordered>
          <SimpleLineIcons name="arrow-left" color="#344054" size={24} />
        </HeaderButton>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.chartHeader}>
          <Button title="Month" />
          <View style={styles.chartHeaderText}>
            <Text style={styles.cashflowLabel}>Total Cashflow</Text>
            <Text style={styles.cashflowValue}>$498.66</Text>
          </View>
        </View>

        <TransactionsChart />

        {/* Status Cards */}
        <View style={styles.chartStatus}>
          <StatusCard
            icon={<Feather name="arrow-up-right" color="#fff" size={20} />}
            color="#6172F3"
            label="Income"
            amount="$4,600.000"
          />
          <StatusCard
            icon={<Feather name="arrow-down-left" color="#fff" size={20} />}
            color="#FDE272"
            label="Expense"
            amount="$1,498.66"
          />
        </View>

        {/* Transactions Scroll */}
        <View>
          <View style={styles.transactionsScrollHeader}>
            <Text style={styles.transactionsScrollTitle}>Transactions</Text>
            <TouchableOpacity
              onPress={() => {
                /* do this */
              }}
            >
              <View
                style={{
                  backgroundColor: "transparent",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "#101828" }}>All Transactions</Text>
              </View>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {transactions.map((t, idx) => (
              <TransactionItem key={idx} name={t.name} amount={t.amount} />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

/** ---------- Styles ---------- **/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Constants.statusBarHeight,
    rowGap: 20,
    backgroundColor: "#FFF",
  },
  header: {
    width: "100%",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerButton: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    padding: 7,
  },
  headerButtonBorder: {
    borderWidth: 2,
    borderRadius: 12,
    borderColor: "#C7D7FE",
  },
  headerTitle: {
    color: "#101828",
    fontSize: 18,
    fontWeight: "600",
  },
  content: {
    flex: 1,
    rowGap: 20,
  },
  chartHeader: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  chartHeaderText: {
    rowGap: 4,
  },
  cashflowLabel: {
    fontSize: 12,
    fontWeight: "400",
    color: "#475467",
  },
  cashflowValue: {
    fontSize: 24,
    fontWeight: "600",
    color: "#101828",
  },
  chartStatus: {
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: 12,
  },
  chartStatusCard: {
    borderColor: "#EAECF0",
    borderWidth: 1,
    borderRadius: 16,
    gap: 12,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  statusIcon: {
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  statusLabel: {
    fontSize: 12,
    fontWeight: "400",
    color: "#667085",
  },
  statusAmount: {
    fontSize: 14,
    fontWeight: "500",
    color: "#101828",
  },
  chartTransactionScrollViewItem: {
    width: 102,
    borderRadius: 12,
    backgroundColor: "#F9FAFB",
    margin: 10,
    paddingVertical: 20,
    paddingHorizontal: 12,
    alignItems: "center",
    gap: 14,
    flexShrink: 0,
    boxShadow: "0px 2px 4px rgba(16, 24, 40, 0.05)",
  },
  transactionAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#4754677c",
    borderWidth: 2,
    borderColor: "#6172F3",
    boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    alignItems: "center",
    justifyContent: "center",
  },
  transactionsScrollHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  transactionsScrollTitle: {
    color: "#344054",
    fontSize: 16,
    fontWeight: 500,
  },
});
