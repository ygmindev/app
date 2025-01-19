import { ANIMATION_STATES_APPEAR_SCALABLE } from '@lib/frontend/animation/animation.constants';
import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Circle } from '@lib/frontend/core/components/Circle/Circle';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import {
  type LFCPropsModel,
  type NamableComponentModel,
  type RLFCPropsModel,
} from '@lib/frontend/core/core.models';
import { useElementStateControlled } from '@lib/frontend/core/hooks/useElementStateControlled/useElementStateControlled';
import {
  type SelectInputPropsModel,
  type SelectInputRefModel,
} from '@lib/frontend/data/components/SelectInput/SelectInput.models';
import { SwitchInput } from '@lib/frontend/data/components/SwitchInput/SwitchInput';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
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
import { isEqual } from '@lib/shared/core/utils/isEqual/isEqual';
import { sort } from '@lib/shared/core/utils/sort/sort';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';
import { type ForwardedRef, forwardRef, type ReactElement, useMemo, useState } from 'react';

export const SelectInput = forwardRef(
  <TType extends string | Array<string> = string>(
    {
      defaultValue,
      elementState,
      isIgnoreAll = false,
      isMultiple,
      isSelectAll = true,
      isVertical,
      label,
      onChange,
      onElementStateChange,
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
      isMultiple ? ((valueControlled as Array<string>) ?? []) : undefined,
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
      valueControlledSet((isIgnoreAll && isEqual(idsF, ids) ? [] : idsF) as TType);
    };

    const { isBlocked } = useElementStateControlled({
      elementState,
      onElementStateChange,
    });

    return (
      <Wrapper
        {...wrapperProps}
        opacity={isBlocked ? theme.opaque[THEME_SIZE.LARGE] : undefined}
        position={SHAPE_POSITION.RELATIVE}
        s={THEME_SIZE.SMALL}>
        <AsyncText isBold>{label}</AsyncText>

        <Wrapper
          isAlign
          isRow={!isVertical}
          isWrap
          s={THEME_SIZE.SMALL}>
          {isMultiple && isSelectAll && options.length > 1 && (
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
                      size={THEME_SIZE.SMALL}>
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

                    <AsyncText>{label ?? id}</AsyncText>
                  </Wrapper>
                )}
              </Activatable>
            );
          })}
        </Wrapper>

        {isBlocked && (
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
