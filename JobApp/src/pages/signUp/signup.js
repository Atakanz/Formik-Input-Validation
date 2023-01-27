import React from 'react';
import {SafeAreaView, ToastAndroid} from 'react-native';
import styles from './signup.style';
import LoginForm from '../../components/LoginForm';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../../config';
import {Formik} from 'formik';
import {signUpSchema} from '../../schemas/sch';
const SignUp = ({navigation}) => {
  function showToast() {
    ToastAndroid.show('Registered successfully!', ToastAndroid.SHORT);
  }
  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          fullname: '',
        }}
        validationSchema={signUpSchema}
        onSubmit={formValues => {
          registerUser(formValues.email, formValues.password);
          showToast();
          navigation.navigate('Login');
        }}>
        {({handleSubmit, handleChange, values, errors, touched}) => (
          <LoginForm
            brandName={require('../../../assets/logo.png')}
            holder1="E-mail"
            holder2="Password"
            holder3="Confirm password"
            holder4="Full name"
            name1="Sign Up"
            name2="Sign In"
            value1={values.email}
            value2={values.password}
            value3={values.confirmPassword}
            value4={values.fullname}
            emailFormTask={handleChange('email')}
            passwordFormTask={handleChange('password')}
            repasswordFormTask={handleChange('confirmPassword')}
            userNameFormTask={handleChange('fullname')}
            task1={handleSubmit}
            task2={() => navigation.navigate('Login')}
            errors={errors}
            touched={touched}
          />
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default SignUp;
