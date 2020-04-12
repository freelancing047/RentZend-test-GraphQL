import React from 'react';
import Button from '@material-ui/core/Button';
import NumberFormat from 'react-number-format';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Formik, Field, Form } from 'formik';
import { TextField, SimpleFileUpload } from 'formik-material-ui';
import { GET_USERS } from './userList';
import * as Yup from 'yup';

const CREATE_USER = gql`
  mutation createUser(
    $name: String!
    $email: String!
    $phone: String!
    $address: String!
    $zipCode: String!
    $file_upload: Upload
    
  ) {
    createUser(
      name: $name
      email: $email
      phone: $phone
      address: $address
      zipCode: $zipCode,
      file_upload: $file_upload
    ) {
        id
        name
        email
        phone
        address
        zipCode,
        file_upload
    }
  }
`;

const CustomPhoneField = (props) => <TextField
    {...props}
    InputProps={{
        inputComponent: FormattedPhone,
    }} />;

const FormattedPhone = ({ inputRef, ...otherProps }) => <NumberFormat {...otherProps} getInputRef={inputRef} format='(###) ###-####' mask='_' />;



export const RegistrationForm = () => {
    const [createUser] = useMutation(CREATE_USER, {
        refetchQueries: [{ query: GET_USERS }]
    });

    return (
            <div id='registrationForm'>
                <h3>Registration page</h3>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        phone: '',
                        address: '',
                        zipCode: ''

                    }}
                    validationSchema={Yup.object().shape({
                        name: Yup.string().required('First Name is required'),
                        email: Yup.string()
                            .email('Email is invalid')
                            .required('Email is required'),
                        phone: Yup.string()
                            .required('Phone is required')
                            .min(12, 'Incorrect Phone Number'),
                        address: Yup.string()
                            .required('Address is required'),
                        zipCode: Yup.string()
                            .required('Zip Code is required')

                    })}
                    onSubmit={(fields, { resetForm }) => {
                        createUser({ variables: { ...fields } });
                        resetForm();
                    }}

                    render={({ errors, status, touched }) => (
                        <Form>
                            <Field
                                label='Name'
                                name='name'
                                type='text'
                                component={TextField}
                                margin='none'
                                variant='outlined'
                                fullWidth
                            />
                            <Field
                                label='Email'
                                name='email'
                                type='text'
                                component={TextField}
                                margin='normal'
                                variant='outlined'
                                fullWidth
                            />
                            <Field
                                label='Phone'
                                name='phone'
                                type='text'
                                component={CustomPhoneField}
                                margin='normal'
                                variant='outlined'
                                fullWidth
                            />
                            <Field
                                label='Address'
                                name='address'
                                type='text'
                                component={TextField}
                                margin='normal'
                                variant='outlined'
                                fullWidth
                            />
                            <Field
                                label='Zip Code'
                                name='zipCode'
                                type='text'
                                component={TextField}
                                margin='normal'
                                variant='outlined'
                                fullWidth
                            />
                            <Field
                                className='file-upload'
                                name='file_upload'
                                type='file'
                                component={SimpleFileUpload}
                                margin='normal'
                                variant='outlined'
                                fullWidth
                            />
                            <Field
                                name='files'
                                type='hidden'
                                margin='normal'
                                variant='outlined'
                                fullWidth
                            />

                            <Button style={{marginTop: '10px'}} type='submit' variant='outlined' color='primary'>
                                Register
                </Button>{' '}
                            <Button style={{marginTop: '10px'}} type='reset' variant='outlined' color='secondary'>
                                Reset
                </Button>
                        </Form>
                    )}
                ></Formik>
            </div>
    );
}