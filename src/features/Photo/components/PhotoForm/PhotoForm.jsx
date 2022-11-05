import React from "react";
import PropTypes from "prop-types";
import { Button, FormGroup, Spinner } from "reactstrap";
import { FastField, Form, Formik } from "formik";
import InputField from "custom/InputField";
import SelectField from "custom/SelectField";
import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import RandomPhotoField from "custom/RandomPhotoField";
import * as Yup from "yup";
function PhotoForm(props) {
  const initialValues = {
    title: "", // undefined = uncontrolled component
    categoryId: null,
    photo: "",
  };

  const basicSchema = Yup.object().shape({
    title: Yup.string().required("This field is required"),
    categoryId: Yup.number().required("This field is required").nullable(),
    photo: Yup.string().when("categoryId", {
      is: 1,
      then: Yup.string().required("This field is required"),
      otherwise: Yup.string().notRequired(),
    }),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={basicSchema}
      onSubmit={props.onSubmit}
    >
      {({ values, errors, touched, isSubmitting }) => {
        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              disabled={isSubmitting}
              placeholder="Eg: Wow nature ..."
            />
            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category ?"
              isDisabled={isSubmitting}
              options={PHOTO_CATEGORY_OPTIONS}
            />
            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
              disabled={isSubmitting}
            />

            <FormGroup>
              <Button type="submit" color="primary">
                {isSubmitting && <Spinner size="sm" />}
                Add to album
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

export default PhotoForm;
