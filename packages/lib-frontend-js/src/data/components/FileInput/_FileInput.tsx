import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { View } from '@lib/frontend/core/components/View/View';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import {
  type _FileInputPropsModel,
  type _FileInputRefModel,
} from '@lib/frontend/data/components/FileInput/_FileInput.models';
import { type ValuePropsModel } from '@lib/frontend/data/data.models';
import { type FileModel } from '@lib/shared/data/data.models';
import { asUploadButton, type UploadButtonProps } from '@rpldy/upload-button';
import { Uploady, useBatchAddListener, useUploady } from '@rpldy/uploady';
import { type MouseEvent, useCallback, useImperativeHandle } from 'react';

export const _FileInput: RLFCModel<_FileInputRefModel, _FileInputPropsModel> = ({
  children,
  isMultiple,
  ...props
}) => (
  <Uploady
    destination={{ url: '' }}
    multiple={isMultiple}
    noPortal>
    <_Component {...props}>{children}</_Component>
  </Uploady>
);

const _Component: RLFCModel<_FileInputRefModel, _FileInputPropsModel> = ({
  children,
  isButton = true,
  onChange,
  ref,
  value,
}) => {
  const { showFileUpload } = useUploady();

  useImperativeHandle(
    ref,
    () => ({
      open: showFileUpload,
    }),
    [showFileUpload],
  );

  return (
    <Activatable>
      {(isActive) => (
        <View>
          <_Button
            autoUpload={false}
            extraProps={{ isButton, onChange, value }}>
            {children?.(isActive)}
          </_Button>
        </View>
      )}
    </Activatable>
  );
};

const _Button = asUploadButton(
  ({
    children,
    isButton,
    onChange,
    onClick,
  }: UploadButtonProps & ValuePropsModel<Array<FileModel>> & { isButton?: boolean }) => {
    const handlePress = useCallback((e: MouseEvent) => onClick?.(e), [onClick]);

    useBatchAddListener((batch) =>
      onChange?.(
        batch.items.map((item) => ({ file: item.file as File, id: item.id, name: item.id })),
      ),
    );

    return isButton ? (
      <div
        onClick={handlePress}
        style={{ cursor: 'pointer', flex: 1 }}>
        {children}
      </div>
    ) : (
      <></>
    );
  },
);
