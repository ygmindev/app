import type { GenerateConfigModel, _GenerateConfigModel } from '@lib/config/core/generate/_generate.models';
import { jsPackage } from '@tool/generate/generators/jsPackage/jsPackage';

const generateConfig: GenerateConfigModel = ({
  'js-package': jsPackage,
});

export default generateConfig;
