import { RoutesInput } from '@lib/frontend/aroom/components/RoutesInput/RoutesInput';
import { SelectInput } from '@lib/frontend/data/components/SelectInput/SelectInput';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { StepForm } from '@lib/frontend/data/components/StepForm/StepForm';
import { type ScratchPadPagePropsModel } from '@lib/frontend/dev/pages/ScratchPadPage/ScratchPadPage.models';
import { useMapRoutes } from '@lib/frontend/map/hooks/useMapRoutes/useMapRoutes';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { VEHICLE_TYPE } from '@lib/shared/aroom/aroom.constants';
import { type GetRouteInputModel } from '@lib/shared/map/resources/MapRoute/MapRouteService/MapRouteService.models';

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
                    element: <RoutesInput />,
                    id: 'coordinates',
                  },
                ]}
                topElement={() => <Text fontStyle={FONT_STYLE.HEADLINE}>Add your stops</Text>}
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
                    element: (
                      <SelectInput
                        options={[
                          { id: VEHICLE_TYPE.CAR, label: 'Car' },
                          { id: VEHICLE_TYPE.CARGO_VAN, label: 'Cargo Van' },
                          { id: VEHICLE_TYPE.SPRINTER_VAN, label: 'Sprinter Van' },
                        ]}
                      />
                    ),
                    id: 'test',
                  },
                ]}
                topElement={() => (
                  <Text fontStyle={FONT_STYLE.HEADLINE}>Choose your vehical type</Text>
                )}
              />
            ),
            id: 'test',
            title: 'test',
          },
        ]}
      />
    </Wrapper>
  );
};
