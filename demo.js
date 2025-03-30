import { View, Text, Button, TextInput } from 'react-native'
import React, {useState} from 'react'

const Header = (props) => {
   // props = {qty: 5}
   const [text, onChangeText] = useState('');
   const onChangeTextFn = (vl) => onChangeText(vl)
    const onAddText = () => {
      props.getText(text)
    }
  return (
    <View style={{borderWidth: 5}}>
      <Text style={{fontSize: 30}}>Header {props.qty}</Text>
      <TextInput
          onChangeText={onChangeTextFn}
          value={text}
        />
    <Button title="Send" onPress={onAddText} />
    </View>
  )
}

export default function Demo() {
   const [textVl, setTextVl] = useState('')

   const getTextValue = (text) => {
    setTextVl(text)
   }
  return (
    <View style={{padding: 5,borderWidth: 5, borderColor: 'red'}}>
      <Header getText={getTextValue}/>
      <Text style={{fontSize: 30}}>demo: {textVl}</Text>
    </View>
  )
}
