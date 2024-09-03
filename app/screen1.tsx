import React from 'react'
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, Dimensions } from "react-native";

import PIG from '../assets/images/pig.png'
import Star from '../assets/images/Star 1.png'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Screen1({ navigation}) {
  return (
    <View style={style.container}>
      <View style={style.imgContainer}>
      <Image source={PIG} />

      </View>
      <View style={style.detailsContainer}>
      <Text style={style.main}>Easy Savings.</Text>
      <Text style={style.basic}>Providing a hassle-free savings account opening process for your child</Text>
      <View style={style.slider}>
      <Image source={Star} />
      <View style={style.circle}></View>
      <View style={style.circle}></View>
      </View>
      </View>
      <View style={style.btnContaier}>
      <TouchableOpacity style={style.customButton}  onPress={() => navigation.navigate('Welcome')}>

        <Text style={style.buttonText}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.custom}>
        <Text style={style.buttonTextSecond}>Skip</Text>
      </TouchableOpacity>
      </View>
    
    </View>
  );
}
const style = StyleSheet.create({
  basic:{
    fontSize:16,
    opacity:0.7,
    fontWeight:"300",
    textAlign:"center",
  },
  main:{
    fontSize:18,
    color:"#9A55C2",
    fontWeight:"bold",
    textAlign:"center",
  },
  container:{
    display:"flex",
    justifyContent:"center",
    alignItems: "center",
    margin:30,
    marginTop:"80%",
    height: screenWidth , // 80% of the screen width
   

  },
  imgContainer:{
    margin:30,

  },
  detailsContainer:{
    marginTop:30,
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems: "center",
    gap:10,
  

  },
  btnContaier:{
   

  },
  slider:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems: "center",
    gap:10,
  },
  customButton: {
    backgroundColor: '#841584',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    margin:20,
    width:370,
  },
  custom: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderWidth: 1,         
    borderColor: '#841584',  
    borderStyle: 'solid',    
    borderRadius: 5,
    margin:20,
    color: "#841584",
    width:370,
  },
 
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign:"center",
  },
  buttonTextSecond: {
    color: '#841584',
    fontSize: 16,
    textAlign:"center",
  },
  circle:{
    width:10,
    height:10,
    borderRadius:50,
    backgroundColor:"#ccc",
  }
})