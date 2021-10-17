import React, { useState } from 'react';
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
import { register } from '../redux/actions/auth';
import Material from "react-native-vector-icons/MaterialCommunityIcons";

const Register = (props) => {
  const { navigation } = props;
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onBlur' });
  const dispatch = useDispatch();

  const onSubmit = handleSubmit((data) => {
    const { email, password } = data;
    dispatch(register(email, password, reset));
  });

  return (
    <SafeAreaView style={styles.containerWrapper}>
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Create new account</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.inputWrapper}>
            <View style={styles.textInput}>
              <Material
                style={{
                  marginRight: 5,
                }}
                name={'account'}
                size={25}
              />
              <Controller
                control={control}
                name="name"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your name here"
                    onBlur={onBlur}
                    value={value}
                    onChangeText={(value) => onChange(value)}
                  />
                )}
                rules={{ required: true }}
                defaultValue=""
              />
            </View>

            {errors?.name && (
              <Text style={styles.error}>First Name is required.</Text>
            )}
          </View>
          <View style={styles.inputWrapper}>
            <View style={styles.textInput}>
              <Material
                style={{
                  marginRight: 5,
                }}
                name={'phone'}
                size={25}
              />
              <Controller
                control={control}
                name="phone"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    onBlur={onBlur}
                    value={value}
                    onChangeText={(value) => onChange(value)}
                  />
                )}
                rules={{ required: true }}
              />
            </View>
            {errors?.phone && (
              <Text style={styles.error}>Phone is required.</Text>
            )}
          </View>
          <View style={styles.inputWrapper}>
            <View style={styles.textInput}>
              <Material
                style={{
                  marginRight: 5,
                }}
                name={'email'}
                size={25}
              />
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
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
              <Material
                style={{
                  marginRight: 5,
                }}
                name={'lock'}
                size={25}
              />
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    secureTextEntry
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
        </View>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={styles.signInButtonWrapper}
        >
          <View style={styles.signInButton}>
            <Text style={styles.signIn}>Sign Up</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.signInButtonWrapper}>
          <Text
            style={{
              marginTop: 20,
              fontSize: 15,
            }}
          >
            Already have an account?{" "}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text
                style={{
                  color: '#0274bc',
                }}
              >
                Log in
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
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
    flexDirection: 'row',
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    color: "#E4442A",
    fontWeight: 'bold',
  },
  form: {
    marginTop: 40,
  },
  input: {
    color: "#828282",
    fontSize: 15,
  },
  signInButtonWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInButton: {
    width: '40%',
    backgroundColor: '#FD8700',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    padding: 10,
  },
  textInput: {
    width: '100%',
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: '#000000',
  },
  signIn: {
    color: "#FFFFFF",
    fontSize: 17,
  },
  inputWrapper: {
    marginBottom: 15,
  },
  error: {
    color: '#CC3737',
  },
});

export default Register;
