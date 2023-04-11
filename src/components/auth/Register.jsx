import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';

import { Box, Button, Divider, ModalHeader } from '@chakra-ui/react';
import ModalComponent from '../modal/Modal';
import Error from './Error';
import './login.scss';

const initialValues = {};

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

const RegisterModal = () => {
  return (
    <ModalComponent>
      <ModalHeader>ÜYELİK BİLGİLERİ</ModalHeader>

      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnBlur={false}
      >
        {formik => {
          return (
            <Form>
              <div className="form-control">
                <h5>Müşteri Grubu</h5>
                <label htmlFor="musteri">Musteri</label>
                <Field type="radio" id="musteri" name="company" />

                <label htmlFor="kuramsal">Kuramsal</label>
                <Field type="radio" id="kuramsal" name="company" />
                <ErrorMessage name="email" component={Error} />
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

export default RegisterModal;
