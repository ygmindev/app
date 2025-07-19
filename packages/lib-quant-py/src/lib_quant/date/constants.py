from enum import Enum


class DAY_COUNT(Enum):
    ACT_360 = "ACT/360"
    ACT_365 = "ACT/365"
    THIRTY_360 = "THIRTY/360"
    ACT_ACT = "ACT/ACT"


class BUSINESSS_DAY_CONVENTION(Enum):
    FOLLOWING = "Following"
    MODIFIED_FOLLOWING = "Modified_Following"
    PRECEDING = "Preceding"
    MODIFIED_PREFEDING = "Modified_Preceding"
    UNADJUSTED = "Unadjusted"


class CALENDAR(Enum):
    US = "US"
    UK = "UK"


class FREQUENCY(Enum):
    ANNUAL = "ANNUAL"
    MONTHLY = "MONTHLY"
    QUARTERLY = "QUARTERLY"
    SEMI_ANNUAL = "SEMI_ANNUAL"
