import { Formik } from "formik";

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
  return <Formik initialValues={initialValue} onSubmit={handleSubmit}></Formik>;
}

export default ContactsForm;
