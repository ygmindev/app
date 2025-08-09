export enum FREQUENCY {
  DAILY = 'daily',
  MONTHLY = 'monthly',
  QUARTERLY = 'quarterly',
  WEEKLY = 'weekly',
}

export enum WEEKDAY {
  FRIDAY = 'fri',
  MONDAY = 'mon',
  SATURDAY = 'sat',
  SUNDAY = 'sun',
  THURSDAY = 'thu',
  TUESDAY = 'tue',
  WEDNESDAY = 'wed',
}

export enum DATETIME_FORMAT {
  DATE = 'M/d/yyyy',
  DATE_TIME_MINUTES = 'M/d/yyyy HH:mm',
  DATE_TIME_SECONDS = 'M/d/yyyy HH:mm:ss',
  DATE_TIME_SECONDS_SHORT = 'M/d/yy HH:mm:ss',
  ISO = 'YYYY-MM-DDTHH:mm:ss.sssZ',
  TIME_MINUTES = 'HH:mm',
  TIME_SECONDS = 'HH:mm:ss',
  YEAR = 'yyyy',
}
