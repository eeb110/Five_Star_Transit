// TransportPriorityList.tsx
import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, PanResponder, Animated } from "react-native";

export default function TransportPriorityList() {
  const [items, setItems] = useState(["Buses", "Subway", "Biking", "Ferry"]);

  const positions = items.map(() => new Animated.ValueXY());
  const panResponders = items.map((_, index) =>
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        positions[index].setOffset({
          x: positions[index].x._value,
          y: positions[index].y._value,
        });
      },
      onPanResponderMove: (_, gesture) => {
        positions[index].setValue({ x: 0, y: gesture.dy });
        const newIndex = getNewIndex(index, gesture.dy, items.length);
        if (newIndex !== index) {
          setItems((prev) => moveItem(prev, index, newIndex));
        }
      },
      onPanResponderRelease: () => {
        positions[index].flattenOffset();
        Animated.spring(positions[index], {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      },
    })
  );

  function getNewIndex(startIndex: number, dy: number, length: number) {
    const rowHeight = 50;
    return Math.min(
      length - 1,
      Math.max(0, Math.floor((startIndex * rowHeight + dy) / rowHeight))
    );
  }

  function moveItem(arr: string[], from: number, to: number) {
    const updated = [...arr];
    const item = updated.splice(from, 1)[0];
    updated.splice(to, 0, item);
    return updated;
  }

  return (
    <View style={{ marginTop: 10 }}>
      {items.map((item, index) => (
        <Animated.View
          key={item}
          style={[styles.row, positions[index].getLayout()]}
          {...panResponders[index].panHandlers}
        >
          <Text style={styles.label}>{item}</Text>
          <Text style={styles.drag}>≡</Text>
        </Animated.View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: "#325a77",
    padding: 15,
    marginBottom: 6,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: { color: "#fff", fontSize: 16 },
  drag: { fontSize: 24, color: "#ccc" },
});
