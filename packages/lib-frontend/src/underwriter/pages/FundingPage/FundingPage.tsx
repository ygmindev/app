import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { DataBoundary } from '#lib-frontend/data/components/DataBoundary/DataBoundary';
import { FundingTile } from '#lib-frontend/funding/components/FundingTile/FundingTile';
import { useFundingResource } from '#lib-frontend/funding/hooks/useFundingResource/useFundingResource';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type FundingDetailPageParamsModel } from '#lib-frontend/underwriter/pages/FundingDetailPage/FundingDetailPage.models';
import { type FundingPagePropsModel } from '#lib-frontend/underwriter/pages/FundingPage/FundingPage.models';

export const FundingPage: LFCModel<FundingPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { getConnection } = useFundingResource();
  const { push } = useRouter();

  return (
    <MainLayout
      {...wrapperProps}
      p
      s>
      <DataBoundary
        id="funding"
        query={async () => getConnection({ filter: [], pagination: { first: 10 } })}>
        {({ data }) => (
          <Wrapper s>
            {data?.result?.edges.map(({ node }) => (
              <FundingTile
                funding={node}
                key={node._id}
                onPress={() =>
                  node._id &&
                  push<FundingDetailPageParamsModel>({
                    params: { funding: node },
                    pathname: node._id,
                    root: true,
                  })
                }
              />
            ))}
          </Wrapper>
        )}
      </DataBoundary>
    </MainLayout>
  );
};
