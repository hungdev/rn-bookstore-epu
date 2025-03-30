import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity, StyleSheet, StatusBar} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

const BookCategoryScreen = () => {
  const categories = [
    {id: 1, name: 'Thrillers', count: 1027, image: 'https://images.unsplash.com/photo-1510133768164-a8f7e4d4e3dc'},
    {id: 2, name: 'Science Fiction', count: 579, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475'},
    {id: 3, name: 'Literature', count: 2145, image: 'https://images.unsplash.com/photo-1524578271613-d550eacf6090'},
    {id: 4, name: 'Arts', count: 263, image: 'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848'},
    {id: 5, name: 'Biographies', count: 2147, image: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe'},
    {id: 6, name: 'Business', count: 3678, image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf'},
    {id: 7, name: 'Cookbooks', count: 589, image: 'https://images.unsplash.com/photo-1556909211-36987daf7b4d'},
    {id: 8, name: 'History', count: 2589, image: 'https://images.unsplash.com/photo-1461360228754-6e81c478b882'},
    {id: 9, name: 'Romance', count: 1578, image: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954'},
    {id: 10, name: 'Travel', count: 968, image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800'},
    {id: 11, name: 'Religion', count: 135, image: 'https://images.unsplash.com/photo-1542638369-b73ea23dafdb'},
    {id: 12, name: 'Politics', count: 563, image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9'},
  ];

  const renderCategoryItem = ({item, index}) => (
    <TouchableOpacity style={[styles.categoryItem, index % 3 === 2 ? styles.rightEdgeItem : null]}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.image}} style={styles.categoryImage} />
      </View>
      <Text style={styles.categoryName}>{item.name}</Text>
      <Text style={styles.categoryCount}>{item.count} in total</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.id.toString()}
        numColumns={3}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 16,
  },
  listContent: {
    paddingBottom: 24,
    paddingHorizontal: 16,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  categoryItem: {
    width: '31%',
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  imageContainer: {
    height: 100,
    width: '100%',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 8,
  },
  categoryCount: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginTop: 2,
    marginBottom: 8,
  },
});

export default BookCategoryScreen;
