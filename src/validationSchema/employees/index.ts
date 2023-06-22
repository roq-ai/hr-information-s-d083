import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  employment_data: yup.string(),
  vacation_days: yup.number().integer(),
  payroll_data: yup.string(),
  user_id: yup.string().nullable(),
});
