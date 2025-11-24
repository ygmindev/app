import { screenConfig } from '@lib/config/screen/screen';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { _Screen } from '@lib/shared/crawling/utils/Screen/_Screen';
import {
  type ScreenModel,
  type ScreenParamsModel,
} from '@lib/shared/crawling/utils/Screen/Screen.models';

export class Screen extends _Screen implements ScreenModel {
  constructor(params: ScreenParamsModel = {}) {
    super(merge([params, screenConfig.params()]));
  }
}
