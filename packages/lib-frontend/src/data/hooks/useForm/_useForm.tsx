import { type FormErrorModel } from '@lib/frontend/data/data.models';
import {
  type _UseFormModel,
  type _UseFormParamsModel,
} from '@lib/frontend/data/hooks/useForm/_useForm.models';
import { type FormikErrors, type FormikValues } from 'formik';
import { useFormik } from 'formik';
import { useState } from 'react';

export const _useForm = <TType, TResult = void>({
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
    initialValues: initialValues ?? ({} as TType & FormikValues),
    onSubmit: async (data) => {
      dataSet((onSubmit && (await onSubmit(data))) ?? null);
    },
    validate: onValidate,
    validateOnChange: false,
  });

  return {
    data,
    errors: errors as FormErrorModel<TType>,
    errorsSet: (error) => setErrors(error as unknown as FormikErrors<TType & FormikValues>),
    handleChange: (id) => (value) => setFieldValue(id, value),
    handleReset: () => handleReset(null),
    handleSubmit: () => handleSubmit(),
    isLoading: isSubmitting,
    isValid,
    values,
    valuesSet: async (data) => {
      await setValues(data as TType & FormikValues);
    },
  };
};
