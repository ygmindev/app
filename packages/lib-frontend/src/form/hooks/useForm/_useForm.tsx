import type { FormErrorModel } from '#lib-frontend/form/form.models';
import type {
  _UseFormModel,
  _UseFormParamsModel,
} from '#lib-frontend/form/hooks/useForm/_useForm.models';
import type { FormikErrors, FormikValues } from 'formik';
import { useFormik } from 'formik';
import { useState } from 'react';

export const _useForm = <TType = void, TResult = void>({
  initialValues,
  onSubmit,
  onValidate,
}: _UseFormParamsModel<TType, TResult>): _UseFormModel<TType, TResult> => {
  const [data, dataSet] = useState<TResult | null>();

  const {
    errors,
    handleReset,
    handleSubmit,
    isSubmitting,
    isValid,
    setErrors,
    setFieldValue,
    setValues,
    values,
  } = useFormik<TType & FormikValues>({
    initialValues: initialValues || ({} as TType & FormikValues),
    onSubmit: async (data) => {
      dataSet((onSubmit && (await onSubmit(data))) || null);
    },
    validate: onValidate,
    validateOnChange: false,
  });

  return {
    data,
    errors: errors as FormErrorModel<TType>,
    handleChange: (id) => (value) => setFieldValue(id, value),
    handleReset: () => handleReset(null),
    handleSubmit,
    isLoading: isSubmitting,
    isValid,
    setErrors: (error) => setErrors(error as unknown as FormikErrors<TType & FormikValues>),
    setValues: (data) => setValues(data as TType & FormikValues),
    values,
  };
};
