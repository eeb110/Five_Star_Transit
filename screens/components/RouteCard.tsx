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
      {/* Time Row */}
      <Text style={styles.timeText}>
        {startTime} – {endTime}
      </Text>

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

        {/* Status + Go button UNDER it */}
        <View style={styles.statusWrapper}>
          <Text style={styles.statusMins}>{ETA}</Text>
          <Text style={[styles.statusGreen, { color: statusColor }]}>{status}</Text>


          <Pressable style={styles.goButton} onPress={onGoPress}>
            <Text style={styles.goText}>Go &gt;</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1f3b53",
    marginHorizontal: 8,
    marginBottom: 16,
    padding: 12,
    borderRadius: 20,
  },
  timeText: {
    color: "white",
    fontSize: 14,
  },
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
  busContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#9fb1c2",
    paddingHorizontal: 10,
    paddingVertical: 6,
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
  busBlock: {
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 6,
  },
  statusWrapper: {
    marginLeft: "auto",
    justifyContent: "center",   // keeps it vertically aligned with row
    alignItems: "flex-end",
  },
  statusMins: {
    color: "white",
    fontSize: 12,
  },


  goButton: {
    backgroundColor: "#5D7F69",
    paddingVertical: 4,         // was 6–8 → smaller height
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 2,                // reduced spacing
  },
  goText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
});
