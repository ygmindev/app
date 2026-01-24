import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { type KfnFooterPropsModel } from '@lib/frontend/kfn/containers/KfnFooter/KfnFooter.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR, THEME_SIZE, THEME_SIZE_MORE } from '@lib/frontend/style/style.constants';
import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';

const YEAR = new DateTime().getFullYear();

export const KfnFooter: LFCModel<KfnFooterPropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      p
      s>
      <Wrapper
        isAlign
        isCenter
        isRow
        s>
        <Icon
          color={THEME_COLOR.SECONDARY}
          fontSize={THEME_SIZE_MORE.XLARGE}
          icon="instagram"
        />

        <Icon
          color={THEME_COLOR.SECONDARY}
          fontSize={THEME_SIZE_MORE.XLARGE}
          icon="email"
        />
      </Wrapper>

      <Wrapper
        isAlign
        isCenter
        isRow>
        <Wrapper
          isAlign
          isCenter
          isRow>
          <Icon
            fontSize={THEME_SIZE.SMALL}
            icon="copyright"
          />
          <Text fontSize={THEME_SIZE.SMALL}>{`${YEAR} Korean Finance Network, LLC.`}</Text>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};
