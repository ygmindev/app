import { type FormikErrors, type FormikValues } from 'formik';
import { useFormik } from 'formik';
import { useState } from 'react';

import { type FormErrorModel, type FormInputModel } from '#lib-frontend/data/data.models';
import {
  type _UseFormModel,
  type _UseFormParamsModel,
} from '#lib-frontend/data/hooks/useForm/_useForm.models';

export const _useForm = <TType, TResult = void, TInput extends FormInputModel<TType> = TType>({
  initialValues,
  onSubmit,
  onTransform,
  onValidate,
}: _UseFormParamsModel<TType, TResult, TInput>): _UseFormModel<TType, TResult, TInput> => {
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
  } = useFormik<TInput & FormikValues>({
    initialValues: initialValues ?? ({} as TInput & FormikValues),
    onSubmit: async (data) => {
      const dataF = onTransform ? onTransform(data) : (data as TType);
      dataSet((onSubmit && (await onSubmit(dataF))) ?? null);
    },
    validate: onValidate,
    validateOnChange: false,
  });

  return {
    data,
    errors: errors as FormErrorModel<TInput>,
    errorsSet: (error) => setErrors(error as unknown as FormikErrors<TInput & FormikValues>),
    handleChange: (id) => (value) => setFieldValue(id, value),
    handleReset: () => handleReset(null),
    handleSubmit: () => handleSubmit(),
    isLoading: isSubmitting,
    isValid,
    values,
    valuesSet: async (data) => {
      await setValues(data as TInput & FormikValues);
    },
  };
};
