import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';

interface Props {
  product: {productName: string; productAmount: number};
  onIncremet: Function;
  onDecrement: Function;
}

const ProductCard = (props: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={styles.container}>
        <Text style={{color:'#3A3A3B',paddingTop:50,fontSize:15}}>{props.product.productName}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center',justifyContent:'space-between',paddingVertical:80,width:'70%'}}>
          <TouchableOpacity
            onPress={() => props.onIncremet()}
            style={styles.button}>
            <Text style={{color:'#3A3A3B',fontSize:20}}>+</Text>
          </TouchableOpacity>
          <Text style={{color:'#3A3A3B'}}>{props.product.productAmount}</Text>

          <TouchableOpacity
            onPress={() => props.onDecrement()}
            style={styles.button}>
            <Text style={{color:'#3A3A3B',fontSize:20}}>-</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgrey',
    width: 150,
    height: 200,
    alignItems: 'center',
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
