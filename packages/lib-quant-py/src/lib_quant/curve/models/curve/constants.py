from enum import StrEnum

import QuantLib as ql


class Compounding(StrEnum):
    COMPOUNDED = "COMPOUNDED"
    CONTINUOUS = "CONTINUOUS"
    SIMPLE = "SIMPLE"

    @property
    def ql(self) -> ql.CompoundOption:
        return {
            Compounding.COMPOUNDED: ql.Compounded,
            Compounding.CONTINUOUS: ql.Continuous,
            Compounding.SIMPLE: ql.Simple,
        }[self]
