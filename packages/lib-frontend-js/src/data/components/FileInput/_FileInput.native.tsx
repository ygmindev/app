import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type _FileInputPropsModel } from '@lib/frontend/data/components/FileInput/_FileInput.models';
import { type FileInputProps } from 'FileInput';
import { FileInput } from 'FileInput';

export const _FileInput = composeComponent<_FileInputPropsModel, FileInputProps>({
  Component: FileInput,

  getProps: ({ children }) => ({
    children,
  }),
});
