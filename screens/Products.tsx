import {
  Image,
  SafeAreaView,
  Text,
  View,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: string;
  rate: number;
  count: number;
}
const Products = () => {
  const navigation = useNavigation();
  const screenwidth = Math.round(Dimensions.get('window').width);
  const cardwidth = screenwidth / 2 - 10;

  const [data, setData] = useState<Product[]>([]);
  const ApiData = async () => {
    const URL = 'https://fakestoreapi.com/products';
    let res = await fetch(URL);
    let result = await res.json();
    setData(result);
  };
  useEffect(() => {
    ApiData();
  }, []);
  console.log(data);
  return (
    <View style={{flex: 1, backgroundColor: '#EBEAEF'}}>
      <SafeAreaView />
      <View
        style={{
          alignItems: 'center',
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back"
          size={25}
          style={{left: 10, color: 'black'}}
        />
        <Text
          style={{
            fontSize: 24,
            marginLeft: 20,
            marginBottom: 5,
            color: 'black',
            fontWeight: '500',
            right: 40,
          }}>
          Categories
        </Text>
        <AntDesign
          name="search1"
          size={20}
          style={{color: 'black', left: 20}}
        />
        <AntDesign name="bells" size={20} style={{color: 'black'}} />
        <SimpleLineIcons
          name="handbag"
          size={20}
          style={{color: 'black', right: 25}}
        />
      </View>
      {/* Category */}
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          marginTop: 15,
          marginBottom: 5,
        }}>
        <FlatList
          style={{
            backgroundColor: '#EBEAEF',
          }}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={data}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: cardwidth,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 10,
                  height: 250,
                  backgroundColor: 'white',
                  marginHorizontal: 5,
                  borderRadius: 15,
                }}>
                <Image
                  source={{uri: item.image}}
                  height={180}
                  width={170}
                  resizeMode="contain"
                />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};
export default Products;
