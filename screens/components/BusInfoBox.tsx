import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BusInfoBox({text1, text2, top,left,color,}:
    {
  text1: string;
  text2: string;
  top: number | string;
  left: number | string;
  color: string;})
  {
  return (
    <View style={[styles.box, { top, left }]}>
      <Text style={styles.text}>{text1}</Text>
      <Text style={[styles.text, { color }]}>{text2}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    position: "absolute",
    opacity: 0.85,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 12,
  },
  text: {
    fontSize: 10,
    fontWeight: "600",
  },

});
