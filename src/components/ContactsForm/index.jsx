import { Formik, Form, Field, ErrorMessage } from "formik";
import { USER_CONTACTS_VALIDATION_SCHEMA } from "../../utils/validationSchema";

function ContactsForm() {
  const initialValue = {
    userName: "",
    phoneNumber: "",
    email: "",
    birthday: "",
  };
  const handleSubmit = (values, formikBag) => {
    console.log("values=>>", values);
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={USER_CONTACTS_VALIDATION_SCHEMA}
    >
      <Form>
        <label>
          <span>Name:</span>
          <Field type="text" name="userName" placeholder="Name" autoFocus />
        </label>
        <ErrorMessage name="userName" />

        <label>
          <span>Phone number:</span>
          <Field type="text" name="phoneNumber" placeholder="+380993523868" />
        </label>
        <ErrorMessage name="phoneNumber" />

        <label>
          <span>Email:</span>
          <Field type="email" name="email" placeholder="your@gmail.com" />
        </label>
        <ErrorMessage name="email" />
        <label>
          <span>Birthday:</span>
          <Field type="date" name="birthday" />
        </label>
        <ErrorMessage name="birthday" />
        <button type="submit">Add</button>
      </Form>
    </Formik>
  );
}

export default ContactsForm;
