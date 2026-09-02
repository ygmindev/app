from typing import Any

import QuantLib as ql
from lib_shared.core.utils.field.field import Field
from lib_shared.core.utils.private_field.private_field import PrivateField

from lib_quant.datetime.constants import Frequency
from lib_quant.rates.rate.rate import Rate
from lib_quant.security.credit.bond.bond import Bond


class FixedRateBond(Bond[ql.FixedRateBond]):
    coupon: float
    frequency: Frequency = Field(default=Frequency.SEMI_ANNUAL)

    _security: "ql.FixedRateBond" = PrivateField()

    def __init__(
        self,
        *args: Any,
        **kwargs: Any,
    ) -> None:
        super().__init__(
            *args,
            **kwargs,
            rate=Rate(spread=kwargs.get("coupon", 0.0)),
        )

    def post_init(self) -> None:
        super().post_init()
        self._security = ql.FixedRateBond(
            self.calendar.settlement_days,
            self.size,
            self._schedule.ql,
            [self.coupon],
            self._day_count,
            self.calendar.business_day_convention.ql,
            100.0,
            ql.Date(self.issue_date.day, self.issue_date.month, self.issue_date.year),
        )
        if self.curve is not None:
            self.set_curve(self.curve)
