import { type _FileInputPropsModel } from '@lib/frontend/data/components/FileInput/_FileInput.models';
import { type InputPropsModel, type InputRefModel } from '@lib/frontend/data/data.models';
import { type FileModel } from '@lib/shared/data/data.models';

export type FileInputPropsModel = Pick<InputPropsModel, 'label'> & _FileInputPropsModel;

export type FileInputRefModel = InputRefModel<Array<FileModel>>;
