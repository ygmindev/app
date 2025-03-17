import { type FormContainerPropsModel } from '@lib/frontend/data/components/FormContainer/FormContainer.models';
import { NumberInput } from '@lib/frontend/data/components/NumberInput/NumberInput';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';

// TODO: move to shared
export type FormContainerFixtureModel = {
  number: number;
  string: string;
  stringOptional?: string;
};

export const FORM_CONTAINER_PROPS_FIXTURE: FormContainerPropsModel<FormContainerFixtureModel> = {
  fields: [
    { element: <TextInput />, id: 'string' },
    { element: <NumberInput />, id: 'number' },
  ],
};
