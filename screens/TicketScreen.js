import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import PriceItem from '../components/PriceItem';
import { useCart } from '../contexts/CartContext';

const passes = [
  { id: 'incline', label: 'Incline Pass' },
  { id: 'incline_bus', label: 'Incline + Bus Pass' },
];

const fareCatalog = {
  incline: [
    { id: '3hr', label: '3 Hr Round Trip', price: 2.75 },
    { id: 'day', label: 'Day Pass', price: 7.00 },
  ],
  incline_bus: [
    { id: '3hr', label: '3 Hr Pass', price: 2.75 },
    { id: '3hr_rt', label: '3 Hr Round Trip', price: 2.75 },
    { id: '7day', label: '7 Day Pass', price: 25.00 },
    { id: '31day', label: '31 Day Pass', price: 97.50 },
  ],
};

export default function TicketScreen({ navigation }) {
  const [passType, setPassType] = useState('incline');
  const [fareFilter, setFareFilter] = useState('all');
  const { addToCart } = useCart();

  const priceList = useMemo(() => fareCatalog[passType] || [], [passType]);

  const onAdd = (fare) => {
    addToCart({
      passType,
      fareId: fare.id,
      label: `${passes.find(p=>p.id===passType).label} — ${fare.label}`,
      price: fare.price,
      addedAt: Date.now()
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Buy a pass</Text>

      <Text style={styles.label}>Type of Pass</Text>
      <View style={styles.pickerWrap}>
        <Picker selectedValue={passType} onValueChange={(v)=>setPassType(v)}>
          {passes.map(p => <Picker.Item key={p.id} label={p.label} value={p.id} />)}
        </Picker>
      </View>

      <Text style={styles.label}>Available Fare Types</Text>
      <FlatList
        data={priceList}
        keyExtractor={(i)=>i.id}
        renderItem={({item}) => (
          <PriceItem title={item.label} price={item.price} onAdd={() => onAdd(item)} />
        )}
        contentContainerStyle={{ paddingBottom: 40 }}
      />

      <View style={styles.footer}>
        <Button title="View Cart" onPress={() => navigation.navigate('Cart')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 12, backgroundColor: '#fff' },
  heading: { fontSize: 22, fontWeight: '700', marginHorizontal: 12, marginBottom: 8 },
  label: { marginHorizontal: 12, marginTop: 8, color: '#555' },
  pickerWrap: {
    marginHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden',
    marginTop: 6
  },
  footer: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 18
  }
});