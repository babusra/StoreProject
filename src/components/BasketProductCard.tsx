import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';

interface Props {
  product: {productName: string; productAmount: number};
  onIncremet: Function;
  onDecrement: Function;
  onRemove: Function;
}

const BasketProductCard = (props: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight:60
      }}>
      <View style={styles.container}>
        <Text style={{color: '#3A3A3B'}}>{props.product.productName}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 10,
            width: '70%',
          }}>
          <TouchableOpacity
            onPress={() => props.onIncremet()}
            style={styles.button}>
            <Text style={{color: '#3A3A3B', fontSize: 20}}>+</Text>
          </TouchableOpacity>
          <Text style={{color: '#3A3A3B'}}>{props.product.productAmount}</Text>

          <TouchableOpacity
            onPress={() => props.onDecrement()}
            style={styles.button}>
            <Text style={{color: '#3A3A3B', fontSize: 20}}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity 
      onPress={()=>props.onRemove()}
      style={{...styles.button,width:50}}>
        <Text style={{color: '#3A3A3B'}}>çıkar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketProductCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgrey',
    width: 200,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  button: {
    backgroundColor: '#E8CEF0',
    borderRadius: 8,
    minWidth: 30,
    minHeight: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
