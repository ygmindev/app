import { Button } from '@lib/frontend/core/components/Button/Button';
import { PreviewList } from '@lib/frontend/core/components/PreviewList/PreviewList';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { _FileInput } from '@lib/frontend/data/components/FileInput/_FileInput';
import { type _FileInputRefModel } from '@lib/frontend/data/components/FileInput/_FileInput.models';
import {
  type FileInputPropsModel,
  type FileInputRefModel,
} from '@lib/frontend/data/components/FileInput/FileInput.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useImperativeHandle, useRef } from 'react';
// import { fileSizeFormat } from '@lib/shared/data/utils/fileSizeFormat/fileSizeFormat';

export const FileInput: RLFCModel<FileInputRefModel, FileInputPropsModel> = ({
  defaultValue,
  isButton = true,
  isMultiple,
  label,
  onChange,
  ref,
  value,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation();
  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue,
    onChange,
    value,
  });

  const inputRef = useRef<_FileInputRefModel>(null);

  // TODO: other fields
  useImperativeHandle(ref, () => ({
    open: inputRef.current?.open,
  }));

  return (
    <Wrapper
      {...wrapperProps}
      s>
      <_FileInput
        isButton={isButton}
        isMultiple={isMultiple}
        onChange={valueControlledSet}
        ref={inputRef}
        value={valueControlled}>
        {(isActive) => (
          <Button
            elementState={isActive ? ELEMENT_STATE.ACTIVE : undefined}
            icon="upload">
            {t('core:browse')}
          </Button>
        )}
      </_FileInput>

      <PreviewList
        items={valueControlled?.map(({ id, name }) => ({
          // description: fileSizeFormat(size ?? 0),
          icon: 'image',
          id,
          title: name,
        }))}
        // rightElement={({ item }) => (
        //   <Button
        //     color={THEME_COLOR.ERROR}
        //     icon="trash"
        //     isHidden={!valueControlled?.length}
        //     onPress={() =>
        //       valueControlledSet(valueControlled?.filter((file) => file.id !== item.id))
        //     }
        //     size={THEME_SIZE.SMALL}
        //   />
        // )}
      />
    </Wrapper>
  );
};
