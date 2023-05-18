import type { _GenerateConfigModel } from '@lib/config/core/generate/_generate.models';
import { jsPackage } from '@tool/generate/generators/jsPackage/jsPackage';

const _generateConfig: _GenerateConfigModel = ({
  'js-package': jsPackage,
});

export default _generateConfig;