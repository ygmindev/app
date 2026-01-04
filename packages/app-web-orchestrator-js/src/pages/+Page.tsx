import { type FCModel } from '@lib/frontend/core/core.models';
import { View } from 'react-native';

export const Page: FCModel = () => (
  <View style={{ backgroundColor: 'red', flex: 1, height: 500, width: 500 }} />
);

// import { type FCModel } from '@lib/frontend/core/core.models';
// import { PageContainer } from '@lib/frontend/framework/containers/PageContainer/PageContainer';
// import { Root } from '@lib/frontend/root/containers/Root/Root';

// import { routes } from '../config/routes';

// export const Page: FCModel = () => (
//   <PageContainer>
//     <Root routes={routes} />
//   </PageContainer>
// );
