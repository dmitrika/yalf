import { useState } from "react";

import { pages } from "../Page";
import { Field } from "../Field";

const initialFormErrorsState = {
  email: "",
  password: "",
  formError: "",
};

export function Form({ API, setCurrentPage }) {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState(initialFormErrorsState);
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldFocus = (event) => {
    const {
      target: { name },
    } = event;

    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: undefined,
      });
    }
  };

  const handleFieldChange = (event) => {
    const {
      target: { value, name },
    } = event;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setIsLoading(true);

    API.login(userInfo)
      .then(() => {
        setCurrentPage(pages.welcome);
      })
      .catch((errors) => {
        setFormErrors({ ...initialFormErrorsState, ...errors });
        setIsLoading(false);
      });
  };

  return (
    <form action="/login" method="POST" onSubmit={handleFormSubmit}>
      <Field
        id="email"
        type="email"
        name="email"
        label="Email"
        required
        autoFocus={true}
        placeholder="e.g. rybin@fastmail.com"
        onChange={handleFieldChange}
        onFocus={handleFieldFocus}
        value={userInfo.email}
        error={formErrors.email}
      />
      <Field
        id="password"
        type="password"
        name="password"
        label="Password"
        required
        placeholder="e.g. password"
        autoComplete="current-password"
        onChange={handleFieldChange}
        onFocus={handleFieldFocus}
        value={userInfo.password}
        error={formErrors.password}
      />
      <Field
        id="submit"
        type="submit"
        value={isLoading ? "Loading..." : "Log in"}
        disabled={isLoading}
        className="submit"
        error={formErrors.formError}
      />
    </form>
  );
}
