import React from 'react';
import {SafeAreaView, View, Image, Text} from 'react-native';
import TextInputs from '../LoginInputs/inputs';
import Buttons from '../LoginButtons/buttons';
import styles from './loginForm.style';

const LoginForm = props => {
  return (
    <SafeAreaView style={styles.enabledDirection}>
      <View>
        <View style={styles.logoView}>
          {props.brandName && (
            <Image style={styles.brandName} source={props.brandName} />
          )}
        </View>
        <View style={styles.nameInput}>
          <TextInputs
            labelName="E-mail"
            holder={props.holder1}
            value={props.value1}
            task={props.emailFormTask}
            security={false}
          />
          {props.touched && props.errors.email && (
            <Text style={styles.errorText}>{props.errors.email}</Text>
          )}

          <TextInputs
            labelName="Password"
            value={props.value2}
            holder={props.holder2}
            task={props.passwordFormTask}
            security={true}
          />
          {props.touched && props.errors.password && (
            <Text style={styles.errorText}>{props.errors.password}</Text>
          )}

          {props.holder3 && (
            <TextInputs
              labelName="Confirm password"
              value={props.value3}
              holder={props.holder3}
              task={props.repasswordFormTask}
              security={true}
            />
            // passwordagain is shown only signup page
          )}
          {props.touched && props.errors.confirmPassword && (
            <Text style={styles.errorText}>{props.errors.confirmPassword}</Text>
          )}
          {props.holder4 && (
            <TextInputs
              labelName="Full Name"
              value={props.value4}
              holder={props.holder4}
              task={props.userNameFormTask}
              security={false}
            />
          )}
        </View>
      </View>
      <View
        style={
          props.name2 === 'Sign Up' ? styles.buttonColumn : styles.buttonRow
        }>
        {props.name1 && <Buttons name={props.name1} task={props.task1} />}
        <View style={styles.centerText}>
          {props.name2 === 'Sign Up' ? (
            <Text style={styles.isAccountText}>Don't you have an account?</Text>
          ) : null}
        </View>
        {props.name2 && <Buttons name={props.name2} task={props.task2} />}
        {/* signup page has only one button to navigate re-signın page. */}
        <View style={styles.centerText}>
          {props.slogan && (
            <Text style={styles.sloganText}>{props.slogan}</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginForm;
