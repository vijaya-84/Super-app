import React, { useState } from 'react';
import './App.css'; // Import your CSS file here

function Reg() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Validate form data here
    const errors = {};
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    }
    setFormErrors(errors);

    // Submit form data here
    // ...
  };

  return (
    <div className="Reg">
      <div className="left-half">
        <img src="project_sa.jpg" alt="Left Half Image" />
      </div>
      <div className="right-half">
        <h2>Register</h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
            />
            {formErrors.name && <span className="error">{formErrors.name}</span>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
            />
            {formErrors.email && <span className="error">{formErrors.email}</span>}
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleFormChange}
            />
            {formErrors.password && <span className="error">{formErrors.password}</span>}
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Reg;
