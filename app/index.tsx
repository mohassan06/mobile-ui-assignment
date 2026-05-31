import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Index() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.backButton}>‹</Text>

          <View style={styles.titleBox}>
            <Text style={styles.smallTitle}>OOTD_EVERYDAY</Text>
            <Text style={styles.pageTitle}>Posts</Text>
          </View>

          <Text style={styles.menuDots}>...</Text>
        </View>

        <View style={styles.userRow}>
          <Image
            source={require("../assets/images/Main-post.jpg")}
            style={styles.profileImage}
          />

          <View>
            <Text style={styles.username}>ootd_everyday</Text>
            <Text style={styles.location}>via frenchie_fry39</Text>
          </View>

          <Text style={styles.userDots}>...</Text>
        </View>

        <Image
          source={require("../assets/images/Main-post.jpg")}
          style={styles.postImage}
        />

        <View style={styles.iconRow}>
          <View style={styles.leftIcons}>
            <Ionicons name="heart-outline" size={35} color="#111111" />
            <Ionicons name="chatbubble-outline" size={32} color="#111111" />
            <Ionicons name="paper-plane-outline" size={33} color="#111111" />
          </View>

          <Feather name="bookmark" size={34} color="#111111" />
        </View>

        <View style={styles.textArea}>
          <Text style={styles.normalText}>
            Liked by <Text style={styles.boldText}>paisley.print.48</Text> and{" "}
            <Text style={styles.boldText}>7 others</Text>
          </Text>

          <Text style={styles.normalText}>
            <Text style={styles.boldText}>frenchie_fry39</Text> Fresh shot on a
            sunny day! ✨
          </Text>

          <Text style={styles.grayText}>View all 12 comments</Text>

          <Text style={styles.normalText}>
            <Text style={styles.boldText}>lil_yatt38</Text> Awesome tones
          </Text>

          <Text style={styles.normalText}>
            <Text style={styles.boldText}>pia.napod</Text> Love it ❤️
          </Text>

          <Text style={styles.timeText}>1 day ago</Text>
        </View>
      </ScrollView>

      <View style={styles.bottomArea}>
        <View style={styles.navBar}>
          <Ionicons name="home-outline" size={32} color="#111111" />
          <Ionicons name="search-outline" size={32} color="#111111" />

          <View style={styles.reelsIcon}>
            <MaterialCommunityIcons
              name="movie-play-outline"
              size={34}
              color="#111111"
            />
          </View>

          <Ionicons name="bag-outline" size={32} color="#111111" />
          <Ionicons name="person-circle" size={34} color="#111111" />
        </View>

        <Pressable
          style={styles.alertButton}
          onPress={() => Alert.alert("Alert Button pressed")}
        >
          <Text style={styles.alertText}>Alert</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  container: {
    paddingTop: 45,
    paddingBottom: 150,
    backgroundColor: "#ffffff",
  },

  topBar: {
    height: 60,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  backButton: {
    fontSize: 36,
    color: "#111111",
  },

  titleBox: {
    alignItems: "center",
  },

  smallTitle: {
    fontSize: 12,
    color: "#888888",
    fontWeight: "600",
  },

  pageTitle: {
    fontSize: 21,
    fontWeight: "700",
    color: "#111111",
  },

  menuDots: {
    fontSize: 24,
    color: "#111111",
    letterSpacing: 3,
  },

  userRow: {
    height: 70,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
  },

  profileImage: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 12,
  },

  username: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111111",
  },

  location: {
    fontSize: 14,
    color: "#333333",
  },

  userDots: {
    marginLeft: "auto",
    fontSize: 24,
    color: "#111111",
    letterSpacing: 3,
  },

  postImage: {
    width: "100%",
    height: 520,
    resizeMode: "cover",
    backgroundColor: "#dddddd",
  },

  iconRow: {
    height: 55,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  leftIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },

  textArea: {
    paddingHorizontal: 16,
  },

  normalText: {
    fontSize: 16,
    color: "#111111",
    marginBottom: 6,
  },

  boldText: {
    fontWeight: "700",
  },

  grayText: {
    fontSize: 16,
    color: "#777777",
    marginBottom: 6,
  },

  timeText: {
    fontSize: 13,
    color: "#999999",
    marginTop: 2,
  },

  bottomArea: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#dddddd",
    paddingBottom: 25,
  },

  navBar: {
    height: 55,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  reelsIcon: {
    alignItems: "center",
    justifyContent: "center",
  },

  alertButton: {
    height: 52,
    marginHorizontal: 20,
    backgroundColor: "#007AFF",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  alertText: {
    color: "#ffffff",
    fontSize: 21,
    fontWeight: "700",
  },
});
