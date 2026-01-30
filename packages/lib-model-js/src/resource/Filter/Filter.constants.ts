export enum FILTER_CONDITION {
  EQUAL = '$eq',
  GRATER_THAN_EQUAL = '$gte',
  GREATER_THAN = '$gt',
  IN = '$in',
  LESS_THAN = '$lt',
  LESS_THAN_EQUAL = '$lte',
  LIKE = '$like',
  NOT_EQUAL = '$ne',
  NOT_IN = '$nin',
}

export enum FILTER_COMBINATION {
  AND = '$and',
  OR = '$or',
}
