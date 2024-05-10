import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Login = ({navigation}: {navigation: any}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showpassword, setshowpassword] = useState(false);

  const handlelogin = async () => {
    try {
      if ((email.length > 0, password.length > 0)) {
        const isuserlogin = await auth().signInWithEmailAndPassword(
          email,
          password,
        );
        console.log(isuserlogin);
        navigation.navigate('Homescreen');
        Alert.alert('Login Successfully');
      } else {
        Alert.alert('Please Enter Required Details');
      }
    } catch (error) {
      Alert.alert('Invalid Email/Password ');
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#C2D2D9'}}>
      <StatusBar backgroundColor={'#C2D2D9'} barStyle={'dark-content'} />

      <ScrollView>
        <View>
          <Image
            style={{width: 400, height: 300}}
            source={require('../image/fash.png')}
          />
          <View>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 15,
                marginBottom: 5,
                marginTop: 20,
              }}>
              Email-Id :-{' '}
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                borderWidth: 1,
                borderRadius: 10,
                alignItems: 'center',
                marginLeft: 15,
                paddingLeft: 10,
                height: 50,
                marginBottom: 20,
                width: '90%',
              }}>
              <Entypo name="mail" size={25} />
              <View style={{paddingLeft: 10, flex: 1}}>
                <TextInput
                  style={{fontSize: 17}}
                  autoCapitalize="none"
                  placeholder="Enter Your Email"
                  value={email}
                  onChangeText={Text => setEmail(Text)}
                />
              </View>
            </View>
            <Text style={{fontSize: 15, marginLeft: 15, marginBottom: 5}}>
              Password :-{' '}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                width: '90%',
                borderWidth: 1,
                borderRadius: 10,
                alignItems: 'center',
                marginLeft: 15,
                paddingLeft: 10,
                height: 50,
              }}>
              <Entypo name="lock-open" size={25} />
              <View style={{paddingLeft: 10, flex: 1}}>
                <TextInput
                  style={{fontSize: 17}}
                  autoCapitalize="none"
                  placeholder="Enter Your Password"
                  secureTextEntry={showpassword ? false : true}
                  value={password}
                  onChangeText={Text => setPassword(Text)}
                />
              </View>
              <TouchableOpacity onPress={() => setshowpassword(!showpassword)}>
                <FontAwesome5
                  name={showpassword ? 'eye' : 'eye-slash'}
                  size={20}
                  style={{paddingRight: 6}}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 0.8,
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 100,
              }}>
              <View
                style={{
                  flex: 0.1,
                  flexDirection: 'row',
                  marginBottom: 15,
                }}>
                <Text style={{fontSize: 15}}>Already Have An Account / </Text>
                <Text
                  onPress={() => navigation.navigate('Signup')}
                  style={{fontSize: 15, color: 'purple'}}>
                  SignUp Here
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => handlelogin()}
                style={{
                  backgroundColor: 'purple',
                  padding: 10,
                  borderRadius: 50,
                  width: 350,
                }}>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  LOGIN
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
