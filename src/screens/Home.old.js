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
// Horizontal Book Item Component
const HorizontalBookItem = props => {
  const {id, title, author, image} = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', {id: id, productDetail: props})}
      style={styles.horizontalBookItem}>
      <Image source={{uri: image}} style={styles.bookCover} />
      <Text numberOfLines={1} style={styles.bookTitle}>
        {title}
      </Text>
      <Text numberOfLines={1} style={styles.bookAuthor}>
        {author}
      </Text>
    </TouchableOpacity>
  );
};

// Vertical Book Item Component for Bookshelf
const VerticalBookItem = props => {
  const {id, title, author, coverUrl, image} = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', {productDetail: props})}
      style={styles.verticalBookItem}>
      <Image source={{uri: image}} style={styles.bookCover} />
      <View style={styles.bookDetails}>
        <Text numberOfLines={1} style={styles.bookTitle}>
          {title}
        </Text>
        <Text numberOfLines={1} style={styles.bookAuthor}>
          {author}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const BookApp = () => {
  const [bookshelf, setBookshelf] = useState([]);
  // Sample book data
  const sampleCoverUrl =
    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1721918653l/198902277.jpg';

  useEffect(() => {
    // Fetch data from API
    const getBookShelf = async () => {
      const rs = await axios('https://restful-api-vercel-pied.vercel.app/bookshelf');
      setBookshelf(rs.data);
      console.log('rs', rs);
    };
    getBookShelf();
  }, []);
  // Render Header Component for FlatList
  const renderHeader = () => (
    <>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#999" />
        <TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor="#999" />
        <Ionicons name="mic-outline" size={20} color="#999" />
      </View>

      {/* Reading Section */}
      <View style={styles.shelfSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Reading</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={bookshelf}
          keyExtractor={(item, index) => `reading-${index}`}
          renderItem={({item}) => <HorizontalBookItem {...item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.readingList}
        />
      </View>

      {/* Bookshelf Section Header */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Bookshelf</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>
      </View>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <FlatList
        data={bookshelf}
        keyExtractor={(item, index) => `bookshelf-${index}`}
        renderItem={({item}) => <VerticalBookItem {...item} />}
        numColumns={3}
        columnWrapperStyle={styles.bookshelfRow}
        ListHeaderComponent={renderHeader}
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
