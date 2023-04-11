import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';

import { Box, Button, Divider, ModalHeader } from '@chakra-ui/react';
import { useState } from 'react';
import ModalComponent from '../modal/Modal';
import Error from './Error';
import './login.scss';

const initialValues = {
  email: '',
  password: '',
};

const onSubmit = (values, onSubmitProps) => {
  console.log(onSubmitProps);
  console.log(values);
};

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Invalid mail format')
    .required('U must have email'),
  password: yup
    .string()
    .uppercase('at least one big letter and num element')
    .min(3, 'Too Short')
    .max(12, 'You reached maximum')
    .required('Invalid Mail Form'),
});

const LoginModal = ({ isOpen, onClose }) => {
  const [lad, setLad] = useState(false);

  return (
    <ModalComponent>
      <ModalHeader>KAYITLI MÜŞTERİYİM</ModalHeader>

      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnBlur={false}
      >
        {formik => {
          // console.log(formik.isValid, formik.isSubmitting);
          return (
            <Form>
              <div className="form-control">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                />
                <ErrorMessage name="email" component={Error} />
              </div>
              <div className="form-control">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                />
                <ErrorMessage name="password" component={Error} />
              </div>

              <Divider />
              <br />

              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
                py={1}
                mb={2}
              >
                <Button
                  isLoading={formik.isSubmitting && formik.isValid}
                  loadingText="Submitting"
                  style={{
                    background: 'green',
                    color: 'white',
                  }}
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Submit
                </Button>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </ModalComponent>
  );
};

export default LoginModal;
