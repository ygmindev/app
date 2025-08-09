import {
  type _BuildYamlModel,
  type _BuildYamlParamsModel,
} from '@lib/backend/file/utils/buildYaml/_buildYaml.models';
import YAML from 'yaml';

export const _buildYaml = (params: _BuildYamlParamsModel): _BuildYamlModel =>
  YAML.stringify(params);
