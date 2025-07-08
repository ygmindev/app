import { Button } from '@lib/frontend/core/components/Button/Button';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { ItemList } from '@lib/frontend/core/components/ItemList/ItemList';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { TEXT_CASING } from '@lib/frontend/core/components/Text/Text.constants';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { _FileInput } from '@lib/frontend/data/components/FileInput/_FileInput';
import {
  type FileInputPropsModel,
  type FileInputRefModel,
} from '@lib/frontend/data/components/FileInput/FileInput.models';
import { FocusableWrapper } from '@lib/frontend/data/components/FocusableWrapper/FocusableWrapper';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR, THEME_SIZE, THEME_SIZE_MORE } from '@lib/frontend/style/style.constants';
import { BORDER_STYLE } from '@lib/frontend/style/utils/styler/borderStyler/borderStyler.constants';
import { fileSizeFormat } from '@lib/shared/data/utils/fileSizeFormat/fileSizeFormat';

export const FileInput: RLFCModel<FileInputRefModel, FileInputPropsModel> = ({
  defaultValue,
  isMultiple,
  label,
  onChange,
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
  return (
    <ItemList
      {...wrapperProps}
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
          onPress={() => valueControlledSet(valueControlled?.filter((file) => file.id !== item.id))}
          size={THEME_SIZE.SMALL}
        />
      )}
      title={label}
      topElement={
        <_FileInput
          isMultiple={isMultiple}
          onChange={valueControlledSet}
          value={valueControlled}>
          {(isActive) => (
            <FocusableWrapper
              border
              borderStyle={BORDER_STYLE.DASHED}
              borderWidth
              elementState={isActive ? ELEMENT_STATE.ACTIVE : undefined}
              isAlign
              isCenter
              isRow
              mTop
              p>
              <Icon
                color={THEME_COLOR.PRIMARY}
                fontSize={THEME_SIZE_MORE.XLARGE}
                icon="upload"
              />

              <Text
                casing={
                  TEXT_CASING.CAPITALIZE
                }>{`${t('core:dropFilesHere')} ${t('core:or')}`}</Text>

              <Button
                elementState={isActive ? ELEMENT_STATE.ACTIVE : undefined}
                icon="folder"
                isHidden>
                {t('core:browse')}
              </Button>
            </FocusableWrapper>
          )}
        </_FileInput>
      }
    />
  );
};
