import {
  type _YamlBuildModel,
  type _YamlBuildParamsModel,
} from '@lib/backend/file/utils/yamlBuild/_yamlBuild.models';
import YAML from 'yaml';

export const _yamlBuild = (params: _YamlBuildParamsModel): _YamlBuildModel =>
  YAML.stringify(params);
