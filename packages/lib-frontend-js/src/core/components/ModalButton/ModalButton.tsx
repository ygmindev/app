import { Button } from '@lib/frontend/core/components/Button/Button';
import { type ButtonPropsModel } from '@lib/frontend/core/components/Button/Button.models';
import { Modal } from '@lib/frontend/core/components/Modal/Modal';
import {
  type ModalButtonPropsModel,
  type ModalButtonRefModel,
} from '@lib/frontend/core/components/ModalButton/ModalButton.models';
import { type RLFCPropsModel } from '@lib/frontend/core/core.models';
import { isAsyncText } from '@lib/frontend/core/utils/isAsyncText/isAsyncText';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { type ReactElement, useState } from 'react';

export const ModalButton = <TType = void,>({
  element,
  isFullSize,
  onClose,
  onPress,
  ref,
  title,
  ...props
}: RLFCPropsModel<ModalButtonRefModel, ModalButtonPropsModel<TType>>): ReactElement<
  RLFCPropsModel<ModalButtonRefModel, ModalButtonPropsModel<TType>>
> => {
  const { t } = useTranslation();
  const [isOpen, isOpenSet] = useState<boolean>();
  const [data, dataSet] = useState<Awaited<TType>>();

  const handleToggle = (isOpen?: boolean): void => {
    if (!isOpen) {
      onClose?.();
      dataSet(undefined);
    }
    isOpenSet(isOpen);
  };

  return (
    <>
      <Button<TType>
        {...(props as Omit<RLFCPropsModel<ButtonPropsModel<TType>>, 'ref'>)}
        onPress={async () => {
          const result = await onPress?.();
          result && dataSet(result);
          handleToggle(!isOpen);
          return result;
        }}
      />

      <Modal
        isFullSize={isFullSize}
        isOpen={isOpen}
        onToggle={handleToggle}
        ref={ref}
        title={title ?? (isAsyncText(props.children) ? t(props.children) : undefined)}>
        {element({ data, onClose: () => handleToggle(false) })}
      </Modal>
    </>
  );
};
