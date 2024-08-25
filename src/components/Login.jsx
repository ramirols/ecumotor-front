import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Login() {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('El nombre de usuario es obligatorio'),
      password: Yup.string()
        .required('La contraseña es obligatoria'),
    }),
    onSubmit: values => {
      // Lógica de autenticación
      console.log(values);
    },
  });

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <input 
          type="text" 
          name="username" 
          placeholder="Usuario" 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur} 
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username ? (
          <div className="error">{formik.errors.username}</div>
        ) : null}

        <input 
          type="password" 
          name="password" 
          placeholder="Contraseña" 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur} 
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="error">{formik.errors.password}</div>
        ) : null}

        <button type="submit">Acceder</button>
        <p><a href="/forgot-password">¿Olvidaste tu contraseña?</a></p>
      </form>
    </div>
  );
}

export default Login;
