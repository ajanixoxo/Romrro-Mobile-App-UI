import React from 'react'
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, Dimensions } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dp from '../assets/images/dp.png';
import DP from '../assets/images/dp1.png';
import Hand from '../assets/images/hand.png'
import Noti from '../assets/images/Notification.png'
import Card from '../assets/images/Card.png'
import Rocket from '../assets/images/rocket.png'
import Shop from '../assets/images/shop.png'
import Invest from '../assets/images/invest.png'
import Right from '../assets/images/right.png'
import Up from '../assets/images/up.png'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
function Footer(navigation:any) {
  return (
    <View style={style.container}>
  
    </View>
  )
}

export default Footer

const style = StyleSheet.create({
  basic:{
    fontSize:10,
    opacity:0.7,
    fontWeight:"300",
   
  },
  nav:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    width:"100%",
    height:30,

  },
  bottomNav:{

  },
  main:{
    fontSize:16,
    color:"black",
    fontWeight:"bold",
   
  },
  title:{
   fontSize:17,
   fontWeight:"bold",
  },
  container:{
    display:"flex",
    justifyContent:"flex-start",
    alignItems: "center",
    margin:20,
    marginTop:60,
    height: screenWidth , // 80% of the screen width
    gap:30,
   

  },
  dp:{
    width: 50,
    height: 50,
  },
  card:{
   
    
  },
  navLeft:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    gap:10,

  },
  navRight:{

  },
  navLeftDetails:{

  },
  noti:{
    width:35,
    height:35,
  },
  featured:{
    width:"100%",
    
  },
  
  featuredContainer:{
     display: "flex",
     justifyContent:"space-between",
     alignItems: "center",
     flexDirection:"row",
     gap:10,
     width:"100%",
     marginTop:10,
  },
  featuredBox:{
    width:"30%",
    padding:5,
    backgroundColor:"#F2E8F8",
    borderRadius:10,

  },
  fBDetails:{

  },
  fImgBox:{
  textAlign:"right",
  width:100,
  height:70,

  },
  fImg:{

  },
  DMain:{
   fontSize:10,
   color:"#9A55C2",
   fontWeight:"bold"
  },
  DP:{
    fontSize:8,
     fontWeight:"300"

  },
  transContainer:{
   width:"100%",
  },
  transNav:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"

  },
  transTitle:{
   fontSize:12,
   color:"#9A55C2",

  },
  transcations:{
    marginTop:10,

  },
  transBox:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor:"white",
    padding:10,
   elevation:2, 
    borderRadius:10,
    shadowOffset: { width: 100, height: 100 },
    shadowOpacity: 0.8,
    shadowColor: '#ccc',
    margin:5,
   

  },
  trans:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    gap:4,

  },
  transDirection:{
    backgroundColor:"#EFEBF1",
    padding:4,
    borderRadius: 5,

  },
  transDetails:{

  },
  tDT:{
    
    fontSize:10,
    fontWeight:"300",

  },
  tDR:{
    fontSize:12,

  },
  transAmount:{

  },
  transMain:{
    fontSize:12,
    color:"red",

  },
  transP:{
    fontSize:10,
    fontWeight:"300",
    textAlign:"right"

  }
})