import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Image } from 'react-native';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';




export default function Loginscreen() {
    const navigation = useNavigation();
  return (
    <View className="bg-white h-full w-full">
       
       <StatusBar style="light"/>
       {/* <Image className="h-full w-full absolute" source={require('../assets/background.jpeg')}/> */}
        <View className="h-full w-full flex justify-around pt-40 pb-10">
            <View className= "flex items-center">
            <Text className="text-black font-bold tracking-wider text-5xl">
                Uber
            </Text>
            </View>
            <View className= "flex items-center">
            <Text className="text-black font-bold tracking-wider text-2xl">
                Whats Your Phone number or email
            </Text>
            </View>
            <View className="flex items-center mx-4 space-y-4 ">
                <View className="bg-black/5 p-5 text-white rounded-2xl w-full border-2">
                <TextInput placeholder="Phone number" placeholderTextColor="black" />
                </View>
                <View className="bg-black/5 p-5 text-white rounded-2xl w-full border-2">
                <TextInput placeholder="Username" placeholderTextColor="black" />
                </View>
                <View className="bg-black/5 p-5 text-white rounded-2xl w-full border-2">
                <TextInput placeholder="Password" placeholderTextColor="black" secureTextEntry />
                </View>
                <View className="bg-black/5 p-5 text-white rounded-2xl w-full border-2">
                <TextInput placeholder="Re-enter Password" placeholderTextColor="black" secureTextEntry/>
                </View>
                <View className="w-full">
                <TouchableOpacity className="w-full bg-black p-3 rounded-2xl mb-3">
                    <Text className="text-xl font-bold text-white text-center">Continue</Text>
                    </TouchableOpacity>
                </View>
                
                
                <View className="w-full">
                
                    <Text className="text-xs font-bold text-black text-center">By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</Text>
                   
                </View>
            
            </View>
            <View className="w-full">
                <TouchableOpacity onPress={()=> navigation.push('Login')}>
                    <Text className="text-xl font-bold text-black text-center">  Signin</Text>
                    </TouchableOpacity>
                </View>
        </View>
       
    </View>
  )
}



