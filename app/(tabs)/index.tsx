import { useRouter } from "expo-router";
import { Image, StyleSheet, Platform, LogBox,  } from 'react-native';
import { View, Text, TouchableOpacity, Alert, ImageBackground } from 'react-native';

function Head() { /**
 Tem a imagem junto com a
  */ 
  return (
    <View style={[styles.text, { flex: 1 }]}>
      <Image style={[styles.img,{}]} source={require('./logo.png')}/>
    </View>
  );
}
function Footer() {
   /**
  Tem a escrita da inttodução do app juntamente com o botao*/
  const router = useRouter(); // Inicializa o roteador
  return ( 
   
  <View style={styles.box}>
    <View style={styles.responsivo}>
      <Text style={styles.text}>
        Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Sit deserunt ratione 
        eveniet vel officiis repudiandae? 
      </Text>
    </View>
     
    <View >
    
      <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/login')}>
         <Text style={styles.butext}>Acessar</Text>
      </TouchableOpacity>
    </View>
    </View>
    
  );
}

export default function HomeScreen() {

  return (
   
  
    <View style={styles.container}>
      <ImageBackground
    source={require('./fundo.jpeg')} 
   // Caminho da imagem na pasta do projeto
   style={styles.container}>
    <Head/>
    <Footer/>
    

    </ImageBackground>
    </View>
 
  );
}

const styles = StyleSheet.create({
  container: { // Estilos para a View principal
   width:"100%",
   height:"100%",
    // Define a cor de fundo como um tom claro
    justifyContent: "center", // Centraliza os elementos no eixo vertical
    alignItems: "center", // Centraliza os elementos no eixo horizontal
  },
  box: { // Estilização para uma caixa dentro da tela na descrição do app
    
    justifyContent: "center", // Centraliza os elementos no eixo vertical
    alignItems: 'center', // Centraliza os elementos no eixo horizontal
    flex: 1, // Faz com que a caixa tente ocupar todo o espaço disponível
  },
  text: { // orientação da view da imagem
    justifyContent: "center", // Centraliza o texto no eixo vertical (não tem efeito direto no Text)
    alignItems: "center", // Centraliza o texto no eixo horizontal (não tem efeito direto no Text)
    flexWrap: "wrap", // Permite que o texto quebre para a linha de baixo se necessário
    color: "#e9f7ff" // Define a cor do texto 
  },
  button: { // Estilização do botão
    backgroundColor: "#379EFF", // Define a cor de fundo do botão como azul-claro
    width: 300, // Define a largura do botão
    padding: 20, // Adiciona preenchimento interno para aumentar o tamanho do botão
    borderRadius: 10, // Arredonda as bordas do botão
  },
  img: { // Estilização da imagem
    alignSelf: "center", // Centraliza a imagem dentro do seu contêiner
    position: "absolute", // Define a posição absoluta na tela
    bottom: 0, // Posiciona a imagem no fundo da tela
    justifyContent: "center", // Centraliza a imagem verticalmente (não tem efeito direto em imagens)
    width: "50%", // Faz a imagem ocupar toda a largura da tela
    height: "50%", // Define a altura da imagem
    objectFit: "contain", // Garante que a imagem seja totalmente visível sem cortar partes
    alignItems: "center", // (Não tem efeito em imagens, só funciona em elementos flexíveis)
    paddingBottom: "75%",
  },
  responsivo: { // caixa que delimita o tamaho da descrição do app
    width: 250, // Define uma largura fixa menor
    padding: 20 // Adiciona preenchimento interno para espaçamento
  },
  butext: { // Estilização do texto dentro do botão
    textAlign: "center", // Centraliza o texto horizontalmente
    fontSize: 25, // Define um tamanho de fonte maior
    color:"#e9f7ff"

  }
});



