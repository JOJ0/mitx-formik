import './App.css';
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    initialTouched: {
      email: false,
      password: false
    },
    onSubmit: values => {
      console.log('form:', values);
    },
    validate: values => {
      let errors = {};
      if (!values.password) errors.password = 'Field required';
      if (!values.email) {
        errors.email = 'Field required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Username should be an email address.';
      }
      return errors;
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Username</div>
        <input name="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailField} onBlur={formik.handleBlur}/>
        {formik.errors.email && formik.touched.email ? <div name="emailError" className="formikError">{formik.errors.email}</div> : null}
        <div>Password</div>
        <input name="pswField" type="text" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur}/>
        {formik.errors.password && formik.touched.password ? <div name="pswError" className="formikError">{formik.errors.password}</div> : null}
        <button name="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
