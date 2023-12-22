import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { Text, TextInput } from 'react-native-paper'
import styles from "./styles";

import Logo from '../login/logo'


import { emailValidator } from '../../helpers/emailValidator'
import { passwordValidator } from '../../helpers/passwordValidator'
import { nameValidator } from '../../helpers/nameValidator'

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
   // if (emailError || passwordError || nameError) {
   //   setName({ ...name, error: nameError })
   //   setEmail({ ...email, error: emailError })
   //   setPassword({ ...password, error: passwordError })
   //   return
   // }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    })
  }

  return (
    <View style={styles.container}>
      <Logo style={styles.logo}/>
      <View style={styles.emailContainer} >
        <TextInput
          style={styles.email}
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          icon={{
            name: "envelope-envelope",
            size: 20,
            color: "blue",
          }}
        />
      </View>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.password}
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
      </View>
      <View style={styles.repasswordContainer}>
        <TextInput
          style={styles.repassword}
          label="Repeat Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer} >
        <Button style={styles.button} mode="contained" onPress={onSignUpPressed} title='SIGN UP'></Button>
      </View>
      <View style={styles.horizontalLine}></View>
      <View style={styles.buttonFacebookContainer} >
        <Button style={styles.buttonFb} mode="contained"  title="Continue with Facebook" 
          icon={{
            name: "facebook",
            size: 20,
            color: "blue",
          }}
        >
        </Button>
      </View>
      <View style={styles.buttonGoogleContainer} >
        <Button style={styles.buttonGg} mode="contained"  title="Continue with Google"
            icon={{
              name: "google",
              size: 20,
              color: "blue",
            }}
        >
        </Button>
      </View>
      <View style={styles.row}>
        <Text style={{ color: '#E0E0E0', marginRight:10 }}> Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

