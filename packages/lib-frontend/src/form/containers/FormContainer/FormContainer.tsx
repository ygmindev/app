import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { FieldPropsModel, SFCPropsModel } from '@lib/frontend/core/core.models';
import { useIsMobile } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile';
import { Form } from '@lib/frontend/form/components/Form/Form';
import { SelectField } from '@lib/frontend/form/components/SelectField/SelectField';
import type { SelectFieldPropsModel } from '@lib/frontend/form/components/SelectField/SelectField.models';
import { TextField } from '@lib/frontend/form/components/TextField/TextField';
import type { TextFieldPropsModel } from '@lib/frontend/form/components/TextField/TextField.models';
import { FORM_FIELD_TYPE } from '@lib/frontend/form/containers/FormContainer/FormContainer.constants';
import type {
  FormContainerFieldModel,
  FormContainerPropsModel,
} from '@lib/frontend/form/containers/FormContainer/FormContainer.models';
import { useForm } from '@lib/frontend/form/hooks/useForm/useForm';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useNotification } from '@lib/frontend/notification/hooks/useNotification/useNotification';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_BASIC_SIZE } from '@lib/frontend/style/style.constants';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { isEqual } from '@lib/shared/core/utils/isEqual/isEqual';
import { FIELD_TYPE } from '@lib/shared/form/form.constants';
import toNumber from 'lodash/toNumber';
import type { ReactElement } from 'react';
import { cloneElement, useCallback, useMemo } from 'react';

export const FormContainer = <TType,>({
  cancelLabel,
  elementState,
  initialValues,
  isFullWidth,
  leftElement,
  onCancel,
  onSubmit,
  rows,
  submitLabel,
  testID,
  topElement,
  validators,
  ...props
}: SFCPropsModel<FormContainerPropsModel<TType>>): ReactElement<
  SFCPropsModel<FormContainerPropsModel<TType>>
> => {
  const { styles } = useStyles({ props });
  const theme = useTheme();
  const { t } = useTranslation();
  const { error } = useNotification();
  const isMobile = useIsMobile();

  const _fields = useMemo(() => rows?.map(({ fields }) => fields).flat(), [rows]);
  const _getValues = (data: TType): TType =>
    _fields
      ? _fields.reduce((result, field) => {
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
        }, {} as TType)
      : data;

  const _handleSubmit = async (): Promise<void> => {
    const _initialValues = initialValues && _getValues(initialValues);
    const _values = _getValues(values);
    return isEqual(_initialValues, _values)
      ? error({ message: t('core:messages.validateChanged') })
      : onSubmit && (await onSubmit(_values as TType));
  };

  const { errors, handleChange, handleSubmit, isLoading, values } = useForm<TType>({
    initialValues,
    onSubmit: _handleSubmit,
    validators,
  });

  const _elementState = isLoading ? ELEMENT_STATE.LOADING : elementState;
  const _isDisabled =
    _elementState === ELEMENT_STATE.DISABLED || _elementState === ELEMENT_STATE.LOADING;
  const _isFullWidth = isMobile || isFullWidth;

  const _getField = useCallback(
    ({ field, fieldProps, id, render }: FormContainerFieldModel) => {
      const _fieldProps: FieldPropsModel = {
        ...fieldProps,
        defaultValue: initialValues ? (initialValues as Record<string, undefined>)[id] : undefined,
        elementState: _isDisabled
          ? ELEMENT_STATE.DISABLED
          : _elementState || fieldProps?.elementState,
        error: errors ? (errors as Record<string, undefined>)[id] : undefined,
        label: fieldProps?.label ? t(fieldProps.label) : undefined,
        onChange: handleChange(id),
        value: values ? (values as Record<string, undefined>)[id] : undefined,
      };

      const _onSubmit = async (): Promise<void> => handleSubmit();

      switch (field) {
        case FORM_FIELD_TYPE.TEXT_FIELD: {
          return (
            <TextField
              {...(_fieldProps as TextFieldPropsModel)}
              key={id}
              onSubmit={async () => handleSubmit()}
              testID={id}
            />
          );
        }
        case FORM_FIELD_TYPE.SELECT_FIELD: {
          return (
            <SelectField
              {...(_fieldProps as SelectFieldPropsModel)}
              key={id}
              onSubmit={_onSubmit}
              testID={id}
            />
          );
        }
        default: {
          return cloneElement((render as (params: FieldPropsModel) => ReactElement)(_fieldProps), {
            key: id,
            testID: id,
          });
        }
      }
    },
    [values, errors, handleChange, handleSubmit, initialValues, _elementState],
  );

  return (
    <Wrapper
      isFullWidth={_isFullWidth}
      spacing
      style={styles}
      testID={testID}
      width={_isFullWidth ? undefined : theme.layout.narrow.width}>
      <Form onSubmit={_isDisabled ? undefined : async () => handleSubmit()}>
        <Wrapper spacing>
          {topElement}

          {rows?.map(({ fields, id }) => (
            <Wrapper
              isDistribute
              isRowAlign
              key={id}>
              {fields?.map(_getField)}
            </Wrapper>
          ))}
        </Wrapper>
      </Form>

      <Wrapper
        isDistribute={isFullWidth}
        isRowAlign
        justify={isFullWidth ? undefined : FLEX_JUSTIFY.FLEX_END}
        spacing={THEME_BASIC_SIZE.SMALL}>
        {leftElement}

        {onCancel && (
          <Button
            elementState={_elementState}
            icon="chevronLeft"
            onPress={onCancel}
            type={BUTTON_TYPE.TRANSPARENT}>
            {t(cancelLabel || 'core:labels.cancel')}
          </Button>
        )}

        <Button
          elementState={_elementState}
          icon="chevronRight"
          onPress={handleSubmit}>
          {t(submitLabel || 'core:labels.submit')}
        </Button>
      </Wrapper>
    </Wrapper>
  );
};
