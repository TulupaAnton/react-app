import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
const USER_VALIDATION_SCHEMA = yup.object({
  userName: yup
    .string()
    .min(2)
    .max(64)
    .matches(/^[A-Z][a-z]*$/)
    .required(),
});

function UserinfoForm() {
  const initialValues = { userName: "" };
  const handleSubmit = (values, formikbg) => {
    console.log("values");
    formikbg.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_VALIDATION_SCHEMA}
    >
      <Form>
        <label>
          <span>Name:</span>
          <Field type="text" name="userName" />
        </label>
        <ErrorMessage name="userName" />
        <button type="submit">Send</button>
        <button type="reset">Reset</button>
      </Form>
    </Formik>
  );
}

export default UserinfoForm;
