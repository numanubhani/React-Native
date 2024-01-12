import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, TextInput } from 'react-native'
import exStyles from './style'





function App() {
  //  const [name, setName] = useState("Numan")
  //  let data = "Fahad"


  // function testName() {
  //   setName("Subhani")
  //   data = "peter"
  // }
  // const[name, setname] = useState("Ahsan")

  const [name, setName] = useState("")
  const [email, setemail] = useState("")
  const [number, setnumber] = useState("")
  const [password, setpassword] = useState("")
  const [display, setdisplay] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(true);

const resetformdata =()=>{
setdisplay (false);
setemail("");
setName("");
setnumber("");
setpassword("");
  }
  


  return (
    <View>
      <Text style={{ fontSize: 30, color: 'black' }}>Fill Out These Details</Text>

      <TextInput style={styles.textinput}
        placeholder='Enter Your Name'
        onChangeText={(Text) => setName(Text)}
        value={name}
      />

      <TextInput style={styles.textinput}
        placeholder='Enter Your Email'
        onChangeText={(text) => { setemail(text) }}
        value={email}
      />

      <TextInput style={styles.textinput}
        placeholder='Enter Your Number'
        onChangeText={(Text) => { setnumber(Text) }}
        value={number}
      />

      <TextInput style={styles.textinput}
        placeholder='Enter Password'
        secureTextEntry={passwordVisible}
        onChangeText={(Text) => { setpassword(Text) }}
        value={password}
      />
<View style={{marginBottom:10}}>
<Button
        title={passwordVisible ? 'Show Pass' : 'Hide pass'}
        color={'black'}
        onPress={() => setPasswordVisible(!passwordVisible)}
        
      />
</View>
      <View style={{ marginBottom: 10 }}><Button title='Show Details' color={'green'} onPress={() => setdisplay(true)} />
      </View>
      <Button title='Clear Details' onPress={resetformdata}/>


      <View>{
        display ? (
          <View>
            <Text style={{ fontSize: 20 }}> User Name is :{name}</Text>
            <Text style={{ fontSize: 20 }}> User Mail is :{email}</Text>
            <Text style={{ fontSize: 20 }}> User Password is :{password}</Text>
          </View>) : null}
      </View>


    </View>
  );

}




const styles = StyleSheet.create({
  textinput: {
    fontSize: 18,
    color: 'black',
    borderColor: 'black',
    borderWidth: 2,
    margin: 10
  }

})



export default App;
