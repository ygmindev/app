import { Button } from '@lib/frontend/core/components/Button/Button';
import { PreviewList } from '@lib/frontend/core/components/PreviewList/PreviewList';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type RSFCModel } from '@lib/frontend/core/core.models';
import { _FileInput } from '@lib/frontend/data/components/FileInput/_FileInput';
import { type _FileInputRefModel } from '@lib/frontend/data/components/FileInput/_FileInput.models';
import {
  type FileInputPropsModel,
  type FileInputRefModel,
} from '@lib/frontend/data/components/FileInput/FileInput.models';
import { useStorageResource } from '@lib/frontend/data/hooks/useStorageResource/useStorageResource';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { FILE_STATUS } from '@lib/shared/data/data.constants';
import { useImperativeHandle, useRef } from 'react';
// import { fileSizeFormat } from '@lib/shared/data/utils/fileSizeFormat/fileSizeFormat';

export const FileInput: RSFCModel<FileInputRefModel, FileInputPropsModel> = ({
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
  const { presignMany, remove } = useStorageResource();

  // TODO: other fields
  useImperativeHandle(ref, () => ({
    open: inputRef.current?.open,
  }));

  const handleDelete = async (item: WithIdModel): Promise<void> => {
    const file = valueControlled?.find((v) => v.id === item.id);
    if (file?.key) await remove?.(file.key);
    valueControlledSet(valueControlled?.filter((v) => v.id !== item.id));
  };

  return (
    <Wrapper
      {...wrapperProps}
      s>
      <_FileInput
        isButton={isButton}
        isMultiple={isMultiple}
        onChange={valueControlledSet}
        onPresignMany={presignMany}
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
        items={valueControlled?.map(({ id, name, preview, src, status }) => ({
          // description: fileSizeFormat(size ?? 0),
          icon: 'image',
          id,
          image: status === FILE_STATUS.UPLOADING ? preview : (src ?? preview),
          title: name,
        }))}
        onDelete={handleDelete}
      />
    </Wrapper>
  );
};
