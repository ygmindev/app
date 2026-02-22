import { _yamlBuild } from '@lib/backend/file/utils/yamlBuild/_yamlBuild';
import {
  type YamlBuildModel,
  type YamlBuildParamsModel,
} from '@lib/backend/file/utils/yamlBuild/yamlBuild.models';

export const yamlBuild = (params: YamlBuildParamsModel): YamlBuildModel => _yamlBuild(params);
