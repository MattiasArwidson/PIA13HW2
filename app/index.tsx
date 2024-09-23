import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {

  const [counter, setCounter] = useState(0);
  const [textInput, setTextInput] = useState("");
  const [error, setError] = useState("No error... yet...");
  
  function add(){
    setCounter(counter + 1);
  }
  function subtract(){
    setCounter(counter - 1);
  }
  function reset(){
    setCounter(0)
  }

  function useTextInput(){
    const nanNumb = Number(textInput);

    if (isNaN(nanNumb)){
      setError("Numbers only");
    }else{
      setCounter(counter + Number(textInput))
      setError("");
    }

  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      { error != "" &&
      <Text style={[styles.defaultText]}>{ error } </Text>
      }
      <Text style={[styles.defaultText]}>{ counter } </Text>
      
<TextInput
onChangeText={setTextInput}
value={textInput}
style={{borderWidth:1, width:100}}
/>

      <Button onPress={add} 

      title="Add 1" />
      
      <Button onPress={subtract} 

      title="Subtract 1" />
      
      <Button onPress={reset} 
      title="Reset" />

      <Button onPress={useTextInput} 
      title="Math it up!" />

    </View>
  );
}
const styles = StyleSheet.create({
defaultButton:{
  
}, 
defaultText:{
  fontSize:50,
  borderWidth: 0,
}, 

}); 
