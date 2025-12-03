import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Notifications">;

export default function NotificationsScreen({ navigation }: Props) {
  // Local state only — no AsyncStorage used.
  const [receiveAll, setReceiveAll] = useState(false);
  const [receiveCritical, setReceiveCritical] = useState(false);
  const [receiveModerate, setReceiveModerate] = useState(false);
  const [haptic, setHaptic] = useState(false);
  const [voice, setVoice] = useState(false);
  const [proximity, setProximity] = useState(false);

  return (
    <View style={styles.container}>



      {/* Section 1 */}
      <Text style={styles.sectionTitle}>Push Notifications</Text>
      <Text style={styles.sectionDescription}>
        pop-up banner or{"\n"}background logging
      </Text>

      <View style={styles.row}>
        <View style={{ flexShrink: 1 }}>
          <Text style={styles.rowLabel}>Receive All Route Updates</Text>
          <Text style={styles.subLabel}>All delays, changes, and advisories</Text>
        </View>
        <Switch value={receiveAll} onValueChange={setReceiveAll} />
      </View>

      <View style={styles.row}>
        <View style={{ flexShrink: 1 }}>
          <Text style={styles.rowLabel}>Only Critical Alerts</Text>
          <Text style={styles.subLabel}>Major service disruptions only</Text>
        </View>
        <Switch value={receiveCritical} onValueChange={setReceiveCritical} />
      </View>

      <View style={styles.row}>
        <View style={{ flexShrink: 1 }}>
          <Text style={styles.rowLabel}>Only Moderate Alerts</Text>
          <Text style={styles.subLabel}>Minor delays & slowdowns</Text>
        </View>
        <Switch value={receiveModerate} onValueChange={setReceiveModerate} />
      </View>


      <View style={styles.divider} />

      {/* Section 2 */}
      <Text style={styles.sectionTitle}>Haptic feedback</Text>
      <Text style={styles.sectionDescription}>certain vibration alerts</Text>

      <View style={styles.row}>
        <Text style={styles.rowLabel}>Enable Vibration for Alerts</Text>
        <Switch value={haptic} onValueChange={setHaptic} />
      </View>

      <View style={styles.divider} />

      {/* Section 3 */}
      <Text style={styles.sectionTitle}>Voice Readout</Text>
      <Text style={styles.sectionDescription}>audible alerts</Text>

      <View style={styles.row}>
        <Text style={styles.rowLabel}>Enable Voice Alerts</Text>
        <Switch value={voice} onValueChange={setVoice} />
      </View>

      <View style={styles.divider} />

      {/* Section 4 */}
      <Text style={styles.sectionTitle}>Proximity Alerts</Text>
      <Text style={styles.sectionDescription}>
        Only when close to a Station
      </Text>

      <View style={styles.row}>
        <Text style={styles.rowLabel}>Enable Proximity Alerts</Text>
        <Switch value={proximity} onValueChange={setProximity} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e3d55",
    paddingTop: 40,
    paddingHorizontal: 25,
  },

  backButton: {
    marginBottom: 20,
  },

  backButtonText: {
    fontSize: 18,
    color: "#ffffff",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 10,
  },

  sectionDescription: {
    fontSize: 14,
    color: "#c4d3df",
    marginBottom: 5,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },

  rowLabel: {
    fontSize: 16,
    color: "#ffffff",
    flexShrink: 1,
    paddingRight: 20,
  },

  divider: {
    height: 1,
    backgroundColor: "#ffffff",
    opacity: 0.3,
    marginVertical: 20,
  },

  subLabel: {
    fontSize: 12,
    color: "#c4d3df",
    marginTop: 2,
  }

});
