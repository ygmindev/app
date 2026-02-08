import { Button } from '@lib/frontend/core/components/Button/Button';
import { ItemList } from '@lib/frontend/core/components/ItemList/ItemList';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { _FileInput } from '@lib/frontend/data/components/FileInput/_FileInput';
import {
  type FileInputPropsModel,
  type FileInputRefModel,
} from '@lib/frontend/data/components/FileInput/FileInput.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { fileSizeFormat } from '@lib/shared/data/utils/fileSizeFormat/fileSizeFormat';

export const FileInput: RLFCModel<FileInputRefModel, FileInputPropsModel> = ({
  defaultValue,
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

  // const { create } = useStorageResource();

  // useImperativeHandle(ref, () => ({
  //   beforeSubmit: async () => {
  //     await create({form: { filename:  }})
  //     return null;
  //   },
  // }));

  return (
    <Wrapper
      {...wrapperProps}
      s>
      <_FileInput
        isMultiple={isMultiple}
        onChange={valueControlledSet}
        value={valueControlled}>
        {(isActive) => (
          <Button
            elementState={isActive ? ELEMENT_STATE.ACTIVE : undefined}
            icon="upload">
            {t('core:browseFiles')}
          </Button>
        )}
      </_FileInput>

      <ItemList
        items={valueControlled?.map(({ id, name, size }) => ({
          description: fileSizeFormat(size ?? 0),
          icon: 'image',
          id,
          title: name,
        }))}
        rightElement={({ item }) => (
          <Button
            color={THEME_COLOR.ERROR}
            icon="trash"
            isHidden={!valueControlled?.length}
            onPress={() =>
              valueControlledSet(valueControlled?.filter((file) => file.id !== item.id))
            }
            size={THEME_SIZE.SMALL}
          />
        )}
        title={label}
      />
    </Wrapper>
  );
};
