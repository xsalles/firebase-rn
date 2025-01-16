import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView} from "react-native"
import React, { useState } from "react"
import { FIREBASE_AUTH } from "../../FirebaseConfig"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"


const Login = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [loading, setLoading] = useState(false)
   const auth = FIREBASE_AUTH

   const signIn = async () => {
    setLoading(true)
    try {
        const response = await signInWithEmailAndPassword(auth, email,password)
        alert(response)
    } catch (error) {
        alert("SignIn failed" + error)
     } finally {
        setLoading(false)
    }
   }

   const signUp = async () => {
    setLoading(true)
    try {
     const response = await createUserWithEmailAndPassword(auth, email, password)
     alert(response)   
    } catch (error) {
        alert("SignUp failed" + error)
    } finally {
        setLoading(false)
    }
   }

    return(
        <View style={styles.container}>
            <KeyboardAvoidingView behavior="padding" >
            <Text>Login</Text>
            <TextInput value={email} autoCapitalize="none" style={styles.input} placeholder="Email" onChangeText={(text) => setEmail(text)}/>
            <TextInput secureTextEntry={true} value={password} autoCapitalize="none" style={styles.input} placeholder="Password" onChangeText={(text) => setPassword(text)}/>
            {
                loading ? (
                    <ActivityIndicator size="large" color="#0000ff"/>   
                )
                :(
                    <>
                    <Button title="Login" onPress={signIn}/>
                    <Button title="SignUp" onPress={signUp}/>
                    </>

                )
            }
            </KeyboardAvoidingView>
        </View>
    )
}

export default Login


const styles = StyleSheet.create({
   container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center'
   },

   input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    borderColor: '#000'
   }
})