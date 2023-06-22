import * as yup from 'yup';

export const customerRequestValidationSchema = yup.object().shape({
  request_data: yup.string().required(),
  customer_id: yup.string().nullable(),
  company_id: yup.string().nullable(),
});
