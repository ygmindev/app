import { type FCModel } from '@lib/frontend/core/core.models';
import { _PageContainer } from '@lib/frontend/framework/containers/PageContainer/_PageContainer';
import { type PageContainerPropsModel } from '@lib/frontend/framework/containers/PageContainer/PageContainer.models';

export const PageContainer: FCModel<PageContainerPropsModel> = ({ children }) => (
  <_PageContainer>{children}</_PageContainer>
);
