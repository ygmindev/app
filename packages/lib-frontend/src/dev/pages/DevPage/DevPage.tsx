import { type FCModel } from '#lib-frontend/core/core.models';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { StepForm } from '#lib-frontend/data/components/StepForm/StepForm';
import { TextField } from '#lib-frontend/data/components/TextField/TextField';
import { type DevPagePropsModel } from '#lib-frontend/dev/pages/DevPage/DevPage.models';

export const DevPage: FCModel<DevPagePropsModel> = () => {
  return (
    <StepForm
      onSubmit={async (data) => console.warn(data)}
      steps={[
        {
          element: (
            <FormContainer fields={[{ element: <TextField label="TSRE 1-1" />, id: 'tsre 11' }]} />
          ),
          id: 'tsre1',
          title: () => 'TSRE 1',
        },
        {
          element: (
            <FormContainer fields={[{ element: <TextField label="TSRE 2-1" />, id: 'tsre 22' }]} />
          ),
          id: 'tsre2',
          title: () => 'TSRE 2',
        },
      ]}
    />
  );
};
