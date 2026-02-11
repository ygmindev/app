import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { FileInput } from '@lib/frontend/data/components/FileInput/FileInput';
import { type FileInputRefModel } from '@lib/frontend/data/components/FileInput/FileInput.models';
import {
  type StorageInputPropsModel,
  type StorageInputRefModel,
} from '@lib/frontend/data/components/StorageInput/StorageInput.models';
import { useStorageResource } from '@lib/frontend/data/hooks/useStorageResource/useStorageResource';
import { useHttp } from '@lib/frontend/http/hooks/useHttp/useHttp';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { type FileModel } from '@lib/shared/data/data.models';
import { useImperativeHandle, useRef, useState } from 'react';

export const StorageInput: RLFCModel<StorageInputRefModel, StorageInputPropsModel> = ({
  ref,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const [fileValue, fileValueSet] = useState<Array<FileModel>>([]);
  const fileRef = useRef<FileInputRefModel>(null);
  const { createMany } = useStorageResource();
  const http = useHttp();

  useImperativeHandle(ref, () => ({
    beforeSubmit: async () => {
      const { result } = await createMany({
        form: fileValue.map(({ file }) => ({ filename: file.name, filetype: file.type })),
      });
      if (result?.length) {
        return filterNil(
          await Promise.all(
            result.map(async (v) => {
              if (v.uri) {
                const file = fileValue.find((vv) => vv.file.name === v.filename);
                if (file?.file) {
                  await http.put({
                    params: file.file,
                    request: { headers: { 'Content-Type': file.file.type } },
                    url: v.uri,
                  });
                  return v.src;
                }
              }
              return null;
            }),
          ),
        );
      }
    },
  }));

  return (
    <Wrapper {...wrapperProps}>
      <FileInput
        onChange={fileValueSet}
        ref={fileRef}
        value={fileValue}
      />
    </Wrapper>
  );
};
