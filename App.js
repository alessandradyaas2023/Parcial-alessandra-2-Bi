import { useState } from 'react'
import { SafeAreaView, StyleSheet, View, Image, Button, Pressable,TextInput,Text} from 'react-native'

export default function App() {


 


  const [cpf, setCpf] = useState('')
  const [cpfField, setCpfField] = useState('')

  const handleSendCpf = () => {
    setCpf(cpfField)
  }

  const handleClear = () => {
    setCpf('')
    setCpfField('')
  }
  

  return(
  <SafeAreaView>
   
     
    {cpf == '' &&
        <>
    
    <View style={styles.fundo}>

      <View style={styles.areaImagem}>
        <Image source={require('./assets/chkaHGR.png')}style={styles.userLogo}  />
      </View>

      <View style={styles.areaInput}>
        <TextInput
          placeholder='CPF'
          placeholderTextColor='#999'
          style={styles.input}
            value={cpfField}
            onChangeText={text => setCpfField(text)}
           
        />


    


      </View>
    
 
      <View style={styles.areaBotao}>
        <Button title='Logar' style={styles.botao} color='black' onPress={handleSendCpf} />
      </View>
    </View>
        </>
      }

        {cpf == '000.000.000-00' &&
        <>
      <View style={styles.areaImagem}>
        <Image source={require('./assets/M9yjujh.png')}style={styles.userLogo}  />
      </View>
        <View style={styles.text}>
          <Text>Você está logado com o CPF: {cpf}?</Text>
        </View>  
        <View style={styles.areaBotao2}>
          <Button title='CPF Não é 000.000.000-00' style={styles.botao} color='black'  onPress={handleClear} />
        </View>
         
        </>
      }
    
         <Text></Text>
      
 
  </SafeAreaView>
  )
 }

const styles = StyleSheet.create({
  fundo: {
    margin:'auto',
    height: '600px',
},

  input:{
    padding:8,
    marginTop:15,
    backgroundColor: '#eee',
    width: 280,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth:4,
    borderBottomWidth: 3,
},

  userLogo:{
    width: 70,
    height: 70,
    marginTop: 209  
},

  areaImagem: {
    margin: 10,
    display: 'flex',
    alignItems: 'center',
},

  areaBotao: {
    width:100,
    marginTop:15,
    margin:'auto'
},
  areaBotao2: {
    width:240,
    marginTop:15,
    margin:'auto',

},
  text: {
    textAlign:'left',
    padding: 5,
    margin:'auto'
  
  } 
  
 
    

})