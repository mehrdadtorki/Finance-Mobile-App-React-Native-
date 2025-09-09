import Constants from "expo-constants";
import React, { FC, memo, ReactNode, useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Octicons from "react-native-vector-icons/Octicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const screen = Dimensions.get("screen");

// --- Icon caching ---
const IconComponents = {
  bell: memo(() => <FontAwesome name="bell-o" size={20} color="white" />),
  user: memo(() => <FontAwesome name="user-o" size={18} color="#667085" />),
  verified: memo(() => <Octicons name="verified" size={18} color="#667085" />),
  paypal: memo(() => (
    <SimpleLineIcons name="paypal" size={18} color="#667085" />
  )),
  bank: memo(() => (
    <MaterialCommunityIcons name="bank-outline" size={24} color="#667085" />
  )),
  arrowRight: memo(() => (
    <SimpleLineIcons name="arrow-right" size={12} color="#667085" />
  )),
  setting: memo(() => (
    <SimpleLineIcons name="settings" color="#fff" size={20} />
  )),
};

// --- Account item interface ---
interface AccountItem {
  icon: ReactNode;
  title: string;
  description: string;
  onPress?: () => void;
}

// --- Account Card component ---
const AccountCard: FC<AccountItem> = ({
  icon,
  title,
  description,
  onPress,
}) => (
  <View style={styles.cardContainer}>
    <View style={styles.cardIcon}>{icon}</View>
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
    </View>
    <View style={styles.cardButton}>
      <TouchableOpacity onPress={onPress}>
        <IconComponents.arrowRight />
      </TouchableOpacity>
    </View>
  </View>
);

// --- Skeleton Loader ---
const ProfileSkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={12}>
      <SkeletonPlaceholder.Item flex={1} alignItems="center">
        {/* Profile Picture */}
        <SkeletonPlaceholder.Item
          width={72}
          height={72}
          borderRadius={36}
          marginTop={100}
        />

        {/* Username */}
        <SkeletonPlaceholder.Item width={120} height={20} marginTop={10} />

        {/* Email */}
        <SkeletonPlaceholder.Item width={180} height={16} marginTop={6} />

        {/* Banner */}
        <SkeletonPlaceholder.Item
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width={screen.width * 0.9}
          height={100}
          borderRadius={16}
          marginTop={20}
        />

        {/* Account Details */}
        <SkeletonPlaceholder.Item
          width={screen.width * 0.9}
          height={20}
          marginTop={20}
        />
        {[...Array(4)].map((_, i) => (
          <SkeletonPlaceholder.Item
            key={i}
            width={screen.width * 0.9}
            height={70}
            borderRadius={12}
            marginTop={12}
          />
        ))}
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

// --- Main Profile component ---
const Profile: FC = () => {
  const [loading, setLoading] = useState(true);

  const accountItems: AccountItem[] = [
    {
      icon: <IconComponents.user />,
      title: "Profile Information",
      description: "Manage account details",
      onPress: () => {},
    },
    {
      icon: <IconComponents.verified />,
      title: "Identity Verification",
      description: "Check your verified status",
      onPress: () => {},
    },
    {
      icon: <IconComponents.paypal />,
      title: "Payment History",
      description: "Review your past transactions",
      onPress: () => {},
    },
    {
      icon: <IconComponents.bank />,
      title: "Bank Account",
      description: "Manage your bank account",
      onPress: () => {},
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <ProfileSkeleton />;

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        {/* Header */}
        <ImageBackground
          source={require("../../../assets/images/ProfilePageLayoutBG.png")}
          imageStyle={styles.layoutBackgroundImage}
          resizeMode="cover"
        >
          <View style={styles.header}>
            <View style={styles.setting}>
              <IconComponents.setting />
            </View>
            <Text style={styles.pageTitle}>Profile</Text>
          </View>
        </ImageBackground>

        {/* Main Content */}
        <View style={styles.content}>
          {/* Profile Info */}
          <View style={styles.profileContainer}>
            <View style={styles.profilePicture}>
              <Image
                source={require("../../../assets/images/ProfileImage.png")}
                style={{
                  width: 72,
                  height: 72,
                  borderColor: "white",
                  borderWidth: 4,
                  borderRadius: 36,
                }}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.username}>Raisa Adriana</Text>
            <Text style={styles.email}>raisaandriana@mail.com</Text>
          </View>

          {/* Banner */}
          <View style={styles.banner}>
            <View style={styles.bannerText}>
              <Text style={styles.bannerTitle}>Earn up to 5% coin</Text>
              <Text style={styles.bannerDescription}>
                Learn financial rewards
              </Text>
            </View>
            <View style={styles.bannerImage}>
              <Image
                source={require("../../../assets/images/ProfileBanner.png")}
                style={styles.image}
              />
            </View>
          </View>

          {/* Account Details */}
          <View style={styles.accountContainer}>
            <Text style={styles.accountTitle}>Account Details</Text>
            {accountItems.map((item, index) => (
              <AccountCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                onPress={item.onPress}
              />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

// --- Styles ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#6172F3",
  },
  layoutBackgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    width: screen.width,
  },
  header: {
    width: "100%",
    paddingVertical: 40,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: Constants.statusBarHeight,
    marginTop: Constants.statusBarHeight,
  },
  setting: { padding: 16 },
  pageTitle: { color: "white", fontSize: 24, fontWeight: "600" },
  content: {
    flex: 1,
    width: screen.width,
    minHeight: screen.height * 0.7,
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    alignItems: "center",
    paddingVertical: 20,
    rowGap: 20,
  },
  profileContainer: { rowGap: 4 },
  profilePicture: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -screen.height * 0.06,
  },
  username: {
    fontSize: 20,
    fontWeight: "600",
    color: "#101828",
    textAlign: "center",
  },
  email: { fontSize: 14, fontWeight: "400", color: "#475467" },
  banner: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#6172F3",
    width: screen.width * 0.9,
    borderRadius: 16,
  },
  bannerText: { padding: 16, justifyContent: "center", rowGap: 4 },
  bannerTitle: { fontSize: 16, fontWeight: "500", color: "white" },
  bannerDescription: { fontSize: 12, color: "#C7D7FE" },
  bannerImage: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 120,
    position: "absolute",
    bottom: 0,
    transform: [{ scaleX: -1 }],
  },
  accountContainer: { width: screen.width * 0.9, rowGap: 12 },
  accountTitle: { fontSize: 14, fontWeight: "600", color: "#101828" },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EAECF0",
    borderRadius: 12,
    padding: 16,
    columnGap: 12,
  },
  cardIcon: {
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#D0D5DD",
    backgroundColor: "#F9FAFB",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContent: { flex: 1, rowGap: 4 },
  cardTitle: { fontSize: 12, fontWeight: "600", color: "#101828" },
  cardDescription: { fontSize: 12, fontWeight: "400", color: "#667085" },
  cardButton: { justifyContent: "center", alignItems: "center" },
});
