import React from "react";
import PropTypes from "prop-types";
import { FormFeedback, FormGroup, Label } from "reactstrap";
import Select from "react-select";
import { ErrorMessage } from "formik";
function SelectField(props) {
  const { label, field, form, placeholder, disabled, options } = props;
  const { name, value } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  const selectedValue = options.find((option) => option.value === value);
  const handleSelectedOptionsChange = (selectedOption) => {
    const selectValue = selectedOption ? selectedOption.value : selectedOption;
    const changeEvent = {
      target: {
        name: name,
        value: selectValue,
      },
    };
    field.onChange(changeEvent);
  };
  return (
    <FormGroup>
      {label && <Label fop={name}>{label}</Label>}
      <Select
        id={name}
        {...field}
        value={selectedValue}
        onChange={handleSelectedOptionsChange}
        onBlur={() => form.setFieldTouched(name, true)}
        disabled={disabled}
        options={options}
        placeholder={placeholder}
        className={showError ? "is-invalid" : ""}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

SelectField.propTypes = {
  field: PropTypes.object.isRequired, // FastFiled formik props
  form: PropTypes.object.isRequired, // FastFiled formik props
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
};

SelectField.defaultProp = {
  label: "",
  placeholder: "",
  disabled: false,
  options: [],
};

export default SelectField;
