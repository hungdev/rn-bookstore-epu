import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

const ProfileScreen = () => {
  const comments = [
    {
      user: 'Danny Rice',
      avatar: 'https://m.media-amazon.com/images/I/51NiGlapXlL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
      rating: 4,
      date: '03-05 08:57',
      comment: "First, this book has done for me what I wanted it to do: it's helping me get rid of junk.",
      bookTitle: 'The Life-Changing Magic of...',
      bookAuthor: 'Marie Kondō',
      bookImage: 'https://m.media-amazon.com/images/I/51NiGlapXlL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    },
    {
      user: 'Danny Rice',
      avatar: 'https://m.media-amazon.com/images/I/51NiGlapXlL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
      rating: 3,
      date: '01-14 09:22',
      comment: 'More like a harlequin romance novels rather',
      bookTitle: 'Title of Book',
      bookAuthor: 'Author Name',
      bookImage: 'https://m.media-amazon.com/images/I/51NiGlapXlL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    },
  ];

  const readingRecords = Array.from({length: 5}, (_, i) => ({
    id: i.toString(),
    uri: 'https://m.media-amazon.com/images/I/51NiGlapXlL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
  }));

  const renderStars = rating => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<Ionicons key={i} name={i <= rating ? 'star' : 'star-outline'} size={12} color="#FFD700" />);
    }
    return stars;
  };

  const renderComment = ({item}) => (
    <View style={styles.commentContainer}>
      <View style={styles.commentHeader}>
        <Image source={{uri: item.avatar}} style={styles.avatar} />
        <View>
          <Text style={styles.userName}>{item.user}</Text>
          <View style={styles.ratingContainer}>{renderStars(item.rating)}</View>
        </View>
        <View style={styles.commentDate}>
          <Text style={styles.dateText}>{item.date}</Text>
        </View>
      </View>
      <Text style={styles.commentText}>{item.comment}</Text>
      <View style={styles.commentBook}>
        <Image source={{uri: item.bookImage}} style={styles.bookImage} />
        <View style={styles.bookInfo}>
          <Text style={styles.bookTitle}>{item.bookTitle}</Text>
          <Text style={styles.bookAuthor}>{item.bookAuthor}</Text>
        </View>
      </View>
    </View>
  );

  const renderBookCover = ({item}) => <Image source={{uri: item.uri}} style={styles.bookCover} />;

  const ListHeaderComponent = (
    <View>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity style={styles.shareButton}>
          <Ionicons name="share-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Profile Summary Section */}
      <View style={styles.profileSummary}>
        <Image
          source={{uri: 'https://m.media-amazon.com/images/I/51NiGlapXlL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'}}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Danny Rice</Text>
        <Text style={styles.profileId}>ID: 67589634</Text>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
      </View>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>568</Text>
          <Text style={styles.statLabel}>Comments</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>243</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>45K</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
      </View>

      {/* Reading Record Section */}
      <View style={styles.readingRecordContainer}>
        <View style={styles.readingRecordHeader}>
          <Text style={styles.readingRecordTitle}>Reading Record</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View all </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal={true}
          data={readingRecords}
          renderItem={renderBookCover}
          keyExtractor={item => item.id}
          style={styles.readingRecordList}
          showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang nếu muốn
        />
      </View>
    </View>
  );

  return (
    <FlatList
      style={styles.container}
      data={comments}
      renderItem={renderComment}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerContainer: {
    backgroundColor: '#48C9B0',
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    padding: 5,
  },
  shareButton: {
    padding: 5,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileSummary: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
    margin: 15,
    marginTop: -50, // Overlap the header
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileId: {
    color: 'gray',
    marginBottom: 10,
  },
  followButton: {
    backgroundColor: '#E0F7FA',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  followButtonText: {
    color: '#48C9B0',
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  statLabel: {
    color: 'gray',
  },
  readingRecordContainer: {
    padding: 15,
  },
  readingRecordHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  readingRecordTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    color: '#48C9B0',
  },
  readingRecordList: {
    // Không cần style đặc biệt, để FlatList tự quản lý
  },
  bookCover: {
    width: 80,
    height: 120,
    marginRight: 10,
    borderRadius: 5,
  },
  commentsContainer: {
    padding: 15,
  },
  commentContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  commentDate: {
    marginLeft: 'auto',
  },
  dateText: {
    color: 'gray',
    fontSize: 12,
  },
  commentText: {
    fontSize: 14,
    marginBottom: 10,
  },
  commentBook: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
    padding: 8,
  },
  bookImage: {
    width: 40,
    height: 60,
    marginRight: 10,
  },
  bookInfo: {
    flex: 1,
  },
  bookTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  bookAuthor: {
    color: 'gray',
    fontSize: 12,
  },
});

export default ProfileScreen;
