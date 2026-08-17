import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { View } from '@lib/frontend/core/components/View/View';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import {
  type _FileInputPropsModel,
  type _FileInputRefModel,
} from '@lib/frontend/data/components/FileInput/_FileInput.models';
import { type StorageModel } from '@lib/model/data/Storage/Storage.models';
import { FILE_STATUS } from '@lib/shared/data/data.constants';
import { type FileModel } from '@lib/shared/data/data.models';
import { asUploadButton, type UploadButtonProps } from '@rpldy/upload-button';
import {
  Uploady,
  useBatchAddListener,
  useBatchFinalizeListener,
  useItemCancelListener,
  useItemErrorListener,
  useItemFinishListener,
  useItemProgressListener,
  useRequestPreSend,
  useUploady,
} from '@rpldy/uploady';
import { type MouseEvent, useCallback, useEffect, useImperativeHandle, useRef } from 'react';

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
  onPresignMany,
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
          <_Button extraProps={{ isButton, onChange, onPresignMany, value }}>
            {children?.(isActive)}
          </_Button>
        </View>
      )}
    </Activatable>
  );
};

const revokePreview = (entry?: FileModel) => {
  if (entry?.preview) URL.revokeObjectURL(entry.preview);
};

const _Button = asUploadButton(
  ({
    children,
    isButton,
    onChange,
    onClick,
    onPresignMany,
    value,
  }: UploadButtonProps & _FileInputPropsModel & { isButton?: boolean }) => {
    const handlePress = useCallback((e: MouseEvent) => onClick?.(e), [onClick]);

    const filesRef = useRef<Record<string, FileModel>>({});
    const batchRef = useRef<
      Record<string, Promise<Record<string, Partial<StorageModel> | null>> | undefined>
    >({});

    const emit = useCallback(() => {
      onChange?.(Object.values(filesRef.current));
    }, [onChange]);

    const path = useCallback((id: string, changes: Partial<FileModel>) => {
      const entry = filesRef.current[id];
      if (!entry) return;
      filesRef.current[id] = { ...entry, ...changes };
    }, []);

    const patchEmit = useCallback(
      (id: string, changes: Partial<FileModel>) => {
        path(id, changes);
        emit();
      },
      [path, emit],
    );

    useEffect(() => {
      const current = value ?? [];
      const ids = new Set(current.map((file) => file.id));
      current.forEach((file) => {
        if (!filesRef.current[file.id]) {
          filesRef.current[file.id] = file;
        }
      });
      Object.keys(filesRef.current).forEach((id) => {
        if (!ids.has(id)) {
          revokePreview(filesRef.current[id]);
          delete filesRef.current[id];
        }
      });
    }, [value]);

    useEffect(
      () => () => {
        Object.values(filesRef.current).forEach(revokePreview);
      },
      [],
    );

    useBatchAddListener((batch) => {
      batch.items.forEach((item) => {
        const file = item.file as File;
        filesRef.current[item.id] = {
          file,
          id: item.id,
          name: file.name,
          preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined,
          status: FILE_STATUS.UPLOADING,
        };
      });
      emit();

      const itemsF = batch.items.map((v) => ({
        filename: v.file.name,
        filetype: v.file.type || 'application/octet-stream',
      }));
      batchRef.current[batch.id] = onPresignMany?.(itemsF)
        ?.then((result) =>
          batch.items.reduce<Record<string, Partial<StorageModel> | null>>(
            (r, item, index) => ({ ...r, [item.id]: result[index] }),
            {},
          ),
        )
        ?.catch((e) => {
          batch.items.forEach((item) => path(item.id, { status: FILE_STATUS.ERROR }));
          emit();
          throw e;
        });
    });

    useBatchFinalizeListener((batch) => {
      delete batchRef.current[batch.id];
    });

    useRequestPreSend(async ({ items }) => {
      const [item] = items;

      let signed;
      try {
        signed = (await batchRef.current[item.batchId])?.[item.id];
      } catch {
        return false;
      }
      if (!signed) {
        patchEmit(item.id, { status: FILE_STATUS.ERROR });
        return false;
      }

      const file = item.file as File;
      const contentType = file.type || 'application/octet-stream';
      patchEmit(item.id, { key: signed.key, src: signed.src });

      return {
        options: {
          destination: { headers: { 'Content-Type': contentType }, url: signed.uri },
          method: 'PUT',
          sendWithFormData: false,
        },
      };
    });

    useItemProgressListener((item) => {
      const entry = filesRef.current[item.id];
      if (!entry || entry.status === FILE_STATUS.DONE) return;
      if (Math.abs((entry.progress ?? 0) - item.completed) < 5) return;
      patchEmit(item.id, { progress: item.completed });
    });

    useItemFinishListener((item) => {
      patchEmit(item.id, { progress: 100, status: FILE_STATUS.DONE });
    });

    const markError = useCallback(
      (item: { id: string }) => patchEmit(item.id, { status: FILE_STATUS.ERROR }),
      [patchEmit],
    );

    useItemErrorListener(markError);
    useItemCancelListener(markError);

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
