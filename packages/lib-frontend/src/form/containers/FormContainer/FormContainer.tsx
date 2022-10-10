import { Button } from '@lib/frontend/core/components/Button/Button';
import { ICON } from '@lib/frontend/core/components/Icon/Icon.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { useIsMobile } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile';
import { Form } from '@lib/frontend/form/components/Form/Form';
import { SelectField } from '@lib/frontend/form/components/SelectField/SelectField';
import { TextField } from '@lib/frontend/form/components/TextField/TextField';
import { FORM_CONTAINER_WIDTH } from '@lib/frontend/form/containers/FormContainer/FormContainer.constants';
import type {
  FormContainerFieldModel,
  FormContainerPropsModel,
} from '@lib/frontend/form/containers/FormContainer/FormContainer.models';
import { useForm } from '@lib/frontend/form/hooks/useForm/useForm';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useAlert } from '@lib/frontend/notification/hooks/useAlert/useAlert';
import { UNKNOWN_ALERT } from '@lib/frontend/notification/notification.constants';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { FLEX_JUSTIFY } from '@lib/frontend/styling/utils/styler/flexStyler/flexStyler.constants';
import { THEME_SIZE } from '@lib/frontend/styling/utils/theme/theme.constants';
import { flatten, get, isEqual, map, pick } from 'lodash';
import type { ReactElement } from 'react';
import { cloneElement, useCallback } from 'react';

export const FormContainer = <TType,>({
  cancelLabel,
  initialValues,
  isAutoFocus,
  isFullWidth,
  isLoading,
  leftElement,
  onCancel,
  onReset,
  onSubmit,
  rows,
  submitLabel,
  testID,
  validators,
  ...props
}: FormContainerPropsModel<TType>): ReactElement<FormContainerPropsModel<TType>> => {
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

  const {
    errors,
    handleChange,
    handleSubmit,
    isLoading: isFormLoading,
    values,
  } = useForm<TType>({ initialValues, onSubmit: _handleSubmit, validators });

  const _isLoading = isFormLoading || isLoading || false;

  const _getField = useCallback(
    ({
      autoComplete,
      icon,
      id,
      isAutoFocus,
      isDisabled,
      label,
      options,
      render,
      type,
    }: FormContainerFieldModel) =>
      render ? (
        cloneElement(
          render({
            defaultValue: get(initialValues, id),
            error: get(errors, id),
            isAutoFocus,
            isDisabled: _isLoading || isDisabled,
            onChange: handleChange(id),
            value: get(values, id),
          }),
          { key: id },
        )
      ) : options ? (
        <SelectField
          defaultValue={get(initialValues, id)}
          error={get(errors, id)}
          icon={icon}
          isAutoFocus={isAutoFocus}
          key={id}
          label={label}
          onChange={handleChange(id)}
          options={options}
          value={get(values, id)}
        />
      ) : (
        <TextField
          autoComplete={autoComplete}
          defaultValue={get(initialValues, id)}
          error={get(errors, id)}
          icon={icon}
          isAutoFocus={isAutoFocus}
          isDisabled={_isLoading || isDisabled}
          key={id}
          label={label}
          onChange={handleChange(id)}
          onSubmit={async () => handleSubmit()}
          type={type}
          value={get(values, id)}
        />
      ),
    [values, errors, handleChange, handleSubmit, initialValues, _isLoading],
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

  const _isFullWidth = isMobile || isFullWidth;

  return (
    <Wrapper
      isFullWidth={_isFullWidth}
      spacing
      style={styles}
      testID={testID}
      width={_isFullWidth ? undefined : FORM_CONTAINER_WIDTH}>
      {/* <Form
        cancelLabel={cancelLabel}
        isFullWidth={isFullWidth}
        isLoading={_isLoading}
        leftElement={leftElement}
        onClose={onClose}
        onSubmit={async () => handleSubmit()}>
        {fieldComponents}
      </Form> */}

      <Form
        onSubmit={
          isLoading
            ? undefined
            : async () => {
                handleSubmit();
              }
        }>
        <Wrapper spacing>{fieldComponents}</Wrapper>
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
            isDisabled={isLoading}
            isTransparent
            onPress={() => {
              onReset && onReset();
              onCancel();
            }}>
            {cancelLabel || t('core:labels.cancel')}
          </Button>
        )}

        <Button
          icon={ICON.chevronRight}
          isDisabled={isLoading}
          isLoading={isLoading}
          onPress={handleSubmit}>
          {submitLabel || t('core:labels.submit')}
        </Button>
      </Wrapper>
    </Wrapper>
  );
};
