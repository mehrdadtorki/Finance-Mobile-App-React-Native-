import Analytics from "@/app/pages/analytics";
import Card from "@/app/pages/card";
import Home from "@/app/pages/home";
import Profile from "@/app/pages/profile";
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
      case "HomePage":
        icon = "home";
        break;
      case "AnalyticsPage":
        icon = "line-chart";
        break;
      case "CardPage":
        icon = "credit-card";
        break;
      case "ProfilePage":
        icon = "user-o";
        break;
    }

    return (
      <>
        <FontAwesome
          name={icon}
          size={25}
          color={routeName === selectedTab ? "#6172F3" : "gray"}
        />
        <View
          style={routeName === selectedTab ? styles.selectedTabBarItem : {}}
        />
      </>
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
      height={90}
      circleWidth={60}
      bgColor="white"
      style={{
        shadowOffset: {
          width: 1,
          height: 12,
        },
        shadowOpacity: 0.2,
        shadowRadius: 16.0,
      }}
      initialRouteName="HomePage"
      borderTopLeftRight
      screenOptions={{ headerShown: false }}
      renderCircle={() => (
        <Animated.View style={styles.btnCircleUp}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Click Action")}
          >
            <CircleIcon width={35} height={35} fill="red" />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}
    >
      <CurvedBottomBar.Screen
        name="HomePage"
        position="LEFT"
        component={Home}
      />
      <CurvedBottomBar.Screen
        name="AnalyticsPage"
        position="LEFT"
        component={Analytics}
      />
      <CurvedBottomBar.Screen
        name="CardPage"
        position="RIGHT"
        component={Card}
      />
      <CurvedBottomBar.Screen
        name="ProfilePage"
        position="RIGHT"
        component={Profile}
      />
    </CurvedBottomBar.Navigator>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    flex: 1,
    padding: 14,
    justifyContent: "center",
    backgroundColor: "#6172F3",
    borderRadius: "50%",
  },
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
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
  },
  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedTabBarItem: {
    marginTop: 12, // spacing between icon and line
    width: 40, // underline width (can be wider if you want)
    height: 4, // thickness of the underline
    borderTopRightRadius: "18px", // rounded edges for the line
    borderTopLeftRadius: "18px", // rounded edges for the line
    backgroundColor: "#6172F3", // active color
  },
  img: {
    width: 30,
    height: 30,
  },
});
