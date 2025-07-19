import datetime

import QuantLib as ql

from lib_quant.date.constants import FREQUENCY
from lib_quant.date.utils.date_convention import DateConvention
from lib_quant.pricing.utils.bond_price.bond_price_models import BondPriceModel
from lib_quant.security.credit.bond.fixed_rate_bond._fixed_rate_bond_models import (
    _FixedRateBondModel,
)


class _FixedRateBond(_FixedRateBondModel):
    security: ql.FixedRateBond | None = None

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        
        match self.coupon_frequency:
            case FREQUENCY.ANNUAL:
                period = ql.Period(1, ql.Years)
            case FREQUENCY.MONTHLY:
                period = ql.Period(1, ql.Months)
            case FREQUENCY.QUARTERLY:
                period = ql.Period(3, ql.Months)
            case _:
                period = ql.Period(6, ql.Months)
        self._frequency = period.frequency()

        issue_date = ql.Date(self.issue_date.day, self.issue_date.month, self.issue_date.year)
        maturity_date = ql.Date(self.maturity_date.day, self.maturity_date.month, self.maturity_date.year)
        schedule = ql.Schedule(
            issue_date,
            maturity_date,
            period,
            ql.UnitedStates(ql.UnitedStates.NYSE),
            ql.Unadjusted,
            ql.Unadjusted,
            ql.DateGeneration.Backward,
            False,
        )

        self.security = ql.FixedRateBond(
            self.settlement_days,
            self.face_value,
            schedule,
            [self.coupon],
            ql.Actual360(),
        )

    def yield_from_price(self,
                         price: BondPriceModel,
                         as_of_date: datetime.date,
                         date_convention: DateConvention = DateConvention()) -> float:
        if self.security is None:
            raise ValueError("Bond security is not available")
        _as_of_date = ql.Date(as_of_date.day, as_of_date.month, as_of_date.year)
        return self.security.bondYield(
            price.value,
            date_convention._day_count,
            ql.Compounded,
            self._frequency,
            _as_of_date,
        )
