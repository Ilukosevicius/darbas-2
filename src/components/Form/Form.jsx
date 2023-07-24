import React, { useState } from 'react';

// Icons
import { ReactComponent as LockIcon } from '../../Assets/padlockIcon.svg';
import { ReactComponent as MailIcon } from '../../Assets/mailIcon.svg';
import { ReactComponent as UserIcon } from '../../Assets/userIcon.svg';

// Styles
import { StyledForm } from './Form.style';

const FormInput = ({
  value,
  type,
  id,
  placeholder,
  onChange,
  icon,
  errors,
}) => (
  <div className="input">
    <label htmlFor={id}>{id[0].toUpperCase() + id.slice(1)}</label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
    {errors[id] && <span>{errors[id]}</span>}
    {icon}
  </div>
);

const Register = ({ renderForm }) => {
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    password: '',
    errors: {},
  });

  const handleChange = (id) => (event) => {
    setFormFields({ ...formFields, [id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};

    ['name', 'email', 'password'].forEach((field) => {
      if (!formFields[field].trim()) {
        validationErrors[field] = `${
          field[0].toUpperCase() + field.slice(1)
        } is required`;
      }
    });

    if (Object.keys(validationErrors).length === 0) {
      alert('Registration successful!');
      setFormFields({
        name: '',
        email: '',
        password: '',
        errors: {},
      });
    } else {
      setFormFields({ ...formFields, errors: validationErrors });
    }
  };

  return renderForm({ ...formFields, handleChange, handleSubmit });
};

const Form = () => {
  return (
    <StyledForm>
      <Register
        renderForm={({
          name,
          email,
          password,
          errors,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <FormInput
              value={name}
              type="text"
              id="name"
              placeholder="Joy Shaheb"
              onChange={handleChange('name')}
              icon={<UserIcon />}
              errors={errors}
            />
            <FormInput
              value={email}
              type="email"
              id="email"
              placeholder="abc@gmail.com"
              onChange={handleChange('email')}
              icon={<MailIcon />}
              errors={errors}
            />
            <FormInput
              value={password}
              type="password"
              id="password"
              placeholder="•••••••"
              onChange={handleChange('password')}
              icon={<LockIcon />}
              errors={errors}
            />
            <button type="submit">Submit</button>
          </form>
        )}
      />
    </StyledForm>
  );
};

export default Form;
