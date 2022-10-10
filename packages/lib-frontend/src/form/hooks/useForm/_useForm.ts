import type { FormErrorModel } from '@lib/frontend/form/form.models';
import type {
  _UseFormModel,
  _UseFormParamsModel,
} from '@lib/frontend/form/hooks/useForm/_useForm.models';
import { promisify } from '@lib/shared/core/utils/promisify/promisify';
import type { FormikErrors, FormikValues } from 'formik';
import { useFormik } from 'formik';

export const _useForm = <TType>({
  initialValues,
  onSubmit,
  onValidate,
}: _UseFormParamsModel<TType>): _UseFormModel<TType> => {
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
      onSubmit && (await promisify(onSubmit)(data));
    },
    validate: onValidate ? promisify(onValidate) : undefined,
    validateOnChange: true,
  });

  return {
    errors: errors as FormErrorModel<TType>,
    handleChange: (id) => (value) => setFieldValue(id, value),
    handleReset: () => handleReset(null),
    handleSubmit,
    isLoading: isSubmitting,
    isValid,
    setErrors: <TError>(error: TError) =>
      setErrors(error as unknown as FormikErrors<TType & FormikValues>),
    setValues: (data) => setValues(data as TType & FormikValues),
    values,
  };
};
