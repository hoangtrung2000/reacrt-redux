import React from "react";
import PropTypes from "prop-types";
import { FormFeedback, FormGroup, Label } from "reactstrap";
import RandomPhoto from "components/RandomPhoto";
import { ErrorMessage } from "formik";
function RandomPhotoField(props) {
  const { field, form, label, disabled } = props;
  const { name, value, onBlur } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  const handleImageUrlChange = (newImageUrl) => {
    form.setFieldValue(name, newImageUrl);
  };
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <RandomPhoto
        name={name}
        imageUrl={value}
        disabled={disabled}
        onImageUrlChange={handleImageUrlChange}
        onRandomButtonBlur={onBlur}
        classNames={showError ? "is-invalid" : ""}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

RandomPhotoField.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
};
RandomPhotoField.defaultProps = {
  label: "",
  disabled: false,
};

export default RandomPhotoField;
