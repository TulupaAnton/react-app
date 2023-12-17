import { Formik, Form, Field, ErrorMessage } from "formik";
import { USER_CONTACTS_VALIDATION_SCHEMA } from "../../utils/validationSchema";
import styles from "./ContactsForm.module.scss";
import classNames from "classnames";

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
      {(formikProps) => {
        const userNameClassNames = classNames(styles.input, {
          [styles.valid]:
            formikProps.touched.userName && !formikProps.errors.userName,
          [styles.invalid]:
            formikProps.touched.userName && formikProps.errors.userName,
        });
        const phoneNumberClassNames = classNames(styles.input, {
          [styles.valid]:
            formikProps.touched.phoneNumber && !formikProps.errors.phoneNumber,
          [styles.invalid]:
            formikProps.touched.phoneNumber && formikProps.errors.phoneNumber,
        });
        const emailClassName = classNames(styles.input, {
          [styles.valid]:
            formikProps.touched.email && !formikProps.errors.email,
          [styles.invalid]:
            formikProps.touched.email && formikProps.errors.email,
        });
        const birthdayClassName = classNames(styles.input, {
          [styles.valid]:
            formikProps.touched.birthday && !formikProps.errors.birthday,
          [styles.invalid]:
            formikProps.touched.birthday && formikProps.errors.birthday,
        });

        return (
          <Form className={styles.form}>
            <label>
              <span>Name:</span>
              <Field
                className={userNameClassNames}
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
                className={phoneNumberClassNames}
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
                className={emailClassName}
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
              <Field
                className={birthdayClassName}
                type="date"
                name="birthday"
              />
              <ErrorMessage
                name="birthday"
                className={styles.error}
                component="span"
              />
            </label>

            <button type="submit">Add</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ContactsForm;
