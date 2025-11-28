import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

export default function RouteCard({
  startTime,
  endTime,
  walk1,
  walk2,
  busRoute,
  leaveTime,
  status,
  onGoPress,
  ETA,
  statusColor,
}) {
  return (
    <View style={styles.card}>

      {/* ===== TOP ROW: Time (left) + ETA/status (right) ===== */}
      <View style={styles.topRow}>
        <Text style={styles.timeText}>
          {startTime} – {endTime}
        </Text>

        <View style={styles.etaWrapper}>
          <Text style={styles.statusMins}>{ETA}</Text>
          <Text style={[styles.statusGreen, { color: statusColor }]}>
            {status}
          </Text>
        </View>
      </View>

      {/* ===== MAIN ROW: walk → bus → walk + Go button ===== */}
      <View style={styles.row}>

        {/* Walk 1 */}
        <View style={styles.step}>
          <Image source={require("../assets/walk.png")} style={styles.icon} />
          <Text style={styles.stepText}>{walk1} mins</Text>
        </View>

        <Text style={styles.arrow}>›</Text>

        {/* Bus */}
        <View style={styles.busBlock}>
          <View style={styles.busContainer}>
            <Image source={require("../assets/busicon.png")} style={styles.icon} />
            <Text style={styles.busText}>{busRoute}</Text>
          </View>
          <Text style={styles.leaveText}>Leaving at {leaveTime}</Text>
        </View>

        <Text style={styles.arrow}>›</Text>

        {/* Walk 2 */}
        <View style={styles.step}>
          <Image source={require("../assets/walk.png")} style={styles.icon} />
          <Text style={styles.stepText}>{walk2} mins</Text>
        </View>

        {/* Go Button (aligned with walk/bus row) */}
        <Pressable style={styles.goButton} onPress={onGoPress}>
          <Text style={styles.goText}>Go &gt;</Text>
        </Pressable>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1f3b53",
    marginHorizontal: 8,
    marginBottom: 10,
    padding: 8,
    borderRadius: 20,
  },

  /* ---- TOP ROW ---- */
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
  },
  timeText: {
    color: "white",
    fontSize: 14,
  },
  etaWrapper: {
    alignItems: "flex-end",
  },
  statusMins: {
    color: "white",
    fontSize: 12,
  },
  statusGreen: {
    fontSize: 12,
    fontWeight: "600",
  },

  /* ---- ROUTE ROW ---- */
  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  step: {
    alignItems: "center",
    marginRight: 6,
  },
  stepText: {
    color: "white",
    fontSize: 12,
    marginTop: 2,
  },

  icon: {
    width: 15,
    height: 20,
    tintColor: "white",
  },

  arrow: {
    color: "white",
    fontSize: 26,
    marginHorizontal: 4,
  },

  busBlock: {
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 6,
  },

  busContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#9fb1c2",
    width: 165,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginHorizontal: 6,
  },
  busText: {
    marginLeft: 6,
    fontSize: 14,
  },
  leaveText: {
    color: "#9fff9f",
    fontSize: 12,
    marginTop: 2,
  },

  /* ---- GO BUTTON ---- */
  goButton: {
    backgroundColor: "#5D7F69",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginLeft: "auto",
  },
  goText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
});
