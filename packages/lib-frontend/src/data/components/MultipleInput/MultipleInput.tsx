import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type RLFCPropsModel } from '@lib/frontend/core/core.models';
import {
  type MultipleInputPropsModel,
  type MultipleInputRefModle,
} from '@lib/frontend/data/components/MultipleInput/MultipleInput.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { TranslatableText } from '@lib/frontend/locale/components/TranslatableText/TranslatableText';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { uid } from '@lib/shared/core/utils/uid/uid';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import filter from 'lodash/filter';
import { cloneElement, type ForwardedRef, forwardRef, type ReactElement } from 'react';

export const MultipleInput = forwardRef(
  <TType extends WithIdModel>(
    {
      defaultValue,
      element,
      label,
      onChange,
      value,
      ...props
    }: RLFCPropsModel<MultipleInputRefModle<TType>, MultipleInputPropsModel<TType>>,
    _: ForwardedRef<MultipleInputRefModle<TType>>,
  ): ReactElement<RLFCPropsModel<MultipleInputRefModle<TType>, MultipleInputPropsModel<TType>>> => {
    const { t } = useTranslation();
    const { wrapperProps } = useLayoutStyles({ props });
    const { valueControlled, valueControlledSet } = useValueControlled({
      defaultValue: defaultValue ?? [{ id: uid() }],
      onChange,
      value,
    });
    return (
      <Wrapper
        {...wrapperProps}
        s={THEME_SIZE.SMALL}>
        <Wrapper
          isRowAlign
          justify={FLEX_JUSTIFY.END}>
          {label && (
            <Wrapper flex>
              <TranslatableText>{label}</TranslatableText>
            </Wrapper>
          )}

          <Button
            icon="add"
            onPress={() => valueControlledSet([...(valueControlled ?? []), { id: uid() }])}
            size={THEME_SIZE.SMALL}
            type={BUTTON_TYPE.TRANSPARENT}>
            {t('core:add')}
          </Button>
        </Wrapper>

        {valueControlled?.map((v, i) => (
          <Wrapper
            isRowAlign
            key={v.id}>
            <Wrapper flex>{cloneElement(element, { value: valueControlled[i].id })}</Wrapper>

            {valueControlled.length > 1 && (
              <Button
                color={THEME_COLOR.ERROR}
                icon="trash"
                onPress={() => valueControlledSet(filter(valueControlled, (vv) => v.id !== vv.id))}
                type={BUTTON_TYPE.INVISIBLE}
              />
            )}
          </Wrapper>
        ))}
      </Wrapper>
    );
  },
) as <TType extends WithIdModel>(
  props: RLFCPropsModel<MultipleInputRefModle<TType>, MultipleInputPropsModel<TType>>,
) => ReactElement<RLFCPropsModel<MultipleInputRefModle<TType>, MultipleInputPropsModel<TType>>>;
