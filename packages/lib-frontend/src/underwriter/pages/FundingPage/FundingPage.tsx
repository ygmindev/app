import { useRef } from 'react';

import { type ModalRefModel } from '#lib-frontend/core/components/Modal/Modal.models';
import { ModalButton } from '#lib-frontend/core/components/ModalButton/ModalButton';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { FundingTile } from '#lib-frontend/funding/components/FundingTile/FundingTile';
import { FundingFilter } from '#lib-frontend/funding/containers/FundingFilter/FundingFilter';
import { FUNDING } from '#lib-frontend/funding/funding.constants';
import { useFundingResource } from '#lib-frontend/funding/hooks/useFundingResource/useFundingResource';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { ConnectionBoundary } from '#lib-frontend/resource/components/ConnectionBoundary/ConnectionBoundary';
import { type ConnectionBoundaryRefModel } from '#lib-frontend/resource/components/ConnectionBoundary/ConnectionBoundary.models';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import { FLEX_JUSTIFY } from '#lib-frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { type FundingDetailPageParamsModel } from '#lib-frontend/underwriter/pages/FundingDetailPage/FundingDetailPage.models';
import { type FundingPagePropsModel } from '#lib-frontend/underwriter/pages/FundingPage/FundingPage.models';
import { FUNDING_FIXTURES } from '#lib-shared/funding/resources/Funding/Funding.fixtures';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';
import { type FilterModel } from '#lib-shared/resource/utils/Filter/Filter.models';

export const FundingPage: LFCModel<FundingPagePropsModel> = ({ ...props }) => {
  const { t } = useTranslation([FUNDING]);
  const { wrapperProps } = useLayoutStyles({ props });
  const { push } = useRouter();
  const { getConnection } = useFundingResource();

  const modalRef = useRef<ModalRefModel>(null);
  const dataRef = useRef<ConnectionBoundaryRefModel<FundingModel>>(null);

  const handleFilter = async (filter: Array<FilterModel<FundingModel>>): Promise<void> => {
    modalRef.current?.toggle(false);
    dataRef.current?.paramsSet({ filter, pagination: { first: 10 } });
  };

  return (
    <MainLayout
      {...wrapperProps}
      p
      s>
      <Wrapper
        isRowAlign
        justify={FLEX_JUSTIFY.END}>
        <ModalButton
          element={({ onCancel }) => (
            <FundingFilter
              onCancel={onCancel}
              onSubmit={handleFilter}
            />
          )}
          icon="filter"
          ref={modalRef}
          size={THEME_SIZE.SMALL}
          title={t('core:filter')}>
          {t('core:filter_plural')}
        </ModalButton>
      </Wrapper>

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
        query={async (input) => getConnection(input)}
        ref={dataRef}>
        {({ data }) =>
          (data?.result?.edges?.length ?? 0) > 0 && (
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
          )
        }
      </ConnectionBoundary>
    </MainLayout>
  );
};
