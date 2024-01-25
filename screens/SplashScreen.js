import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, {BounceInRight, FadeInUp} from 'react-native-reanimated';
import { BounceIn, BounceOut } from 'react-native-reanimated';





export default function SplashScreen() {
const navigation=useNavigation();

  return (
    <View  className="bg-black h-full w-full">
      <StatusBar style="light"/>

      <View className="flex-row justify-around w-full absolute">
        <Image className="h-[1] w-[1]" source={require('../assets/image.png')} />
      </View>

      <View className="h-full w-full flex justify-around pt-40 pb-10">
      <View className="flex items-center">
      <Animated.Text entering={BounceIn.delay(200).duration(3000).springify()} exiting={BounceInRight.delay(200).duration(2000)}  className="text-white font-bold tracking-wider text-5xl">
      Uber
      </Animated.Text>
      <View>
      <Text>
      { setTimeout(()=>{ navigation.navigate("Login") }, 6000)}
      </Text>
      </View>
      </View>
      </View>
      
    </View>

    
  )
}