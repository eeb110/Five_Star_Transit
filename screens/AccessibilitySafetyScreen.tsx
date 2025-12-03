import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import TransportPriorityList from "./components/TransportPriorityList";


type Props = NativeStackScreenProps<RootStackParamList, "AccessibilitySafety">;

export default function AccessibilitySafetyScreen({ navigation }: Props) {
  const [minimizeWalking, setMinimizeWalking] = useState(false);
  const [wheelchairMode, setWheelchairMode] = useState(false);
  const [mainWalkways, setMainWalkways] = useState(false);
  const [soundCues, setSoundCues] = useState(false);
  const [crowdDensity, setCrowdDensity] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scroll}>



        {/* Minimize Walking */}
        <View style={styles.row}>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Minimize Walking</Text>
            <Text style={styles.sublabel}>
              Prioritize trips with less walking in trip planner
            </Text>
          </View>
          <Switch
            value={minimizeWalking}
            onValueChange={setMinimizeWalking}
            thumbColor="#FFF"
            trackColor={{ true: "#B5C9D3", false: "#C4C4C4" }}
          />
        </View>
        <View style={styles.divider} />

        {/* Wheelchair */}
        <View style={styles.row}>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Wheelchair/Stroller</Text>
            <Text style={styles.sublabel}>
              Identify Step Free Options & Avoid Steep Inclines
            </Text>
          </View>
          <Switch
            value={wheelchairMode}
            onValueChange={setWheelchairMode}
            thumbColor="#FFF"
            trackColor={{ true: "#B5C9D3", false: "#C4C4C4" }}
          />
        </View>
        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Transit Mode Priority</Text>
        <Text style={styles.sublabel}>
          Rank modes of transit from most to least preferred.
        </Text>
        {/* Transport Priority List */}
        <TransportPriorityList />


        <View style={styles.divider} />

        {/* Main Walkways */}
        <View style={styles.row}>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Use Main Walkways</Text>
            <Text style={styles.sublabel}>
              Stick to well-lit, heavily used paths when moving around.
            </Text>
          </View>
          <Switch
            value={mainWalkways}
            onValueChange={setMainWalkways}
            thumbColor="#FFF"
            trackColor={{ true: "#B5C9D3", false: "#C4C4C4" }}
          />
        </View>
        <View style={styles.divider} />

        {/* Sound Cues */}
        <View style={styles.row}>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Routes with Sound Cues</Text>
            <Text style={styles.sublabel}>
              Paths where crosswalk sounds or voices help you stay oriented.
            </Text>
          </View>
          <Switch
            value={soundCues}
            onValueChange={setSoundCues}
            thumbColor="#FFF"
            trackColor={{ true: "#B5C9D3", false: "#C4C4C4" }}
          />
        </View>
        <View style={styles.divider} />

        {/* Crowd Density */}
        <View style={styles.row}>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Crowd Density</Text>
            <Text style={styles.sublabel}>
              Avoid crowd dense buses and trains
            </Text>
          </View>
          <Switch
            value={crowdDensity}
            onValueChange={setCrowdDensity}
            thumbColor="#FFF"
            trackColor={{ true: "#B5C9D3", false: "#C4C4C4" }}
          />
        </View>
        <View style={styles.divider} />

        {/* High Contrast */}
        <View style={styles.row}>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>High Contrast</Text>
            <Text style={styles.sublabel}>
              Enhances visibility by strengthening color contrast in the app.
            </Text>
          </View>
          <Switch
            value={highContrast}
            onValueChange={setHighContrast}
            thumbColor="#FFF"
            trackColor={{ true: "#B5C9D3", false: "#C4C4C4" }}
          />
        </View>

      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#1F405C",
  },
  scroll: {
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  backIcon: {
    fontSize: 28,
    color: "white",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
  },
  sublabel: {
    fontSize: 13,
    color: "#E0E0E0",
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: "#B8C4D2",
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
    marginBottom: 5,
  },
  priorityItem: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  priorityText: {
    fontSize: 16,
  },
  dragIcon: {
    fontSize: 24,
    color: "#555",
  },
});

