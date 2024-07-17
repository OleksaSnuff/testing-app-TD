import { Button, TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import styles from "./LoginForm.module.css";

const userSchema = Yup.object().shape({
  login: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const fieldStyles = {
  "& fieldset": {
    color: "#ccc",
    borderColor: "#ccc",
    transition: "border-color 0.3s ease-in-out",
  },
  "& input": {
    color: "white",
  },
};

const LoginForm = () => {
  //   const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ login: "", password: "" }}
      onSubmit={(values) => {
        console.log(values);
        //       (values) => {
        //   dispatch(login(values));
      }}
      validationSchema={userSchema}
    >
      <Form className={styles.form}>
        <div className={styles.field}>
          <Field
            name="login"
            type="login"
            as={TextField}
            required
            id="outlined-required-email"
            label="Login"
            InputLabelProps={{
              style: { color: "#ccc" },
            }}
            sx={fieldStyles}
          />
          <ErrorMessage name="login" component="p" />
        </div>
        <div className={styles.field}>
          <Field
            name="password"
            type="password"
            as={TextField}
            required
            id="outlined-required-passw"
            label="Password"
            InputLabelProps={{
              style: { color: "#ccc" },
            }}
            sx={fieldStyles}
          />
          <ErrorMessage name="password" component="p" />
        </div>

        <Button
          variant="outlined"
          type="submit"
          sx={{ color: "white", width: "150px" }}
        >
          Login
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
