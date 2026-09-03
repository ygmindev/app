from enum import StrEnum


class AmortizationType(StrEnum):
    INTEREST_ONLY = "INTEREST_ONLY"
    LEVEL_PAY = "LEVEL_PAY"
    STRAIGHT_LINE = "STRAIGHT_LINE"
