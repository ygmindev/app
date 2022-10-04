import { Form } from '@lib/frontend/core/components/Form/Form';
import { TextField } from '@lib/frontend/core/components/TextField/TextField';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { FORM_CONTAINER_WIDTH } from '@lib/frontend/core/containers/FormContainer/FormContainer.constants';
import type {
  FormContainerFieldModel,
  FormContainerPropsModel,
} from '@lib/frontend/core/containers/FormContainer/FormContainer.models';
import { useForm } from '@lib/frontend/core/hooks/useForm/useForm';
import { useIsMobile } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useAlert } from '@lib/frontend/notification/hooks/useAlert/useAlert';
import { UNKNOWN_ALERT } from '@lib/frontend/notification/notification.constants';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { flatten, get, isEqual, map, pick } from 'lodash';
import type { ReactElement } from 'react';
import { cloneElement, useCallback } from 'react';

export const FormContainer = <TType, TKeys extends Array<string>[] = Array<string>[]>({
  closeLabel,
  initialValues,
  isAutoFocus,
  isFullWidth,
  isLoading: isLoadingProps,
  onClose,
  onSubmit,
  rows,
  testID,
  validators,
  ...props
}: FormContainerPropsModel<TType, TKeys>): ReactElement<FormContainerPropsModel<TType, TKeys>> => {
  const { styles } = useStyles({ props });
  const { t } = useTranslation();
  const { alertAdd } = useAlert();
  const isMobile = useIsMobile();

  const _pickData = <TType,>(data: TType): TType => {
    const fieldIds = map(flatten(map(rows, 'fields')), 'id');
    return pick(data, fieldIds) as unknown as TType;
  };

  const _handleSubmit = async (): Promise<void> => {
    const initialValuesPick = _pickData(initialValues);
    const valuesPicked = _pickData(values);
    return isEqual(initialValuesPick, valuesPicked)
      ? alertAdd({ ...UNKNOWN_ALERT, message: t('core:messages.nothingChanged') })
      : onSubmit && onSubmit(valuesPicked);
  };

  const { errors, handleChange, handleSubmit, isLoading, values } = useForm<TType>({
    initialValues,
    onSubmit: _handleSubmit,
    validators,
  });

  const _isLoading = isLoading || isLoadingProps;

  const _getField = useCallback(
    <TKey extends string>({
      autoComplete,
      icon,
      id,
      isAutoFocus,
      label,
      render,
      type,
    }: FormContainerFieldModel<TType, TKey>) =>
      render ? (
        cloneElement(render({ errors, handleChange, handleSubmit, isLoading, values }), { key: id })
      ) : (
        <TextField
          autoComplete={autoComplete}
          defaultValue={get(initialValues, id)}
          error={get(errors, id) || undefined}
          icon={icon}
          isAutoFocus={isAutoFocus}
          isDisabled={_isLoading}
          key={id}
          label={label}
          onChange={handleChange(id)}
          onSubmit={async () => handleSubmit()}
          type={type}
          value={get(values, id)}
        />
      ),
    [values, errors, handleChange, handleSubmit, initialValues, _isLoading, isLoading],
  );

  const fieldComponents = map(rows, (row, i) => (
    <Wrapper
      isDistribute
      isRowAlign
      key={row.id}>
      {map(row.fields, (field, j) =>
        _getField({
          ...field,
          isAutoFocus: (isAutoFocus || field.isAutoFocus) && i === 0 && j === 0,
        }),
      )}
    </Wrapper>
  ));

  return (
    <Wrapper
      isFullWidth={isMobile}
      style={styles}
      testID={testID}
      width={isMobile ? undefined : FORM_CONTAINER_WIDTH}>
      <Form
        closeLabel={closeLabel}
        isFullWidth={isFullWidth}
        isLoading={_isLoading}
        onClose={onClose}
        onSubmit={async () => handleSubmit()}>
        {fieldComponents}
      </Form>
    </Wrapper>
  );
};
