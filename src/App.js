import './App.css';
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: ''
    },
    initialTouched: {
      emailField: false,
      pswField: false
    },
    onSubmit: values => {
      console.log('form:', values);
    },
    validate: values => {
      let errors = {};
      if (!values.pswField) errors.pswField = 'Field required';
      if (!values.emailField) {
        errors.emailField = 'Field required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
        errors.emailField = 'Username should be an email address.';
      }
      return errors;
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Username</div>
        <input name="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailField} onBlur={formik.handleBlur}/>
        {formik.errors.emailField && formik.touched.emailField ? <div name="emailFieldError" className="formikError">{formik.errors.emailField}</div> : null}
        <div>Password</div>
        <input name="pswField" type="text" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur}/>
        {formik.errors.pswField && formik.touched.pswField ? <div name="pswError" className="formikError">{formik.errors.pswField}</div> : null}
        <button name="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
