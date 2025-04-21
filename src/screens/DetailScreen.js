import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {addProduct} from '../store/productSlice';

const BookDetailsScreen = ({navigation, route}) => {
  const {id} = route.params;
  const dispatch = useDispatch();

  const [bookshelf, setBookshelf] = useState([]);
  useEffect(() => {
    // Fetch data from API
    const getBookShelf = async () => {
      const rs = await axios(`https://restful-api-vercel-pied.vercel.app/bookshelf/${id}`);
      setBookshelf(rs.data);
      console.log('rs', rs);
    };
    getBookShelf();
  }, []);

  const onAddCart = () => {
    // gui di
    dispatch(addProduct({...bookshelf, quantity: 1})); // bookshelf = {id: 1, title: 'Harry potter',}
    navigation.navigate('Cart');
  };
  return (
    <ScrollView style={styles.container}>
      {/* Book info section */}
      <View style={styles.bookInfoContainer}>
        <Image source={{uri: bookshelf.image}} style={styles.bookCover} />
        <View style={styles.bookDetails}>
          <Text style={styles.bookTitle}>{bookshelf?.title}</Text>
          <Text style={styles.bookAuthor}>{bookshelf?.author}</Text>

          <View style={styles.categoriesContainer}>
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>Historical Fiction</Text>
            </View>
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>Sisters</Text>
            </View>
          </View>

          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Ionicons name="star" size={16} color="#FFD700" />
            <Ionicons name="star" size={16} color="#FFD700" />
            <Ionicons name="star" size={16} color="#FFD700" />
            <Ionicons name="star-half" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>4.5 (268)</Text>
          </View>

          <Text style={styles.priceText}>${bookshelf?.price}</Text>
        </View>
      </View>

      {/* Introduction section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Introduction</Text>
        <Text style={styles.introText}>
          In this richly emotional novel inspired by extraordinary true accounts, New York Times bestselling author
          Kristina McMorris evokes the depth of a mother's bond with her child, and the power of personal histories to
          echo through generations...
        </Text>
        <TouchableOpacity>
          <Text style={styles.readMoreText}>Read more ▼</Text>
        </TouchableOpacity>
      </View>

      {/* Catalog section */}
      <View style={styles.sectionContainer}>
        <View style={styles.catalogHeader}>
          <Text style={styles.sectionTitle}>Catalog : The 235 chapter</Text>
          <Ionicons name="menu-outline" size={24} color="#68C2C2" />
        </View>
      </View>

      {/* Add to bookshelf */}
      <View style={styles.sectionContainer}>
        <View style={styles.bookshelfHeader}>
          <Text style={styles.sectionTitle}>Add to bookshelf</Text>
          <TouchableOpacity>
            <Ionicons name="add-circle-outline" size={24} color="#68C2C2" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Comments section */}
      <View style={styles.sectionContainer}>
        <View style={styles.commentsHeader}>
          <Text style={styles.sectionTitle}>Comments</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Comment')}>
            <Text style={styles.writeCommentText}>write a comment</Text>
          </TouchableOpacity>
        </View>

        {/* Comment items */}
        <CommentItem
          username="Irina Iriser"
          avatar="https://randomuser.me/api/portraits/women/44.jpg"
          comment="This book, right off the bat, has two of my favourite things going for it. It's a historical fiction read (one of my..."
        />

        <CommentItem
          username="Maryellen"
          avatar="https://randomuser.me/api/portraits/women/68.jpg"
          comment="This book takes two stories from different decades told in alternating chapters and deftly ties them together so..."
          liked={true}
        />

        <CommentItem
          username="Nancy Sartor"
          avatar="https://randomuser.me/api/portraits/women/65.jpg"
          comment="The Pieces We Keep is a fascinating tale of the pain of loss, mother's love, the power of an innocent child, the..."
        />
      </View>

      {/* Action buttons */}
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity style={styles.freeTrialButton}>
          <Text style={styles.freeTrialText}>Free trials</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onAddCart} style={styles.buyNowButton}>
          <Text style={styles.buyNowText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Comment item component
const CommentItem = ({username, avatar, comment, liked}) => {
  return (
    <View style={styles.commentItem}>
      <Image source={{uri: avatar}} style={styles.commentAvatar} />
      <View style={styles.commentContent}>
        <Text style={styles.commentUsername}>{username}</Text>
        <Text style={styles.commentText}>{comment}</Text>
      </View>
      <TouchableOpacity>
        {liked ? (
          <Ionicons name="heart" size={24} color="#FF6B6B" />
        ) : (
          <Ionicons name="heart-outline" size={24} color="#C5C5C5" />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  bookInfoContainer: {
    flexDirection: 'row',
    padding: 16,
  },
  bookCover: {
    width: 100,
    height: 160,
    borderRadius: 8,
  },
  bookDetails: {
    flex: 1,
    marginLeft: 16,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  bookAuthor: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  categoryBadge: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    marginRight: 8,
  },
  categoryText: {
    fontSize: 12,
    color: '#666',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  ratingText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  priceText: {
    fontSize: 18,
    color: '#68C2C2',
    fontWeight: 'bold',
    marginTop: 8,
  },
  sectionContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  introText: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
    lineHeight: 20,
  },
  readMoreText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
    textAlign: 'right',
  },
  catalogHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookshelfHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  commentsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  writeCommentText: {
    fontSize: 14,
    color: '#68C2C2',
  },
  commentItem: {
    flexDirection: 'row',
    marginTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  commentAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  commentContent: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },
  commentUsername: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  commentText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
    lineHeight: 20,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    padding: 16,
    paddingBottom: 32,
  },
  freeTrialButton: {
    flex: 1,
    height: 48,
    borderWidth: 1,
    borderColor: '#68C2C2',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  freeTrialText: {
    fontSize: 16,
    color: '#68C2C2',
  },
  buyNowButton: {
    flex: 1,
    height: 48,
    backgroundColor: '#68C2C2',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  buyNowText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default BookDetailsScreen;
