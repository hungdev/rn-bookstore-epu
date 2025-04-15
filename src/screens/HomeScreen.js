import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  StatusBar,
  FlatList,
} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
// https://restful-api-vercel-pied.vercel.app/bookshelf

const BookApp = () => {
  const navigation = useNavigation();
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    // Fetch data from API
    const getBookShelf = async () => {
      const rs = await axios('https://restful-api-vercel-pied.vercel.app/bookshelf');
      setBookshelf(rs.data);
      console.log('rs', rs);
    };
    getBookShelf();
  }, []);

  const renderItem = item => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Detail', {id: item?.id})} style={styles.verticalBookItem}>
        <Image source={{uri: item?.image}} style={styles.bookCover} />
        <View style={styles.bookDetails}>
          <Text numberOfLines={1} style={styles.bookTitle}>
            {item?.title}
          </Text>
          <Text numberOfLines={1} style={styles.bookAuthor}>
            {item?.author}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={bookshelf}
        keyExtractor={(item, index) => `bookshelf-${index}`}
        renderItem={({item}) => renderItem(item)}
        numColumns={3}
        columnWrapperStyle={styles.bookshelfRow}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    margin: 16,
    paddingHorizontal: 12,
    height: 40,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    color: '#333',
    fontSize: 16,
  },
  shelfSection: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  viewAllText: {
    fontSize: 14,
    color: '#888',
  },
  readingList: {
    paddingLeft: 16,
  },
  // Horizontal book item styles
  horizontalBookItem: {
    width: 100,
    marginRight: 16,
  },
  // Vertical book item styles for Bookshelf
  verticalBookItem: {
    width: '30%',
    marginBottom: 16,
  },
  bookshelfRow: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  bookCover: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  bookDetails: {
    width: '100%',
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  bookAuthor: {
    fontSize: 12,
    color: '#999',
  },
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    height: 60,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BookApp;
