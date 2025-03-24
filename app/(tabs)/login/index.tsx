import { useRouter } from "expo-router";
import { Image, StyleSheet, Platform, LogBox,  } from 'react-native';
import { View, Text,TextInput, TouchableOpacity, Alert } from 'react-native';



export default function login() {
 return (
 
  <View style={styles.container}>
<Text style={styles.titulo}>Criando conta</Text>
   <Image style={[styles.img,{}]} source={require('./logo.png')}></Image>
   <View style={[styles.container,{alignItems:"center"}]}>
  <Text>Nome de Usuario: </Text>
  <TextInput style={styles.tinput}/>
   </View></View>
  );
}
const styles = StyleSheet.create({
 container:{
  backgroundColor:"#f9f7f0",
  flex:1

 },
 titulo:{
  fontSize:20,
  color:"black",
   top:"7%",
   left:"11%"
    
 },
 img:{
  width:"15%",
  height:"12%",
  marginLeft:"50%",
  objectFit: "contain",
    
 },
 tinput:{
  width:300,
  height:50,
  backgroundColor:"#e7e7e7",
  borderColor:"#627dac",
  borderRadius:30,
  borderWidth:2
 }
 


})