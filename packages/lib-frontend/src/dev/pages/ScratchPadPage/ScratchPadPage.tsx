import { RoutesField } from '#lib-frontend/aroom/components/RoutesField/RoutesField';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { StepForm } from '#lib-frontend/data/components/StepForm/StepForm';
import { TextField } from '#lib-frontend/data/components/TextField/TextField';
import { type ScratchPadPagePropsModel } from '#lib-frontend/dev/pages/ScratchPadPage/ScratchPadPage.models';
import { useMapRoutes } from '#lib-frontend/map/hooks/useMapRoutes/useMapRoutes';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type GetRouteInputModel } from '#lib-shared/map/resources/MapRoute/MapRouteService/MapRouteService.models';

export const ScratchPadPage: LFCModel<ScratchPadPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { getRoute } = useMapRoutes();

  return (
    <Wrapper
      {...wrapperProps}
      flex>
      <StepForm<GetRouteInputModel>
        onSubmit={async (data) => console.warn(data)}
        steps={[
          {
            element: (
              <FormContainer
                fields={[
                  {
                    element: <RoutesField />,
                    id: 'coordinates',
                  },
                ]}
              />
            ),
            id: 'location',
            title: 'location',
          },
          {
            element: (
              <FormContainer
                fields={[
                  {
                    element: <TextField />,
                    id: 'test',
                  },
                ]}
              />
            ),
            id: 'test',
            title: 'test',
          },
        ]}
        // topElement={
        //   <Wrapper isCenter>
        //     <Map
        //       height={200}
        //       latitude={40.71486}
        //       longitude={-74.0142}
        //       width={300}
        //       zoom={11}
        //     />
        //   </Wrapper>
        // }
      />
    </Wrapper>
  );
};
