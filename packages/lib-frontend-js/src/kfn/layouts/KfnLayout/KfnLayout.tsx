import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { KfnFooter } from '@lib/frontend/kfn/containers/KfnFooter/KfnFooter';
import { KfnHeader } from '@lib/frontend/kfn/containers/KfnHeader/KfnHeader';
import { type KfnLayoutPropsModel } from '@lib/frontend/kfn/layouts/KfnLayout/KfnLayout.models';

export const KfnLayout: LFCModel<KfnLayoutPropsModel> = ({ children }) => {
  return (
    <Wrapper
      flex
      grow>
      <KfnHeader />

      <Wrapper
        flex
        isVerticalScrollable>
        {children}
      </Wrapper>

      <KfnFooter />
    </Wrapper>
  );
};
