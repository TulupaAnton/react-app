import { Formik, Form, Field, ErrorMessage } from "formik";
import { USER_CONTACTS_VALIDATION_SCHEMA } from "../../utils/validationSchema";
import styles from "./ContactsForm.module.scss";

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
      <Form className={styles.form}>
        <label>
          <span>Name:</span>
          <Field
            className={styles.input}
            type="text"
            name="userName"
            placeholder="Name"
            autoFocus
          />{" "}
          <ErrorMessage
            name="userName"
            className={styles.error}
            component="span"
          />
        </label>

        <label>
          <span>Phone number:</span>
          <Field
            className={styles.input}
            type="text"
            name="phoneNumber"
            placeholder="+380993523868"
          />{" "}
          <ErrorMessage
            name="phoneNumber"
            className={styles.error}
            component="span"
          />
        </label>

        <label>
          <span>Email:</span>
          <Field
            className={styles.input}
            type="email"
            name="email"
            placeholder="your@gmail.com"
          />
          <ErrorMessage
            name="email"
            className={styles.error}
            component="span"
          />
        </label>

        <label>
          <span>Birthday:</span>
          <Field className={styles.input} type="date" name="birthday" />
          <ErrorMessage
            name="birthday"
            className={styles.error}
            component="span"
          />
        </label>

        <button type="submit">Add</button>
      </Form>
    </Formik>
  );
}

export default ContactsForm;
