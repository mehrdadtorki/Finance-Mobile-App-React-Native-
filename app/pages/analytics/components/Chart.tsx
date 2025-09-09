import React from "react";
import { View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

const TransactionsChart = () => {
  const barData = [
    {
      value: 3.4,
      label: "Jan",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#6172F3",
    },
    { value: 2.3, frontColor: "#FDE272" },
    {
      value: 3.9,
      label: "Feb",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#6172F3",
    },
    { value: 3, frontColor: "#FDE272" },
    {
      value: 3.15,
      label: "Mar",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#6172F3",
    },
    { value: 2.2, frontColor: "#FDE272" },
    {
      value: 3.2,
      label: "Apr",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#6172F3",
    },
    { value: 3.1, frontColor: "#FDE272" },
    {
      value: 3.7,
      label: "May",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#6172F3",
    },
    { value: 2.8, frontColor: "#FDE272" },
    {
      value: 3.7,
      label: "Jun",
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: "gray" },
      frontColor: "#6172F3",
    },
    { value: 2.8, frontColor: "#FDE272" },
  ];

  return (
    <View
      style={{
        padding: 10,
        borderRadius: 10,
      }}
    >
      <BarChart
        data={barData}
        barWidth={8}
        yAxisLabelPrefix="$"
        yAxisLabelSuffix="k"
        spacing={24}
        roundedTop
        roundedBottom
        rulesType="dashed"
        xAxisThickness={0}
        yAxisThickness={0}
        yAxisTextStyle={{ color: "#969696" }}
        xAxisLabelTextStyle={{ color: "#969696" }}
        noOfSections={3}
        maxValue={4}
      />
    </View>
  );
};
export default TransactionsChart;
