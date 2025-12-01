import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { useCart } from '../contexts/CartContext';

export default function PaymentScreen({ navigation }) {
  const { items, total, clearCart } = useCart();
  const [loading, setLoading] = useState(false);

  const onConfirm = async () => {
    if (items.length === 0) {
      Alert.alert('Cart empty', 'Please add a pass before checking out.');
      return;
    }
    setLoading(true);

    // MOCK: simulate request to payment backend
    setTimeout(() => {
      setLoading(false);
      clearCart();
      Alert.alert('Purchase complete', `You paid $${total.toFixed(2)} — ticket(s) added to your account.`);
      navigation.popToTop();
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <Text style={{ marginHorizontal: 12, marginTop: 8 }}>Items: {items.length}</Text>
      <Text style={{ marginHorizontal: 12, marginBottom: 15 }}>Total: ${total.toFixed(2)}</Text>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <Button title="Confirm Purchase (Mock)" onPress={onConfirm} />
          <View style={{ height: 12 }} />
          <Button title="Cancel" onPress={() => navigation.goBack()} color="#999" />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 12 },
  title: { fontSize: 20, fontWeight: '700', marginHorizontal: 12, marginBottom: 8 }
});