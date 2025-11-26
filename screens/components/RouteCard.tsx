import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function RouteCard({
  startTime,
  endTime,
  walk1,
  walk2,
  busRoute,
  leaveTime,
  status,
}) {
  return (
    <View style={styles.card}>
      {/* Time Row */}
      <Text style={styles.timeText}>
        {startTime} – {endTime}
      </Text>

      <View style={styles.row}>
        {/* Walk icon */}
        <View style={styles.step}>
          <Image source={require("../assets/walk.png")} style={styles.icon} />
          <Text style={styles.stepText}>{walk1} mins</Text>
        </View>

        {/* Arrow */}
        <Text style={styles.arrow}>›</Text>

        {/* Bus section */}
        <View style={styles.busContainer}>
          <Image source={require("../assets/busicon.png")} style={styles.icon} />
          <Text style={styles.busText}>{busRoute}</Text>
        </View>

        <Text style={styles.leaveText}>Leaving at {leaveTime}</Text>

        {/* Arrow */}
        <Text style={styles.arrow}>›</Text>

        {/* Walk 2 */}
        <View style={styles.step}>
          <Image source={require("../assets/walk.png")} style={styles.icon} />
          <Text style={styles.stepText}>{walk2} mins</Text>
        </View>

        {/* Status */}
        <View style={styles.statusWrapper}>
          <Text style={styles.statusMins}>15 mins</Text>
          <Text style={styles.statusGreen}>{status}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1f3b53",
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 20,
  },
  timeText: {
    color: "white",
    fontSize: 14,
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  step: {
    alignItems: "center",
    marginRight: 8,
  },
  stepText: {
    color: "white",
    fontSize: 12,
  },
  busContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#9fb1c2",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  busText: {
    marginLeft: 6,
    fontSize: 14,
  },
  arrow: {
    color: "white",
    fontSize: 26,
    marginHorizontal: 4,
  },
  leaveText: {
    color: "#9fff9f",
    fontSize: 12,
    marginHorizontal: 8,
  },
  statusWrapper: {
    marginLeft: "auto",
    alignItems: "flex-end",
  },
  statusMins: {
    color: "white",
  },
  statusGreen: {
    color: "#4cff4c",
  },
  icon: {
    width: 26,
    height: 26,
    tintColor: "white",
  },
});
