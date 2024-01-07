import { Button } from '#lib-frontend/core/components/Button/Button';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { StepForm } from '#lib-frontend/data/components/StepForm/StepForm';
import { TextField } from '#lib-frontend/data/components/TextField/TextField';
import { type ScratchPadPagePropsModel } from '#lib-frontend/dev/pages/ScratchPadPage/ScratchPadPage.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const ScratchPadPage: LFCModel<ScratchPadPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation();
  return (
    <Wrapper
      {...wrapperProps}
      flex
      p>
      <StepForm
        steps={[
          {
            element: (
              <FormContainer
                bottomElement={() => <Button>{t('core:addStop')}</Button>}
                fields={[
                  {
                    element: (
                      <TextField
                        icon="location"
                        label={t('Stop')}
                      />
                    ),
                    id: 'from',
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
