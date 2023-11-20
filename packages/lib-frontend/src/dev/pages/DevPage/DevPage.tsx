import { type SFCModel } from '#lib-frontend/core/core.models';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { ScaledNumberField } from '#lib-frontend/data/components/ScaledNumberField/ScaledNumberField';
import { TextField } from '#lib-frontend/data/components/TextField/TextField';
import { type DevPagePropsModel } from '#lib-frontend/dev/pages/DevPage/DevPage.models';

export const DevPage: SFCModel<DevPagePropsModel> = ({ ...props }) => {
  return (
    <>
      <FormContainer
        fields={[
          {
            fields: [
              {
                fields: [
                  { element: <TextField label="test" />, id: 'a' },
                  { element: <TextField />, id: 'b' },
                ],
                id: '1',
              },
              {
                fields: [
                  { element: <ScaledNumberField label="test" />, id: 'c' },
                  { element: <TextField />, id: 'd' },
                ],
                id: '2',
              },
            ],
            id: 'tile',
            label: 'tile',
          },
        ]}
        onSubmit={async (data) => console.warn(data)}
        p
      />
    </>
  );
};
