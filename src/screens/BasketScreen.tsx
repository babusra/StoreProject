import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import BasketProductCard from '../components/BasketProductCard';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../reduxTKit/Store';
import {productAmountDecrement, productAmountIncrement, productReset} from '../reduxTKit/features/ProductSlice';
import { logoutAction } from '../reduxTKit/features/LoginSlice';

interface Props {
  navigation?: any;
}
const BasketScreen = (props: Props) => {
  const dispatch = useDispatch();
  const Products = useSelector(
    (state: RootState) => state.product.value,
  ).products;
  const totalProducts = useSelector(
    (state: RootState) => state.product.value.totalProduct,
  );

  const onIncrement = (product: any) => {
    dispatch(productAmountIncrement({product}));
  };

  const onDecrement = (product: any) => {
    dispatch(productAmountDecrement({product}));
  };
  console.log(totalProducts);
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', marginBottom: 20}}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Text style={{fontSize: 20, height: 20}}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={{position: 'absolute', right: '40%', fontSize: 20}}>
          Sepetim ({totalProducts} ürün)
        </Text>
      </View>
      <FlatList
        data={Products}
        renderItem={({item}) => {
          return (
            item.productAmount !== 0 && (
              <BasketProductCard
                product={item}
                onIncremet={() => onIncrement(item)}
                onDecrement={() => onDecrement(item)}
                onRemove={() => {
                  dispatch(productReset({item}));
                }}
              />
            )
          );
        }}
      />
      <TouchableOpacity
        onPress={() => {
          dispatch(logoutAction({}))
          props.navigation.navigate('Login')
        }}
        style={styles.button}>
        <Text style={{color: '#fff'}}>Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
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
    padding: 10,marginBottom:30
  },
});
