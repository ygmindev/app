import type {
  _UseFormModel,
  _UseFormParamsModel,
} from '@lib/frontend/core/hooks/useForm/_useForm.models';
import type { FormErrorModel } from '@lib/frontend/core/hooks/useForm/useForm.models';
import { promisify } from '@lib/shared/core/utils/promisify/promisify';
import type { FormikValues } from 'formik';
import { useFormik } from 'formik';
import type { HttpError } from 'http-errors';

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
      try {
        onSubmit && (await promisify(onSubmit)(data));
      } catch (e) {
        setErrors((e as HttpError).data || e || {});
      }
    },
    validate: onValidate ? promisify(onValidate) : undefined,
    validateOnChange: false,
  });

  return {
    errors: errors as FormErrorModel<TType>,
    handleChange: (id) => (value) => setFieldValue(id, value),
    handleReset: () => handleReset(null),
    handleSubmit,
    isLoading: isSubmitting,
    isValid,
    setValues: (data) => setValues(data as TType & FormikValues),
    values,
  };
};
