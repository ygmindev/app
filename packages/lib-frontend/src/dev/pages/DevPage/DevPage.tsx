import { type SFCModel } from '#lib-frontend/core/core.models';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
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
                  { element: <TextField />, id: '1' },
                  { element: <TextField />, id: '2' },
                ],
                id: '1',
              },
              {
                fields: [
                  { element: <TextField />, id: '2' },
                  { element: <TextField />, id: '3' },
                ],
                id: '2',
              },
            ],
            id: 'tile',
            label: 'tile',
          },
        ]}
        p
      />
    </>
  );
};
