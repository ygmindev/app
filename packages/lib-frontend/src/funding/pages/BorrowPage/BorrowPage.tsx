import { Button } from '#lib-frontend/core/components/Button/Button';
import { Portal } from '#lib-frontend/core/components/Portal/Portal';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { type BorrowPagePropsModel } from '#lib-frontend/funding/pages/BorrowPage/BorrowPage.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const BorrowPage: SFCModel<BorrowPagePropsModel> = ({ children }) => {
  const { t } = useTranslation();
  return (
    <>
      <Portal>
        <Wrapper
          bottom={0}
          isHorizontalCenter
          left={0}
          mBottom
          position={SHAPE_POSITION.ABSOLUTE}
          right={0}>
          <Button
            icon="add"
            isShadow>
            {t('funding:startNewFunding')}
          </Button>
        </Wrapper>
      </Portal>

      {children}
    </>
  );
};
