import { type FCModel } from '@lib/frontend/core/core.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type _FileInputPropsModel } from '@lib/frontend/data/components/FileInput/_FileInput.models';
import { type ValuePropsModel } from '@lib/frontend/data/data.models';
import { type FileModel } from '@lib/shared/data/data.models';
import { asUploadButton, type UploadButtonProps } from '@rpldy/upload-button';
import { UploadDropZone } from '@rpldy/upload-drop-zone';
import { Uploady, type UploadyProps } from '@rpldy/uploady';
import { useBatchAddListener } from '@rpldy/uploady';
import { cloneElement, type MouseEvent, type ReactElement, useCallback } from 'react';

export const _FileInput = composeComponent<_FileInputPropsModel, UploadyProps>({
  Component: Uploady,

  getProps: ({ children, isMultiple, onChange, value }) => ({
    children: (
      <Button
        autoUpload={false}
        extraProps={{ onChange, value }}>
        {children as ReactElement}
      </Button>
    ),
    destination: { url: '' },
    multiple: isMultiple,
    noPortal: true,
  }),
});

const Component: FCModel<UploadButtonProps & ValuePropsModel<Array<FileModel>>> = ({
  children,
  onChange,
  onClick,
}) => {
  useBatchAddListener(
    (batch) =>
      onChange &&
      onChange(
        batch.items.map((item) => ({
          name: item.file.name,
          size: item.file.size,
          type: item.file.type,
          url: item.url,
        })),
      ),
  );
  const handleClick = useCallback((e: MouseEvent) => onClick && onClick(e), [onClick]);
  return (
    children && (
      <UploadDropZone>
        {cloneElement(children as ReactElement, { onPress: handleClick })}
      </UploadDropZone>
    )
  );
};

const Button = asUploadButton(Component);
