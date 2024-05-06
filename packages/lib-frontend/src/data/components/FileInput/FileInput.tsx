import { Button } from '@lib/frontend/core/components/Button/Button';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Title } from '@lib/frontend/core/components/Title/Title';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type RLFCPropsModel } from '@lib/frontend/core/core.models';
import { _FileInput } from '@lib/frontend/data/components/FileInput/_FileInput';
import {
  type FileInputPropsModel,
  type FileInputRefModel,
} from '@lib/frontend/data/components/FileInput/FileInput.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  THEME_COLOR,
  THEME_ROLE,
  THEME_SIZE,
  THEME_SIZE_MORE,
} from '@lib/frontend/style/style.constants';
import { numberFormat } from '@lib/shared/data/utils/numberFormat/numberFormat';
import { type ForwardedRef, forwardRef, type ReactElement } from 'react';

export const FileInput = forwardRef(
  (
    {
      defaultValue,
      isMultiple,
      label,
      onChange,
      value,
      ...props
    }: RLFCPropsModel<FileInputRefModel, FileInputPropsModel>,
    _: ForwardedRef<FileInputRefModel>,
  ): ReactElement<RLFCPropsModel<FileInputRefModel, FileInputPropsModel>> => {
    const { wrapperProps } = useLayoutStyles({ props });
    const { t } = useTranslation();
    const { valueControlled, valueControlledSet } = useValueControlled({
      defaultValue,
      onChange,
      value,
    });
    return (
      <_FileInput
        isMultiple={isMultiple}
        onChange={valueControlledSet}
        value={valueControlled}>
        <Wrapper
          {...wrapperProps}
          border
          isRow
          p
          round
          s>
          <Wrapper
            flex
            isCenter
            s>
            <Icon
              color={THEME_COLOR.PRIMARY}
              fontSize={THEME_SIZE_MORE.XLARGE}
              icon="upload"
            />

            <Text>{`${t('core:dragAndDrop')} ${t('core:or')}`}</Text>

            <Button
              icon="folder"
              isHidden>
              {label ?? t('core:browse')}
            </Button>
          </Wrapper>

          <Wrapper
            border
            isVerticalScrollable
            p
            round
            s={THEME_SIZE.SMALL}>
            {valueControlled?.length ? (
              valueControlled.map(({ name, size }) => (
                <Title
                  icon="image"
                  key={name}
                  leftElement={
                    <Button
                      color={THEME_COLOR.ERROR}
                      icon="trash"
                      onPress={() =>
                        valueControlledSet(valueControlled.filter((file) => file.name !== name))
                      }
                      size={THEME_SIZE.SMALL}
                    />
                  }
                  title={
                    <Wrapper>
                      <Text>{name}</Text>

                      {size && (
                        <Text
                          colorRole={
                            THEME_ROLE.MUTED
                          }>{`${numberFormat(size, { multiplier: 1 / 1e3, precision: 0 })}KB`}</Text>
                      )}
                    </Wrapper>
                  }
                />
              ))
            ) : (
              <Wrapper
                flex
                isCenter
                s>
                <Icon
                  colorRole={THEME_ROLE.MUTED}
                  fontSize={THEME_SIZE_MORE.XLARGE}
                  icon="empty"
                />

                <Text colorRole={THEME_ROLE.MUTED}>{t('core:nothingToShow')}</Text>
              </Wrapper>
            )}
          </Wrapper>
        </Wrapper>
      </_FileInput>
    );
  },
);
