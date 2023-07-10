import { type IconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import { type DirectionModel, type ElementStatePropsModel } from '#lib-frontend/core/core.models';

export type RotatableIconPropsModel = ElementStatePropsModel &
  Omit<IconPropsModel, 'icon'> & {
    directionActive?: DirectionModel;
    directionInactive?: DirectionModel;
  };
