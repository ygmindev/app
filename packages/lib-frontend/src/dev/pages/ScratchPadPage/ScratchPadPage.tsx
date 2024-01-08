import { useState } from 'react';

import { animatable } from '#lib-frontend/animation/utils/animatable/animatable';
import { RoutesField } from '#lib-frontend/aroom/components/RoutesField/RoutesField';
import { _Icon } from '#lib-frontend/core/components/Icon/_Icon';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { DropdownField } from '#lib-frontend/data/components/DropdownField/DropdownField';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { StepForm } from '#lib-frontend/data/components/StepForm/StepForm';
import { type ScratchPadPagePropsModel } from '#lib-frontend/dev/pages/ScratchPadPage/ScratchPadPage.models';
import { useMapQuery } from '#lib-frontend/map/hooks/useMapQuery/useMapQuery';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

const _Text = animatable({ Component: Text });

const _Icon2 = animatable({ Component: _Icon });

export const ScratchPadPage: LFCModel<ScratchPadPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { data, query } = useMapQuery();
  console.warn(data);

  const [toggle, setTottle] = useState(false);

  const animation = {
    states: {
      active: { color: 'green', fontSize: 20, height: 60, width: 60 },
      disabled: {
        color: 'black',
        fontSize: 10,
        height: 30,
        width: 30,
      },
    },
  };

  return (
    <Wrapper
      {...wrapperProps}
      flex
      p>
      <DropdownField
        label={'test'}
        options={[
          { id: '1', label: '1' },
          { id: '2', label: '2' },
        ]}
      />

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

// import { useState } from 'react';

// import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
// import { type LFCModel } from '#lib-frontend/core/core.models';
// import { type ScratchPadPagePropsModel } from '#lib-frontend/dev/pages/ScratchPadPage/ScratchPadPage.models';
// import { Map } from '#lib-frontend/map/components/Map/Map';
// import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
// import { type ChatMessageModel } from '#lib-shared/chat/chat.models';

// export const ScratchPadPage: LFCModel<ScratchPadPagePropsModel> = ({ ...props }) => {
//   const { wrapperProps } = useLayoutStyles({ props });
//   return (
//     <Wrapper
//       {...wrapperProps}
//       flex
//       p>
//       <Map
//         height={500}
//         latitude={40.714268}
//         longitude={-74.015428}
//         width={500}
//         zoom={11}
//       />
//     </Wrapper>
//   );
// };
