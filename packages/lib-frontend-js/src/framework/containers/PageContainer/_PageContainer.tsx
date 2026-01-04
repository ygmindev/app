import { type FCModel } from '@lib/frontend/core/core.models';
import { type _PageContainerPropsModel } from '@lib/frontend/framework/containers/PageContainer/_PageContainer.models';
// import { Head } from 'vike-react/Head';

export const _PageContainer: FCModel<_PageContainerPropsModel> = ({ children }) => (
  <>
    {/* <Head>
      <title>hello world</title>
    </Head> */}

    {children}
  </>
);
