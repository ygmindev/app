import {
  type TimingFormPageParamsModel,
  type TimingFormPagePropsModel,
} from '@lib/frontend/aroom/pages/TimingFormPage/TimingFormPage.models';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { Map } from '@lib/frontend/map/components/Map/Map';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';

export const TimingFormPage: LFCModel<TimingFormPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { location } = useRouter<TimingFormPageParamsModel>();
  return (
    <MainLayout
      {...wrapperProps}
      flex
      p
      s>
      <Text fontStyle={FONT_STYLE.HEADLINE}>Choose delivery timing</Text>

      {location.params?.priceTiers.map(({ price, timing }) => (
        <Wrapper
          border
          isAlign
          isCenter
          isRow
          key={timing}
          p
          round
          s>
          <Wrapper
            flex
            isAlign
            isRow>
            <Icon icon={timing === 'rush' ? 'thunder' : 'time'} />

            <Text fontSize={THEME_SIZE.LARGE}>{timing}</Text>
          </Wrapper>

          <Text
            color={THEME_COLOR.SUCCESS}
            fontStyle={FONT_STYLE.TITLE}>{`$${price}`}</Text>
        </Wrapper>
      ))}

      <Wrapper isCenter>
        <Map
          height={300}
          latitude={40.71486}
          longitude={-74.0142}
          width={500}
          zoom={11}
        />
      </Wrapper>
    </MainLayout>
  );
};
