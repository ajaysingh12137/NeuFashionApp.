import React, {useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  StatusBar,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const {height, width} = Dimensions.get('window');
export default function SignUp({navigation}: {navigation: any}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showpassword, setshowpassword] = useState(false);

  const userinfo = async () => {
    if (!name) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (!email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (!phone) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
    if (!password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (!name || !phone || !email || !password) {
      return false;
    } else {
      try {
        const userdata = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );
        console.log(userdata);
        navigation.navigate('Login');
        Alert.alert('Account Created Sucessfully');
      } catch (error) {
        Alert.alert('Invalid Email/Password');
      }
    }
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#C2D2D9'}}>
      <StatusBar backgroundColor={'#C2D2D9'} barStyle={'dark-content'} />

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 150,
        }}>
        <Image
          style={{
            height: height - 500,
            position: 'absolute',
            width: width - 40,
          }}
          source={require('../image/fash.png')}
        />
      </View>

      <View style={{alignItems: 'center', marginTop: 110}}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            alignItems: 'center',
            color: 'black',
            textDecorationLine: 'underline',
          }}>
          SignUp
        </Text>
      </View>
      <TextInput
        style={{
          fontSize: 20,
          borderWidth: 0.2,
          width: '90%',
          height: 50,
          marginLeft: 15,
          borderRadius: 5,
          marginTop: 30,
          paddingLeft: 10,
        }}
        placeholder="Enter Your Name"
        keyboardType={'default'}
        value={name}
        onChangeText={text => setName(text)}
      />
      {nameError ? (
        <Text style={{color: 'red', paddingLeft: 20, marginTop: 3}}>
          *Please Enter Valid Name
        </Text>
      ) : null}
      <TextInput
        style={{
          fontSize: 20,
          borderWidth: 0.2,
          width: '90%',
          height: 50,
          marginLeft: 15,
          borderRadius: 5,
          marginTop: 20,
          paddingLeft: 10,
        }}
        placeholder="Enter Phone Number"
        keyboardType={'number-pad'}
        value={phone}
        onChangeText={text => setPhone(text)}
      />
      {phoneError ? (
        <Text style={{color: 'red', paddingLeft: 20, marginTop: 3}}>
          *Please Enter Valid Phone Number
        </Text>
      ) : null}
      <TextInput
        style={{
          fontSize: 20,
          borderWidth: 0.2,
          width: '90%',
          height: 50,
          marginLeft: 15,
          borderRadius: 5,
          marginTop: 20,
          paddingLeft: 10,
        }}
        autoCapitalize="none"
        placeholder="Email-Id"
        keyboardType={'email-address'}
        value={email}
        onChangeText={text => setEmail(text)}
        focusable
      />
      {emailError ? (
        <Text style={{color: 'red', paddingLeft: 20, marginTop: 3}}>
          *Please Enter Valid Email-Id
        </Text>
      ) : null}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          borderWidth: 0.2,
          width: '90%',
          height: 50,
          marginLeft: 15,
          borderRadius: 5,
          marginTop: 20,
          paddingLeft: 10,
          alignItems: 'center',
        }}>
        <View style={{flex: 1}}>
          <TextInput
            style={{
              fontSize: 20,
            }}
            autoCapitalize="none"
            placeholder="Create Password"
            secureTextEntry={showpassword ? false : true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <TouchableOpacity
          onPress={() => setshowpassword(!showpassword)}
          style={{paddingRight: 8}}>
          <FontAwesome5
            name={showpassword ? 'eye' : 'eye-slash'}
            size={20}
            style={{paddingRight: 6}}
          />
        </TouchableOpacity>
      </View>
      {passwordError ? (
        <Text style={{color: 'red', paddingLeft: 20, marginTop: 3}}>
          *Password Must Be 8-16 Characters
        </Text>
      ) : null}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 50,
        }}>
        <Text style={{fontSize: 15}}>Already have an Account? /</Text>
        <View style={{marginLeft: 3, padding: 3}}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{fontSize: 18, color: 'purple'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'purple',
          marginTop: 10,
          width: 350,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 5,
          borderRadius: 8,
        }}>
        <TouchableOpacity onPress={() => userinfo()}>
          <Text style={{fontSize: 30, color: 'white', padding: 4}}>
            Create Account
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 0.4, backgroundColor: '#C2D2D9'}}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
