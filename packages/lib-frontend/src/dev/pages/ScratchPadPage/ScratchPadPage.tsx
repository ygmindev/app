import { RoutesField } from '#lib-frontend/aroom/components/RoutesField/RoutesField';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { StepForm } from '#lib-frontend/data/components/StepForm/StepForm';
import { type ScratchPadPagePropsModel } from '#lib-frontend/dev/pages/ScratchPadPage/ScratchPadPage.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const ScratchPadPage: LFCModel<ScratchPadPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });

  return (
    <Wrapper
      {...wrapperProps}
      flex
      p>
      <StepForm
        onSubmit={async (data) => console.warn(data)}
        steps={[
          {
            element: (
              <FormContainer
                fields={[
                  {
                    element: <RoutesField />,
                    id: 'stops',
                  },
                ]}
              />
            ),
            id: 'location',
            title: 'location',
          },
        ]}
      />
    </Wrapper>
  );
};
