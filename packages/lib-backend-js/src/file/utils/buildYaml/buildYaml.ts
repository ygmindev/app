import { _buildYaml } from '@lib/backend/file/utils/buildYaml/_buildYaml';
import {
  type BuildYamlModel,
  type BuildYamlParamsModel,
} from '@lib/backend/file/utils/buildYaml/buildYaml.models';

export const buildYaml = (params: BuildYamlParamsModel): BuildYamlModel => _buildYaml(params);
