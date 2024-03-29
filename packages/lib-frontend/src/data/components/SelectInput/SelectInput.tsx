import { ANIMATION_STATES_APPEAR_SCALABLE } from '@lib/frontend/animation/animation.constants';
import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { Circle } from '@lib/frontend/core/components/Circle/Circle';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import {
  type LFCPropsModel,
  type NamableComponentModel,
  type RLFCPropsModel,
} from '@lib/frontend/core/core.models';
import {
  type SelectInputPropsModel,
  type SelectInputRefModel,
} from '@lib/frontend/data/components/SelectInput/SelectInput.models';
import { SwitchInput } from '@lib/frontend/data/components/SwitchInput/SwitchInput';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { TranslatableText } from '@lib/frontend/locale/components/TranslatableText/TranslatableText';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import {
  THEME_COLOR,
  THEME_COLOR_MORE,
  THEME_ROLE,
  THEME_SIZE,
  THEME_SIZE_MORE,
} from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { isEmpty } from '@lib/shared/core/utils/isEmpty/isEmpty';
import { isEqual } from '@lib/shared/core/utils/isEqual/isEqual';
import { sort } from '@lib/shared/core/utils/sort/sort';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';
import { type ForwardedRef, forwardRef, type ReactElement, useMemo, useState } from 'react';

export const SelectInput = forwardRef(
  <TType extends string | Array<string> = string>(
    {
      defaultValue,
      elementState,
      isMultiple,
      isVertical,
      label,
      onChange,
      options,
      value,
      ...props
    }: LFCPropsModel<SelectInputPropsModel<TType>>,
    _ref: ForwardedRef<SelectInputRefModel>,
  ): ReactElement<RLFCPropsModel<SelectInputRefModel, SelectInputPropsModel<TType>>> => {
    const theme = useTheme();
    const { t } = useTranslation();
    const { wrapperProps } = useLayoutStyles({ props });
    const ids = useMemo(() => sort(options.map(({ id }) => id)), options);

    const { valueControlled, valueControlledSet } = useValueControlled({
      defaultValue,
      onChange,
      value,
    });

    const [values, valuesSet] = useState<Array<string> | undefined>(
      isMultiple
        ? isEmpty(valueControlled) || isEqual(valueControlled, [])
          ? ids
          : (valueControlled as Array<string>) ?? []
        : undefined,
    );

    const handleChange = (id: string) => () =>
      isMultiple
        ? handleChangeMultiple(
            values?.includes(id) ? values?.filter((v) => v !== id) : [...(values || []), id],
          )
        : valueControlledSet(id as TType);

    const handleChangeMultiple = (v: Array<string>): void => {
      const idsF = sort(v);
      valuesSet(idsF);
      valueControlledSet((isEqual(idsF, ids) ? [] : idsF) as TType);
    };

    const isDisabled = elementState === ELEMENT_STATE.DISABLED;

    return (
      <Wrapper
        {...wrapperProps}
        opacity={isDisabled ? theme.opaque[THEME_SIZE.LARGE] : undefined}
        position={SHAPE_POSITION.RELATIVE}
        s={THEME_SIZE.SMALL}>
        <TranslatableText isBold>{label}</TranslatableText>

        <Wrapper
          isAlign
          isRow={!isVertical}
          isWrap
          s={THEME_SIZE.SMALL}>
          {isMultiple && (
            <SwitchInput
              elementState={elementState}
              label={t('core:selectAll')}
              onChange={(v) => handleChangeMultiple(v ? ids : [])}
              value={isEqual(values, ids)}
            />
          )}

          {options.map(({ icon, id, label }) => {
            const isValue = isMultiple ? values?.includes(id) : valueControlled === id;
            return (
              <Activatable key={id}>
                {(isActive) => (
                  <Wrapper
                    border
                    borderColor={THEME_COLOR.PRIMARY}
                    isAlign
                    isRow
                    onPress={handleChange(id)}
                    p={THEME_SIZE.SMALL}
                    round>
                    <Circle
                      backgroundColor={isValue ? THEME_COLOR.PRIMARY : THEME_COLOR_MORE.SURFACE}
                      border
                      borderColor={THEME_COLOR.PRIMARY}
                      position={SHAPE_POSITION.RELATIVE}
                      size={THEME_SIZE_MORE.XSMALL}>
                      {isValue ? (
                        <Icon
                          color={THEME_COLOR_MORE.SURFACE}
                          colorRole={THEME_ROLE.MAIN}
                          icon="check"
                        />
                      ) : (
                        <Circle
                          animation={{ states: ANIMATION_STATES_APPEAR_SCALABLE }}
                          elementState={isActive ? ELEMENT_STATE.ACTIVE : ELEMENT_STATE.INACTIVE}
                          position={SHAPE_POSITION.ABSOLUTE}
                          size={
                            theme.shape.size[THEME_SIZE_MORE.XSMALL] -
                            theme.shape.spacing[THEME_SIZE.SMALL]
                          }
                        />
                      )}
                    </Circle>

                    {icon && (
                      <Icon
                        color={THEME_COLOR.PRIMARY}
                        icon={icon}
                      />
                    )}

                    <TranslatableText>{label ?? id}</TranslatableText>
                  </Wrapper>
                )}
              </Activatable>
            );
          })}
        </Wrapper>

        {isDisabled && (
          <Wrapper
            isAbsoluteFill
            zIndex
          />
        )}
      </Wrapper>
    );
  },
) as NamableComponentModel<
  <TType extends string | Array<string> = string>(
    props: RLFCPropsModel<SelectInputRefModel, SelectInputPropsModel<TType>>,
  ) => ReactElement<RLFCPropsModel<SelectInputRefModel, SelectInputPropsModel<TType>>>
>;

process.env.APP_IS_DEBUG && (SelectInput.displayName = variableName({ SelectInput }));
