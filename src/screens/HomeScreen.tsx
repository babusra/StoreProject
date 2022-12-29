import {View, Text, StyleSheet, FlatList, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../reduxTKit/Store';
import {
  productAmountDecrement,
  productAmountIncrement,
} from '../reduxTKit/features/ProductSlice';
import ProductCard from '../components/ProductCard';

interface Props {
  navigation?: any;
}

const HomeScreen = (props: Props) => {
  const dispatch = useDispatch();
  const Products = useSelector((state: RootState) => state.product.value.products);
  const total = useSelector((state:RootState)=> state.product.value.totalProduct)
  const userInfo = useSelector((state: RootState) => state.login.value);

  const onIncrement = (product: any) => {
    dispatch(productAmountIncrement({product}));
  };

  const onDecrement = (product: any) => {
    dispatch(productAmountDecrement({product}));
  };

  return (
    <View style={styles.container}>
      <Text>{userInfo.username} {userInfo.password}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{paddingLeft: 120, fontSize: 30}}>Ürünler</Text>
      </View>
      <FlatList
        style={{marginTop: 30}}
        numColumns={2}
        data={Products}
        renderItem={({item}) => {
          return (
            <ProductCard
              product={item}
              onIncremet={() => onIncrement(item)}
              onDecrement={() => onDecrement(item)}
            />
          );
        }}
      />
      <TouchableOpacity
        onPress={() => {
          total===0 ?Alert.alert('Sepete ürün ekleyin'):
          props.navigation.navigate('Basket')
        }}
        style={{...styles.button, padding: 10}}>
        <Text style={{color: '#fff'}}>Sepete Ekle ({total} Ürün)</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    paddingTop: 50,
  },
  button: {
    backgroundColor: '#B198D8',
    borderRadius: 8,
    margin: 5,
    minWidth: 30,
    minHeight: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
