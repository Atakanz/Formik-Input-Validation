import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './login.style';
import LoginForm from '../../components/LoginForm';
import {Formik} from 'formik';
const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={formValues => console.log(formValues)}>
        {({handleSubmit, handleChange, values}) => (
          <LoginForm
            brandName={require('../../../assets/logo.png')}
            holder1="E-mail"
            holder2="Password"
            name1="Sign In"
            name2="Sign Up"
            value1={values.email}
            value2={values.password}
            emailFormTask={handleChange('email')}
            passwordFormTask={handleChange('password')}
            task1={handleSubmit}
            task2={() => navigation.navigate('SignUp')}
          />
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
