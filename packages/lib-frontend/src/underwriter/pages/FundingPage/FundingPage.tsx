import { useRef, useState } from 'react';

import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { FilterButton } from '#lib-frontend/data/components/FilterButton/FilterButton';
import { FundingTile } from '#lib-frontend/funding/components/FundingTile/FundingTile';
import { FundingFilter } from '#lib-frontend/funding/containers/FundingFilter/FundingFilter';
import { useFundingResource } from '#lib-frontend/funding/hooks/useFundingResource/useFundingResource';
import { ConnectionBoundary } from '#lib-frontend/resource/components/ConnectionBoundary/ConnectionBoundary';
import { type ConnectionBoundaryRefModel } from '#lib-frontend/resource/components/ConnectionBoundary/ConnectionBoundary.models';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type FundingDetailPageParamsModel } from '#lib-frontend/underwriter/pages/FundingDetailPage/FundingDetailPage.models';
import { type FundingPagePropsModel } from '#lib-frontend/underwriter/pages/FundingPage/FundingPage.models';
import { FUNDING_FIXTURES } from '#lib-shared/funding/resources/Funding/Funding.fixtures';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';
import { type RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type InputModel } from '#lib-shared/resource/utils/Input/Input.models';

export const FundingPage: LFCModel<FundingPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { push } = useRouter();
  const { getConnection } = useFundingResource();
  const [params, paramsSet] =
    useState<InputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, FundingModel>>();

  const dataRef = useRef<ConnectionBoundaryRefModel>(null);

  // const handleFilter = async (filter: Array<FilterModel<FundingModel>>): Promise<void> => {
  //   paramsSet({ filter, pagination: { first: 10 } });
  // };

  const handleFilter = async (data: unknown): Promise<void> => {
    console.warn(data);
    // paramsSet({ filter, pagination: { first: 10 } });
  };

  return (
    <MainLayout
      {...wrapperProps}
      p
      s>
      <FilterButton element={<FundingFilter onSubmit={handleFilter} />} />

      <ConnectionBoundary
        fallbackData={{
          result: {
            edges: FUNDING_FIXTURES.map((node) => ({ cursor: '', node })),
            pageInfo: {
              endCursor: '',
              hasNextPage: false,
              hasPreviousPage: false,
              startCursor: '',
            },
          },
        }}
        id="funding"
        params={params}
        query={getConnection}
        ref={dataRef}>
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
      </ConnectionBoundary>
    </MainLayout>
  );
};
