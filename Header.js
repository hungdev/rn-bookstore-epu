import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export const Footer = (props) => {
  return (
    <View>
      <Text>Footer</Text>
    </View>
  );
}

const Header = (props) => {
  const {onGetData} = props;
  const [data, setData] = React.useState('Hello');

  const onSendBack = () => {
    onGetData(data);
  }
  return (
    <View>
      <TouchableOpacity onPress={onSendBack}>
        <Text>Header</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Header;