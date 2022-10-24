import { Button } from '@lib/frontend/core/components/Button/Button';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { WithFieldPropsModel } from '@lib/frontend/core/decorators/withFieldProps/withFieldProps.models';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import { useIsMobile } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile';
import { Form } from '@lib/frontend/form/components/Form/Form';
import { SelectField } from '@lib/frontend/form/components/SelectField/SelectField';
import type { SelectFieldPropsModel } from '@lib/frontend/form/components/SelectField/SelectField.models';
import { TextField } from '@lib/frontend/form/components/TextField/TextField';
import type { TextFieldPropsModel } from '@lib/frontend/form/components/TextField/TextField.models';
import {
  FORM_CONTAINER_WIDTH,
  FORM_FIELD_TYPE,
} from '@lib/frontend/form/containers/FormContainer/FormContainer.constants';
import type {
  FormContainerFieldModel,
  FormContainerPropsModel,
} from '@lib/frontend/form/containers/FormContainer/FormContainer.models';
import { useForm } from '@lib/frontend/form/hooks/useForm/useForm';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useNotification } from '@lib/frontend/notification/hooks/useNotification/useNotification';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { FLEX_JUSTIFY } from '@lib/frontend/styling/utils/styler/flexStyler/flexStyler.constants';
import { THEME_SIZE } from '@lib/frontend/styling/utils/theme/theme.constants';
import { promisify } from '@lib/shared/core/utils/promisify/promisify';
import { flatten, get, isEqual, map, pick } from 'lodash';
import type { ReactElement } from 'react';
import { cloneElement, useCallback, useMemo } from 'react';

export const FormContainer = <TType,>({
  cancelLabel,
  initialValues,
  isFullWidth,
  isLoading,
  leftElement,
  onCancel,
  onSubmit,
  rows,
  submitLabel,
  testID,
  validators,
  ...props
}: FormContainerPropsModel<TType>): ReactElement<FormContainerPropsModel<TType>> => {
  const { styles } = useStyles({ props });
  const { t } = useTranslation();
  const { error } = useNotification();
  const isMobile = useIsMobile();

  const _fieldIds = useMemo(() => map(flatten(map(rows, 'fields')), 'id'), [rows]);

  const _handleSubmit = async (): Promise<void> => {
    const initialValuesPick = pick(initialValues, _fieldIds);
    const valuesPicked = pick(values, _fieldIds);
    return isEqual(initialValuesPick, valuesPicked)
      ? error({ message: t('core:messages.validateChanged') })
      : onSubmit && onSubmit(valuesPicked as TType);
  };

  const {
    errors,
    handleChange,
    handleSubmit,
    isLoading: isFormLoading,
    values,
  } = useForm<TType>({ initialValues, onSubmit: _handleSubmit, validators });

  const _isLoading = isFormLoading || isLoading || false;
  const _isFullWidth = isMobile || isFullWidth;

  const _getField = useCallback(
    ({ field, id, isDisabled, render, ...fieldProps }: FormContainerFieldModel) => {
      const _defaultValue = get(initialValues, id);
      const _error = get(errors, id);
      const _isDisabled = _isLoading || isDisabled;
      const _onChange = handleChange(id);
      const _onSubmit = promisify(handleSubmit);
      const _value = get(values, id);

      switch (field) {
        case FORM_FIELD_TYPE.TEXT_FIELD: {
          return (
            <TextField
              {...(fieldProps as TextFieldPropsModel)}
              defaultValue={_defaultValue}
              error={_error}
              isDisabled={_isDisabled}
              key={id}
              onChange={_onChange}
              onSubmit={_onSubmit}
              testID={id}
              value={_value}
            />
          );
        }
        case FORM_FIELD_TYPE.SELECT_FIELD: {
          return (
            <SelectField
              {...(fieldProps as SelectFieldPropsModel)}
              defaultValue={_defaultValue}
              error={_error}
              isDisabled={_isDisabled}
              key={id}
              onChange={_onChange}
              onSubmit={_onSubmit}
              testID={id}
              value={_value}
            />
          );
        }
        default: {
          return cloneElement(
            (render as (params: WithFieldPropsModel) => ReactElement)({
              defaultValue: _defaultValue,
              error: _error,
              isDisabled: _isDisabled,
              onChange: _onChange,
              value: _value,
            }),
            { key: id, testID: id },
          );
        }
      }
    },
    [values, errors, handleChange, handleSubmit, initialValues, _isLoading],
  );

  return (
    <Wrapper
      isFullWidth={_isFullWidth}
      spacing
      style={styles}
      testID={testID}
      width={_isFullWidth ? undefined : FORM_CONTAINER_WIDTH}>
      <Form onSubmit={_isLoading ? undefined : promisify(handleSubmit)}>
        <Wrapper spacing>
          {map(rows, ({ fields, id }) => (
            <Wrapper
              isDistribute
              isRowAlign
              key={id}>
              {map(fields, _getField)}
            </Wrapper>
          ))}
        </Wrapper>
      </Form>

      <Wrapper
        isDistribute={isFullWidth}
        isRowAlign
        justify={isFullWidth ? undefined : FLEX_JUSTIFY.FLEX_END}
        spacing={THEME_SIZE.SMALL}>
        {leftElement}

        {onCancel && (
          <Button
            icon={ICON.chevronLeft}
            isLoading={_isLoading}
            isTransparent
            onPress={onCancel}>
            {cancelLabel || t('core:labels.cancel')}
          </Button>
        )}

        <Button
          icon={ICON.chevronRight}
          isLoading={_isLoading}
          onPress={handleSubmit}>
          {submitLabel || t('core:labels.submit')}
        </Button>
      </Wrapper>
    </Wrapper>
  );
};
