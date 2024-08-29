import {
  type ReplaceSpecialCharactersModel,
  type ReplaceSpecialCharactersParamsModel,
} from '@lib/shared/core/utils/replaceSpecialCharacters/replaceSpecialCharacters.models';

export const replaceSpecialCharacters = (
  ...[value, to = '']: ReplaceSpecialCharactersParamsModel
): ReplaceSpecialCharactersModel => value.replace(/[^a-zA-Z0-9]/g, to);
