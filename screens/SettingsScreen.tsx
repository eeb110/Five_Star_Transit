import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  PanResponder,
} from "react-native";
import Layout from "./components/Layout";

export default function SettingsScreen({ navigation }) {
  return (
    <Layout navigation={navigation}>
      <View style={styles.screenContainer}>

        {/* ---- CITY ROW ---- */}
        <TouchableOpacity style={styles.optionRow}>
          <View style={styles.rowLeft}>
            <Text style={styles.icon}>📍</Text>
            <Text style={styles.optionLabel}>City</Text>
          </View>
          <View style={styles.rowRight}>
            <Text style={styles.selectedCity}>Pittsburgh, PA</Text>
            <Text style={styles.icon}>❌</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow} onPress={() => navigation.navigate("AccessibilitySafety")}>
          <View style={styles.rowLeft}>
            <Text style={styles.icon}>🧍‍♂️</Text>
            <Text style={styles.optionLabel}>Accessibility & Safety</Text>
          </View>
          <Text style={styles.icon}>›</Text>
        </TouchableOpacity>

        {/* ---- NOTIFICATIONS ---- */}
        <TouchableOpacity style={styles.optionRow} onPress={() => navigation.navigate("Notifications")}>
          <View style={styles.rowLeft}>
            <Text style={styles.icon}>🔔</Text>
            <Text style={styles.optionLabel}>Notifications</Text>
          </View>
          <Text style={styles.icon}>›</Text>
        </TouchableOpacity>

        {/* ---- STATS CARD ---- */}
        <View style={styles.card}>

          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Text style={styles.bigIcon}>⚡</Text>
              <Text style={styles.statNumber}>23</Text>
              <Text style={styles.statLabel}>Calories</Text>
            </View>

            <View style={styles.stat}>
              <Text style={styles.bigIcon}>🌱</Text>
              <Text style={styles.statNumber}>40g</Text>
              <Text style={styles.statLabel}>CO₂ Saved</Text>
            </View>

            <View style={styles.stat}>
              <Text style={styles.bigIcon}>💵</Text>
              <Text style={styles.statNumber}>$56</Text>
              <Text style={styles.statLabel}>Saved</Text>
            </View>
          </View>

          {/* ---- SLIDERS ---- */}
          <CustomSlider label="Prioritize Cheaper Routes" />
          <CustomSlider label="Prioritize Calorie Burning Routes" />
          <CustomSlider label="Prioritize CO2 Saving Routes" />


        </View>
      </View>
    </Layout>
  );
}

/* -----------------------
   CUSTOM BUILT-IN SLIDER
   ----------------------- */

function CustomSlider({ label }) {
  const width = 260;
  const pan = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        let newX = Math.max(0, Math.min(gesture.dx, width));
        pan.setValue(newX);
      },
      onPanResponderRelease: () => {},
    })
  ).current;

  return (
    <View style={{ marginTop: 15 }}>
      <Text style={styles.sliderLabel}>{label}</Text>

      <View style={[styles.sliderTrack, { width }]}>
        <Animated.View
          style={[styles.thumb, { transform: [{ translateX: pan }] }]}
          {...panResponder.panHandlers}
        />
      </View>
    </View>
  );
}

/* -----------------------
   STYLES
   ----------------------- */

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#1F405C",
    padding: 20,
    justifyContent: "center",
  },

  optionRow: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowLeft: { flexDirection: "row", alignItems: "center" },
  rowRight: { flexDirection: "row", alignItems: "center" },
  optionLabel: { marginLeft: 8, fontSize: 16, fontWeight: "500" },
  icon: { fontSize: 20 },
  selectedCity: { marginRight: 10, color: "#58CC6A", fontWeight: "700" },

  /* Card */
  card: {
    marginTop: 20,
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 20,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  stat: { alignItems: "center" },
  statNumber: { fontSize: 18, fontWeight: "700", marginTop: 6 },
  statLabel: { fontSize: 14, color: "#444" },
  bigIcon: { fontSize: 38, color: "#58CC6A" },

  /* Slider */
  sliderLabel: { fontWeight: "500", marginBottom: 6, fontSize: 15 },
  sliderTrack: {
    height: 6,
    backgroundColor: "#CCC",
    borderRadius: 5,
  },
  thumb: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#555",
    position: "absolute",
    top: -10,
  },
});
