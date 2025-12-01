import React from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { useCart } from '../contexts/CartContext';

export default function CartScreen({ navigation }) {
  const { items, removeFromCart, clearCart, total } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      {items.length === 0 ? (
        <Text style={{ margin: 12 }}>No items yet. Add a pass from Tickets.</Text>
      ) : (
        <>
          <FlatList
            data={items}
            keyExtractor={(_, i) => String(i)}
            renderItem={({ item, index }) => (
              <View style={styles.itemRow}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: '600' }}>{item.label}</Text>
                  <Text style={{ color: '#666', marginTop: 4 }}>${item.price.toFixed(2)}</Text>
                </View>
                <TouchableOpacity onPress={() => removeFromCart(index)}>
                  <Text style={{ color: 'red' }}>Remove</Text>
                </TouchableOpacity>
              </View>
            )}
          />
          <View style={styles.summary}>
            <Text style={{ fontSize: 18, fontWeight: '700' }}>Total: ${total.toFixed(2)}</Text>
            <Button title="Checkout" onPress={() => navigation.navigate('Payment')} />
            <View style={{ height: 8 }} />
            <Button title="Clear cart" onPress={clearCart} color="#999" />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 12, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: '700', marginHorizontal: 12, marginBottom: 6 },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#efefef'
  },
  summary: { margin: 12, marginTop: 20 }
});