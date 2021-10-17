import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/auth';

const Login = (props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onBlur' });
  const dispatch = useDispatch();
  const { navigation } = props;

  const onSubmit = handleSubmit((data) => {
    const { email, password } = data;
    dispatch(login(email, password, reset));
  });

  return (
    <SafeAreaView style={styles.containerWrapper}>
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Log in</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.inputWrapper}>
            <View style={styles.textInput}>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={{
                      ...styles.input,
                      marginBottom: errors?.email ? 10 : 20,
                    }}
                    placeholder="Email"
                    onBlur={onBlur}
                    value={value}
                    onChangeText={(value) => onChange(value)}
                  />
                )}
                rules={{ required: true }}
              />
            </View>
            {errors?.email && (
              <Text style={styles.error}>Email is required.</Text>
            )}
          </View>
          <View style={styles.inputWrapper}>
            <View style={styles.textInput}>
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    secureTextEntry
                    style={{
                      ...styles.input,
                      marginBottom: errors?.password ? 10 : 20,
                    }}
                    placeholder="Password"
                    onBlur={onBlur}
                    value={value}
                    onChangeText={(value) => onChange(value)}
                  />
                )}
                rules={{ required: true }}
              />
            </View>
            {errors?.password && (
              <Text style={styles.error}>Password is required.</Text>
            )}
          </View>
          <Text
            style={{
              marginTop: 10,
              textAlign: 'right',
              fontWeight: 'bold',
              fontSize: 15,
              color: '#0274BC',
            }}
          >
            Forget?
          </Text>
        </View>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={styles.signInButtonWrapper}
        >
          <View style={styles.signInButton}>
            <Text style={styles.signIn}>Sign In</Text>
          </View>
          <Text
            style={{
              marginTop: 20,
              fontSize: 15,
            }}
          >
            Don’t have an account?{' '}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Text
                style={{
                  color: "#0274bc",
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
  },
  container: {
    paddingTop: 80,
    paddingLeft: 30,
    paddingRight: 30,
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  form: {
    marginTop: 40,
  },
  input: {
    marginBottom: 50,
    fontSize: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: "#000000",
  },
  signInButtonWrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  signInButton: {
    width: "40%",
    backgroundColor: "#FD8700",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 10,
    padding: 10,
  },
  signIn: {
    color: '#FFFFFF',
    fontSize: 17,
  },
  error: {
    color: '#CC3737',
  },
});

export default Login;
