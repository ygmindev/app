import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { type ModalRefModel } from '@lib/frontend/core/components/Modal/Modal.models';
import { ModalButton } from '@lib/frontend/core/components/ModalButton/ModalButton';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type RLFCPropsModel } from '@lib/frontend/core/core.models';
import {
  type MultipleInputPropsModel,
  type MultipleInputRefModle,
} from '@lib/frontend/data/components/MultipleInput/MultipleInput.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import filter from 'lodash/filter';
import { type ReactElement, useRef, useState } from 'react';

export const MultipleInput = <TType extends WithIdModel>({
  defaultValue,
  label,
  onChange,
  options,
  value,
  ...props
}: RLFCPropsModel<MultipleInputRefModle, MultipleInputPropsModel<TType>>): ReactElement<
  RLFCPropsModel<MultipleInputRefModle, MultipleInputPropsModel<TType>>
> => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const { valueControlled, valueControlledSet } = useValueControlled<Array<string>>({
    defaultValue,
    onChange,
    value,
  });
  const modalRef = useRef<ModalRefModel>(null);

  const [initialValues, initialValuesSet] = useState<TType>();

  const handleEdit = (v: TType): void => {
    initialValuesSet(v);
    modalRef.current?.toggle(true);
  };

  return (
    <Wrapper
      {...wrapperProps}
      s={THEME_SIZE.SMALL}>
      <Wrapper
        isAlign
        isRow
        justify={FLEX_JUSTIFY.END}>
        <Wrapper flex>
          <AsyncText>{label}</AsyncText>
        </Wrapper>

        <ModalButton
          element={
            ({ onClose }) => <></>
            // cloneElement(element, {
            //   initialValues,
            //   onCancel: () => {
            //     initialValuesSet(undefined);
            //     onClose();
            //   },
            //   onComplete: () => {
            //     initialValuesSet(undefined);
            //     onClose();
            //   },
            //   onSuccess: async (data?: TType) => {
            //     valueControlledSet(
            //       initialValues
            //         ? updateArray(
            //             valueControlled,
            //             (v) => v === initialValues.id,
            //             (v) => v,
            //           )
            //         : filterNil([...(valueControlled ?? []), data]),
            //     );
            //     onClose();
            //   },
            // })
          }
          icon="add"
          onClose={() => initialValuesSet(undefined)}
          ref={modalRef}
          size={THEME_SIZE.SMALL}>
          {t('core:add', { value: t(label) })}
        </ModalButton>
      </Wrapper>

      {valueControlled?.map((v) => {
        const option = options.find(({ id }) => id === v);
        return (
          option && (
            <Wrapper
              isAlign
              isRow
              key={v}>
              <Button
                icon="edit"
                onPress={() => handleEdit(option)}
                tooltip={t('core:edit')}
                type={BUTTON_TYPE.INVISIBLE}
              />

              <Button
                color={THEME_COLOR.ERROR}
                icon="trash"
                onPress={() => valueControlledSet(filter(valueControlled, (vv) => v !== vv))}
                tooltip={t('core:remove')}
                type={BUTTON_TYPE.INVISIBLE}
              />
            </Wrapper>
          )
        );
      })}
    </Wrapper>
  );
};
