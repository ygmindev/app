import { _ErrorBoundary } from '@lib/frontend/core/components/ErrorBoundary/_ErrorBoundary';
import type { ErrorBoundaryPropsModel } from '@lib/frontend/core/components/ErrorBoundary/ErrorBoundary.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import type { FCModel } from '@lib/frontend/core/core.models';

export const ErrorBoundary: FCModel<ErrorBoundaryPropsModel> = ({
  Fallback,
  children,
  onError,
}) => {
  return (
    <_ErrorBoundary
      Fallback={() => <Text>Error?</Text>}
      onError={onError}>
      {children}
    </_ErrorBoundary>
  );
};

// import { Button } from '@lib/frontend/core/components/Button/Button';
// import { _ErrorBoundary } from '@lib/frontend/core/components/ErrorBoundary/_ErrorBoundary';
// import type { ErrorBoundaryPropsModel } from '@lib/frontend/core/components/ErrorBoundary/ErrorBoundary.models';
// import { Icon } from '@lib/frontend/core/components/Icon/Icon';
// import type { ICONS } from '@lib/frontend/core/components/Icon/Icon.constants';
// import { Text } from '@lib/frontend/core/components/Text/Text';
// import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
// import type { FCModel } from '@lib/frontend/core/core.models';
// import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
// import { THEME_SIZE } from '@lib/frontend/style/style.constants';
// import { CORE } from '@lib/shared/core/core.constants';
// import type { HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
// import { HTTP_STATUS_CODE } from '@lib/shared/http/errors/HttpError/HttpError.constants';
// import { useCallback } from 'react';

// export const ErrorBoundary: FCModel<ErrorBoundaryPropsModel> = ({
//   Fallback,
//   children,
//   onError,
// }) => {
//   const { t } = useTranslation([CORE]);

//   const _getError = useCallback((error?: Error) => {
//     if (error) {
//       const [icon, message] = ((): [keyof typeof ICONS, string] => {
//         if (['Network Error'].includes(error.message)) {
//           return ['offline', t('core:messages.errorOffline')];
//         }

//         switch ((error as HttpError).statusCode) {
//           case HTTP_STATUS_CODE.UNAUTHORIZED:
//             return ['lock', t('core:messages.errorUnauthorized')];
//           case HTTP_STATUS_CODE.FORBIDDEN:
//             return ['ban', t('core:messages.errorForbidden')];
//           default:
//             return ['sad', t('core:messages.errorGeneric')];
//         }
//       })();

//       return (
//         <Wrapper
//           isCenter
//           spacing={THEME_SIZE.SMALL}>
//           <Icon
//             icon={icon || 'sad'}
//             size={THEME_SIZE.XLARGE}
//           />

//           <Text>{message || t('core:messages.errorGeneric')}</Text>
//         </Wrapper>
//       );
//     }
//     return null;
//   }, []);

//   return (
//     <_ErrorBoundary
//       Fallback={
//         Fallback ||
//         (({ error, handleReset }) => (
//           <Wrapper
//             grow
//             isCenter
//             spacing>
//             {_getError(error)}

//             <Button
//               icon="refresh"
//               onPress={handleReset}>
//               {t('core:labels.tryAgain')}
//             </Button>
//           </Wrapper>
//         ))
//       }
//       onError={onError}>
//       {children}
//     </_ErrorBoundary>
//   );
// };
