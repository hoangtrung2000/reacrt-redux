import React from "react";
import PropTypes from "prop-types";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";
import { ErrorMessage } from "formik";

function InputField(props) {
  const { field, form, label, placeholder, type, disabled } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <FormGroup>
      {label && <Label fop={name}>{label}</Label>}
      <Input
        id={name}
        {...field}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        invalid={showError}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

InputField.propTypes = {
  field: PropTypes.object.isRequired, // FastFiled formik props
  form: PropTypes.object.isRequired, // FastFiled formik props
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};

export default InputField;
