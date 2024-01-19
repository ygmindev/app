import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { _Map } from '@lib/frontend/map/components/Map/_Map';
import { type MapPropsModel } from '@lib/frontend/map/components/Map/Map.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';

export const Map: LFCModel<MapPropsModel> = ({
  height,
  latitude,
  longitude,
  width,
  zoom,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();
  return (
    <Wrapper
      {...wrapperProps}
      border
      height={height}
      isOverflowHidden
      round
      width={width}>
      <_Map
        latitude={latitude}
        longitude={longitude}
        zoom={zoom}></_Map>
    </Wrapper>
  );
};
