import { RoutesField } from '@lib-frontend/aroom/components/RoutesField/RoutesField';
import { type RequestFormPagePropsModel } from '@lib-frontend/aroom/pages/RequestForm/RequestForm.models';
import { type TimingFormPageParamsModel } from '@lib-frontend/aroom/pages/TimingFormPage/TimingFormPage.models';
import { SelectField } from '@lib-frontend/core/components/SelectField/SelectField';
import { Text } from '@lib-frontend/core/components/Text/Text';
import { Wrapper } from '@lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib-frontend/core/core.models';
import { FormContainer } from '@lib-frontend/data/components/FormContainer/FormContainer';
import { StepForm } from '@lib-frontend/data/components/StepForm/StepForm';
import { useMapRoutes } from '@lib-frontend/map/hooks/useMapRoutes/useMapRoutes';
import { useRouter } from '@lib-frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '@lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_TYPE } from '@lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { VEHICLE_TYPE } from '@lib-shared/aroom/aroom.constants';
import { type GetRouteInputModel } from '@lib-shared/map/resources/MapRoute/MapRouteService/MapRouteService.models';

export const RequestFormPage: LFCModel<RequestFormPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { getRoute } = useMapRoutes();
  const { push } = useRouter();

  const handleSubmit = async (input: GetRouteInputModel): Promise<void> => {
    const result = await getRoute(input);
    push<TimingFormPageParamsModel | null>({ params: result, pathname: 'dev/aroom/timing' });
  };

  return (
    <Wrapper
      {...wrapperProps}
      flex>
      <StepForm<GetRouteInputModel>
        onSubmit={handleSubmit}
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
                topElement={() => <Text type={FONT_TYPE.HEADLINE}>Add your stops</Text>}
              />
            ),
            id: 'coordinates',
            title: 'coordinates',
          },
          {
            element: (
              <FormContainer
                fields={[
                  {
                    element: (
                      <SelectField
                        options={[
                          { id: VEHICLE_TYPE.CAR, label: 'Car' },
                          { id: VEHICLE_TYPE.CARGO_VAN, label: 'Cargo Van' },
                          { id: VEHICLE_TYPE.SPRINTER_VAN, label: 'Sprinter Van' },
                        ]}
                      />
                    ),
                    id: 'vehicle',
                  },
                ]}
                topElement={() => <Text type={FONT_TYPE.HEADLINE}>Choose your vehical type</Text>}
              />
            ),
            id: 'vehicle',
            title: 'vehicle',
          },
        ]}
      />
    </Wrapper>
  );
};