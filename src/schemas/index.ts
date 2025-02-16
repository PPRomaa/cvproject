import * as yup from 'yup';

const emailRules = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;

export const basicSchema = yup.object().shape({
    name: yup.string().min(2).max(30).required('Required'),
    email: yup
        .string()
        .email('Please enter a valid email')
        .matches(emailRules, { message: 'Please enter a valid email' })
        .required('Required'),
    message: yup.string().required('Required'),
});
