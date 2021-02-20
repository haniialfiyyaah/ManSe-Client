import React, { useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import SubmitButton from "../components/SubmitButton";

function LoginScreen(props) {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("")

  return (
    <View style={styles.container}>
      <StatusBar
        hidden
        barStyle="light-content"
        backgroundColor="rgba(0,0,0,1)"
      />
      <ImageBackground
        source={require("../../assets/images/potrait2.jpg")}
        resizeMode="contain"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <View style={styles.group3}>
          <Text style={styles.login}>Login</Text>
          <TextInput
            placeholder=" Email"
            textBreakStrategy="simple"
            keyboardType="email-address"
            style={styles.email}
          ></TextInput>
          <TextInput
            placeholder=" Password"
            style={styles.password}
          ></TextInput>
          <SubmitButton
            style={styles.SubmitButton}
          ></SubmitButton>
          <TouchableOpacity
            // onPress={() => props.navigation.navigate("RegisterScreen")}
            style={styles.button}
          >
            <Text>Didn't have Account? Click here</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 497,
    height: 876,
    marginTop: -82,
    marginLeft: -50
  },
  image_imageStyle: {
    opacity: 0.57
  },
  group3: {
    width: 268,
    height: 271,
    marginTop: 307,
    marginLeft: 96
  },
  login: {
    color: "#121212",
    fontSize: 40,
    marginLeft: 84
  },
  email: {
    color: "#121212",
    height: 35,
    backgroundColor: "#fff",
    width: 268,
    borderRadius: 10,
    marginTop: 29
  },
  password: {
    color: "#121212",
    height: 36,
    width: 268,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    marginTop: 22
  },
  SubmitButton: {
    width: 268,
    height: 44,
    marginTop: 22
  },
  button: {
    alignItems: "center",
    backgroundColor: 'rgba(52, 52, 52, 0)',
    padding: 10
  }
});

export default LoginScreen;
