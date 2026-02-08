import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { View } from '@lib/frontend/core/components/View/View';
import { type FCModel } from '@lib/frontend/core/core.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type _FileInputPropsModel } from '@lib/frontend/data/components/FileInput/_FileInput.models';
import { type ValuePropsModel } from '@lib/frontend/data/data.models';
import { type FileModel } from '@lib/shared/data/data.models';
import { asUploadButton, type UploadButtonProps } from '@rpldy/upload-button';
import { Uploady, type UploadyProps, useBatchAddListener } from '@rpldy/uploady';
import { type MouseEvent, useCallback } from 'react';

export const _FileInput = composeComponent<_FileInputPropsModel, UploadyProps>({
  Component: Uploady,

  getProps: ({ children, isMultiple, onChange, value }) => ({
    children: (
      <Activatable>
        {(isActive) => (
          <View>
            <_Button
              autoUpload={false}
              extraProps={{ onChange, value }}>
              {children?.(isActive)}
            </_Button>
          </View>
        )}
      </Activatable>
    ),
    destination: { url: '' },
    multiple: isMultiple,
    noPortal: true,
  }),
});

const _Component: FCModel<UploadButtonProps & ValuePropsModel<Array<FileModel>>> = ({
  children,
  onChange,
  onClick,
}) => {
  const handlePress = useCallback((e: MouseEvent) => onClick?.(e), [onClick]);

  useBatchAddListener((batch) =>
    onChange?.(
      batch.items.map((item) => ({
        id: item.id,
        name: item.file.name,
        size: item.file.size,
        type: item.file.type,
        url: item.url,
      })),
    ),
  );

  return (
    <div
      onClick={handlePress}
      style={{ cursor: 'pointer', flex: 1 }}>
      {children}
    </div>
  );
};

const _Button = asUploadButton(_Component);
