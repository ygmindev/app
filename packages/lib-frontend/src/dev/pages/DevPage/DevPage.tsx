import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type FCModel } from '#lib-frontend/core/core.models';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { StepForm } from '#lib-frontend/data/components/StepForm/StepForm';
import { TextField } from '#lib-frontend/data/components/TextField/TextField';
import { type DevPagePropsModel } from '#lib-frontend/dev/pages/DevPage/DevPage.models';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const DevPage: FCModel<DevPagePropsModel> = () => {
  const { push } = useRouter();
  return (
    <Wrapper
      grow
      position={SHAPE_POSITION.RELATIVE}>
      <StepForm
        id="test"
        steps={[
          {
            element: <FormContainer fields={[{ element: <TextField label="1" />, id: '1' }]} />,
            id: '1',
          },
          {
            element: <FormContainer fields={[{ element: <TextField label="2" />, id: '2' }]} />,
            id: '2',
          },
          {
            element: <FormContainer fields={[{ element: <TextField label="3" />, id: '3' }]} />,
            id: '3',
          },
        ]}
      />
    </Wrapper>
  );
};
