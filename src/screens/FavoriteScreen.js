import React, {useState} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {increaseQty} from '../store/productSlice';

const DATA = Array(10)
  .fill()
  .map((_, index) => ({
    id: index,
    title: 'The Beach House',
    author: 'Mary Alice',
    price: 12.99,
    quantity: 1,
    image: 'https://m.media-amazon.com/images/I/51NiGlapXlL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
  }));

const CartScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.product.favorites);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={favorites}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.cartItem}>
            <Image source={{uri: item.image}} style={styles.bookImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.bookTitle}>{item.title}</Text>
              <Text style={styles.bookAuthor}>By {item.author}</Text>
              <Text style={styles.bookPrice}>{/* ${item?.price?.toFixed(2)} */}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

// CSS styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingHorizontal: 15,
    paddingTop: 10,
  },
  list: {
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  cartItem: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
  bookImage: {
    width: 80,
    height: 120,
    borderRadius: 5,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'space-between',
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bookAuthor: {
    fontSize: 14,
    color: '#666',
  },
  bookPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A80F0',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantityButton: {
    padding: 5,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    paddingVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
  },
  borderSeparate: {
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
  total: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  labelPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'grey',
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: '#4A80F0',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 50,
    marginBottom: 10,
    width: '100%',
    height: 50,
  },
  checkoutText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  promoBox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 10,
  },
  promoInput: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 50,
    padding: 10,
    width: '100%',
    height: 49,
  },
  btnApplyPromo: {
    backgroundColor: '#4A80F0',
    paddingVertical: 10,
    borderRadius: 50,
    width: 100,
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    height: 45,
    justifyContent: 'center',
  },
  txtApply: {
    color: '#fff',
  },
});

export default CartScreen;
