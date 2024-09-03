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
import Home from '../assets/images/Home.png'
import Rnav from '../assets/images/rnav.png'
import Save from '../assets/images/save.png'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
function Screen3(navigation:any) {
  return (
    <View >
    <View style={style.container}>
      <View style={style.nav}>
         <View style={style.navLeft} >
       <Image style={style.dp} source={DP} />
         <View style={style.navLeftDetails} >
          <Text style={style.basic}>Hey There</Text>
          <Text style={style.main}>Adeoluwa Ayomide</Text>
         </View>
         </View>
         <View style={style.navRight} >
           <Image source={Noti} style={style.noti} />
         </View>
      </View>
   <View>
    <Image source={Card} style={style.card} />
   </View>
   <View style={style.featured}>
    <Text style={style.title} >
      Features
    </Text>
    <View style={style.featuredContainer} >
      <View style={style.featuredBox}>
      <Text style={style.fImgBox}>
      <Image source={Shop}  style={style.fImg} />
      </Text>  
        <View style={style.fBDetails} >
          <Text style={style.DMain} >Piggybank</Text>
          <Text style={style.DP}>Easily save for your child</Text>
        </View>
      </View>
      <View style={style.featuredBox}>
      <Text style={style.fImgBox}>
      <Image source={Rocket}  style={style.fImg} />
      </Text>  
        <View style={style.fBDetails} >
          <Text style={style.DMain} >Analysis</Text>
          <Text style={style.DP}>Check spending analsis</Text>
        </View>
      </View>
      <View style={style.featuredBox}>
      <Text style={style.fImgBox}>
      <Image source={Invest} style={style.fImg} />
      </Text>  
        <View style={style.fBDetails} >
          <Text style={style.DMain} >Investment</Text>
          <Text style={style.DP}>Build your child´s wealth </Text>
        </View>
      </View>
    </View>
   </View>
   <View style={style.transContainer}>
    <View style={style.transNav}>
      <Text style={style.title}>Recent Transaction</Text>
      <Text style={style.transTitle}>View More</Text>
    </View>
    <View style={style.transcations}>
      <View style={style.transBox}>
        <View style={style.trans}>
          <View style={style.transDirection}>
           <Image source={Up} />
          </View>
          <View style={style.transDetails}>
            <Text style={style.tDT}>Jul 10, 2024 18:009PM</Text>
            <Text style={style.tDR}>Airtime//2349133698067//MTN</Text>
          </View>
        </View>
        <View style={style.transAmount}>
        <Text style={style.transMain}>-₦1000.00 </Text>
        <Text style={style.transP}>********.**</Text>

        </View>
      </View>
      <View style={style.transBox}>
        <View style={style.trans}>
          <View style={style.transDirection}>
           <Image source={Right} />
          </View>
          <View style={style.transDetails}>
            <Text style={style.tDT}>Jul 10, 2024 18:009PM</Text>
            <Text style={style.tDR}>NIP/GTB/ANASTASIA OTU/via G...</Text>
          </View>
        </View>
        <View style={style.transAmount}>
        <Text style={style.transMain}>+₦7000.00 </Text>
        <Text style={style.transP}>********.**</Text>

        </View>
      </View>

    </View>

   </View>
  
    </View>
    <View style={style.footer}>
<View style={style.footerContent}>
  <Image source={Home} />
  <Text style={style.fActive}>Home</Text>
</View>
<View style={style.footerContent}>
  <Image source={Save} />
  <Text style={style.fText}>Save</Text>
</View>
<View style={style.footerContent}>
  <Image source={Rnav} />
  <Text style={style.fText}>Invest</Text>
</View>
<View style={style.footerContent}>
  <Image source={Dp} />
  <Text style={style.fText}>Profile</Text>
</View>
   </View>
    </View>
  )
}

export default Screen3

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

  }, 
  footer:{
    width:"100%",
    padding:20,
    margin:0,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    elevation: 10, // This may need to be adjusted for desired effect
    position: 'absolute',
    bottom: -398,
    backgroundColor:"white",
  

  },
  footerContent:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"

  },
  fText:{
    fontSize:12,
    fontWeight:"300"

  },
  fActive:{
    fontSize:12,
    fontWeight:"500",
    color:"#9A55C2"

  }
})