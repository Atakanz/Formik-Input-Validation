import * as yup from 'yup';

const passwordRules =
  '^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$';

export const signUpSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Requried'),
  password: yup
    .string()
    .min(8)
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Must contain one uppercase, one lowercase, one number and one special case character',
    )
    .required('Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Required'),
});
