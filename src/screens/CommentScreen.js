import React, {useState, useLayoutEffect} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

const AddCommentScreen = ({navigation}) => {
  const [rating, setRating] = useState(3); // Giả sử mặc định là 3 sao
  const [comment, setComment] = useState('');

  const handleStarPress = selectedRating => {
    setRating(selectedRating);
  };

  const HeaderRightButton = ({onPress}) => (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.publishButton}>Publish</Text>
    </TouchableOpacity>
  );

  useLayoutEffect(() => {
    const handlePublish = () => {
      console.log('Comment submitted:', {rating, comment});
      navigation.goBack(); // Navigate back after submission
    };

    navigation.setOptions({
      title: 'Write a comment',
      headerRight: () => <HeaderRightButton onPress={handlePublish} />,
    });
  }, [navigation, rating, comment]);

  const renderStars = () => {
    return [1, 2, 3, 4, 5].map(i => (
      <TouchableOpacity key={i} onPress={() => handleStarPress(i)}>
        <Ionicons name={i <= rating ? 'star' : 'star-outline'} size={32} color={i <= rating ? '#FFD700' : '#E0E0E0'} />
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.starRating}>{renderStars()}</View>
      <TextInput
        style={styles.commentInput}
        placeholder="Viết nhận xét..."
        multiline
        value={comment}
        onChangeText={setComment}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 25,
  },
  publishButton: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 15,
  },
  starRating: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  commentInput: {
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    marginHorizontal: 15,
    textAlignVertical: 'top',
    minHeight: 200,
  },
});

export default AddCommentScreen;
