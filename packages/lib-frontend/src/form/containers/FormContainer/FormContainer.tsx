import { Button } from '@lib/frontend/core/components/Button/Button';
import { ICONS } from '@lib/frontend/core/components/Icon/Icon.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { FieldPropsModel } from '@lib/frontend/core/core.models';
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
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { promisify } from '@lib/shared/core/utils/promisify/promisify';
import { FIELD_TYPE } from '@lib/shared/form/form.constants';
import { flatten, get, isEqual, map, reduce, toNumber } from 'lodash';
import type { ReactElement } from 'react';
import { cloneElement, useCallback, useMemo } from 'react';

export const FormContainer = <TType,>({
  cancelLabel,
  children,
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

  const _fields = useMemo(() => flatten(map(rows, 'fields')), [rows]);

  const _getValues = (data: TType): TType =>
    reduce<FormContainerFieldModel | null | undefined, TType>(
      _fields,
      (result, field) => {
        if (field?.id) {
          let _value = (data as Record<string, unknown>)[field.id];
          switch (field?.type) {
            case FIELD_TYPE.NUMBER: {
              _value = toNumber(_value);
              break;
            }
          }
          return { ...result, [field.id]: _value };
        }
        return result;
      },
      {} as TType,
    );

  const _handleSubmit = async (): Promise<void> => {
    const _initialValues = initialValues && _getValues(initialValues);
    const _values = _getValues(values);
    return isEqual(_initialValues, _values)
      ? error({ message: t('core:messages.validateChanged') })
      : onSubmit && onSubmit(_values as TType);
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
            (render as (params: FieldPropsModel) => ReactElement)({
              ...fieldProps,
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
          {children}

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
            icon={ICONS.chevronLeft}
            isLoading={_isLoading}
            isTransparent
            onPress={onCancel}
            testID={`${testID}-cancel`}>
            {cancelLabel || t('core:labels.cancel')}
          </Button>
        )}

        <Button
          icon={ICONS.chevronRight}
          isLoading={_isLoading}
          onPress={handleSubmit}
          testID={`${testID}-submit`}>
          {submitLabel || t('core:labels.submit')}
        </Button>
      </Wrapper>
    </Wrapper>
  );
};
