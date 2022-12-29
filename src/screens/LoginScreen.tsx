import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../reduxTKit/Store';
import { loginAction } from '../reduxTKit/features/LoginSlice';

interface Props{
navigation?:any
}

const LoginScreen = (props:Props) => {
  const dispatch = useDispatch();

  const userInfo = useSelector((state: RootState) => state.login.value);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giriş Yap</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          value={userInfo.username}
          placeholderTextColor="grey"
          onChangeText={(text)=>dispatch(loginAction({username:text}))}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          value={userInfo.password}
          placeholderTextColor="grey"
          onChangeText={(text)=>dispatch(loginAction({...userInfo,password:text}))}

        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={()=>props.navigation.navigate('Home')}>
        <Text style={{color: '#fff'}}>Giriş</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  input: {
    borderWidth: 1,
    width: '100%',
  },
  inputView: {
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#B198D8',
    marginBottom: 40,
    alignSelf: 'center',
  },
  loginBtn: {
    width: '100%',
    backgroundColor: '#B198D8',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
});
