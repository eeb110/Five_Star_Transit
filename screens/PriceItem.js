import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function PriceItem({ title, price, onAdd }) {
  return (
    <View style={styles.row}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.priceText}>${price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.addBtn} onPress={onAdd}>
        <Text style={styles.addBtnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#f2f5f7',
    marginVertical: 6,
    marginHorizontal: 12,
    padding: 12,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: { fontSize: 16, fontWeight: '600' },
  priceText: { fontSize: 14, color: '#333', marginTop: 4 },
  addBtn: {
    backgroundColor: '#2fbf71',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8
  },
  addBtnText: { color: 'white', fontWeight: '600' }
});