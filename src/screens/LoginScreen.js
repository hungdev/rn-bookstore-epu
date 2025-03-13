import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import TwiterIcon from '../images/twitter.webp'

export default function LoginScreen() {
  return (
    <View style={{backgroundColor: 'white', flex: 1, justifyContent: 'center', padding: 20 }}>
      <View style={{ backgroundColor: 'rgba(0,0, 0, 0.1)', borderRadius: 10, padding: 15}}>
        <Text style={{fontWeight: 'bold', fontSize: 25}}>Sign in</Text>
        <Text style={{marginTop: 15, fontWeight: '700', color: 'grey'}}>Username/Email</Text>
        <TextInput
          onChangeText={() => {}}
          value={''}
          placeholder='User name'
          style={{height: 40, borderBottomWidth: 1, borderBottomColor: 'cyan'}}
        />
        <TextInput
          onChangeText={() => {}}
          value={''}
          placeholder='Password'
          style={{marginTop: 20, height: 40, borderBottomWidth: 1, borderBottomColor: 'cyan'}}
        />

        <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity>
            <Text>Remember me</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Forgot password</Text>
          </TouchableOpacity>
        </View>
      </View>


      <TouchableOpacity style={{alignItems: 'center', marginTop: 30, backgroundColor: 'cyan', padding: 10, borderRadius:6}}>
          <Text style={{fontWeight: 'bold', color: 'white' }}>Log in</Text>
        </TouchableOpacity>

        <Text style={{textAlign: 'center', marginVertical: 30}}>Sign in with</Text>

        <View style={{width: '80%',flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity style={{backgroundColor: 'cyan',  borderRadius: '100%', height: 25, width: 25, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{width: 25, height: 25}}
            source={TwiterIcon}
          />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>F</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>G</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={{marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
          <Text>New user? <Text style={{color: 'cyan'}}>Sign up</Text></Text>
        </TouchableOpacity>
    </View>
  )
}