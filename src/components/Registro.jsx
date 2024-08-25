import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Register() {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('El nombre de usuario es obligatorio'),
      email: Yup.string()
        .email('El email no es válido')
        .required('El correo electrónico es obligatorio'),
      password: Yup.string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .required('La contraseña es obligatoria'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
        .required('La confirmación de contraseña es obligatoria'),
    }),
    onSubmit: values => {
      // Lógica de registro
      console.log(values);
    },
  });

  return (
    <div className="form-container">
      <h2>Registro</h2>
      <form onSubmit={formik.handleSubmit}>
        <input 
          type="text" 
          name="username" 
          placeholder="Nombre de usuario" 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur} 
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username ? (
          <div className="error">{formik.errors.username}</div>
        ) : null}

        <input 
          type="email" 
          name="email" 
          placeholder="Correo electrónico" 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur} 
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}

        <input 
          type={formik.showPassword ? "text" : "password"} 
          name="password" 
          placeholder="Contraseña" 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur} 
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="error">{formik.errors.password}</div>
        ) : null}

        <input 
          type={formik.showPassword ? "text" : "password"} 
          name="confirmPassword" 
          placeholder="Confirmar contraseña" 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur} 
          value={formik.values.confirmPassword}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div className="error">{formik.errors.confirmPassword}</div>
        ) : null}

        <label>
          <input 
            type="checkbox" 
            checked={formik.showPassword}
            onChange={() => formik.setShowPassword(!formik.showPassword)}
          />
          Ver contraseña
        </label>

        <button type="submit">Crear cuenta</button>
      </form>
    </div>
  );
}

export default Register;
