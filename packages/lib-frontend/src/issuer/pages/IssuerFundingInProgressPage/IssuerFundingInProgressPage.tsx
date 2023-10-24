import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { DataBoundary } from '#lib-frontend/data/components/DataBoundary/DataBoundary';
import { FundingTile } from '#lib-frontend/funding/components/FundingTile/FundingTile';
import { useFundingResource } from '#lib-frontend/funding/hooks/useFundingResource/useFundingResource';
import { useCurrentGroup } from '#lib-frontend/group/hooks/useCurrentGroup/useCurrentGroup';
import { type IssuerFundingInProgressPagePropsModel } from '#lib-frontend/issuer/pages/IssuerFundingInProgressPage/IssuerFundingInProgressPage.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const IssuerFundingInProgressPage: LFCModel<IssuerFundingInProgressPagePropsModel> = ({
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { getMany } = useFundingResource();
  const currentGroup = useCurrentGroup();
  return (
    <MainLayout
      {...wrapperProps}
      s>
      <DataBoundary
        id="fundings"
        query={async () => getMany({ filter: [] })}>
        {({ data }) => (
          <Wrapper s>
            {data?.result?.map((funding) => (
              <FundingTile
                funding={funding}
                image={currentGroup?.logo}
                key={funding._id}
              />
            ))}
          </Wrapper>
        )}
      </DataBoundary>
    </MainLayout>
  );
};
