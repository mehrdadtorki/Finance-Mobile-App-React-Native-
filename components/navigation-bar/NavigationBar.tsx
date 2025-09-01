import React from "react";
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { CurvedBottomBar } from "react-native-curved-bottom-bar";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { JSX } from "react/jsx-runtime";
import CircleIcon from "../../assets/icons/Scan.svg";
import Svg, { Circle } from "react-native-svg";

const Screen1: React.FC = () => {
  return <View style={styles.screen1} />;
};

const Screen2: React.FC = () => {
  return <View style={styles.screen2} />;
};

type RenderIconProps = {
  routeName: string;
  selectedTab: string;
};

type RenderTabBarProps = {
  routeName: string;
  selectedTab: string;
  navigate: (routeName: string) => void;
};

export default function App(): JSX.Element {
  const _renderIcon = ({ routeName, selectedTab }: RenderIconProps) => {
    let icon: string = "";

    switch (routeName) {
      case "title1":
        icon = "home";
        break;
      case "title2":
        icon = "signal";
        break;
      case "title3":
        icon = "credit-card";
        break;
      case "title4":
        icon = "user-o";
        break;
    }

    return (
      <FontAwesome
        name={icon}
        size={25}
        color={routeName === selectedTab ? "#6172F3" : "gray"}
      />
    );
  };

  const renderTabBar = ({
    routeName,
    selectedTab,
    navigate,
  }: RenderTabBarProps) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon({ routeName, selectedTab })}
      </TouchableOpacity>
    );
  };

  return (
    // @ts-expect-error: library has no proper TS definitions
    <CurvedBottomBar.Navigator
      type="DOWN"
      style={styles.bottomBar}
      shadowStyle={styles.shawdow}
      height={72}
      circleWidth={60}
      bgColor="white"
      initialRouteName="title1"
      borderTopLeftRight
      renderCircle={() => (
        <Animated.View style={styles.btnCircleUp}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Click Action")}
          >
            <CircleIcon width={60} height={60} fill="red" color="red" />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}
    >
      <CurvedBottomBar.Screen
        name="title1"
        position="LEFT"
        component={Screen1}
      />
      <CurvedBottomBar.Screen
        name="title2"
        position="LEFT"
        component={Screen2}
      />
      <CurvedBottomBar.Screen
        name="title3"
        position="RIGHT"
        component={Screen2}
      />
      <CurvedBottomBar.Screen
        name="title4"
        position="RIGHT"
        component={Screen2}
      />
    </CurvedBottomBar.Navigator>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: "#DDDDDD",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    padding: 8,
    justifyContent: "center",
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8E8E8",
    bottom: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: "gray",
  },
  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: "#BFEFFF",
  },
  screen2: {
    flex: 1,
    backgroundColor: "#FFEBCD",
  },
});
