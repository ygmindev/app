from typing import Any

import QuantLib as ql
from lib_shared.core.utils.field.field import Field
from lib_shared.core.utils.private_field.private_field import PrivateField

from lib_quant.cashflow.utils.schedule.schedule import schedule
from lib_quant.datetime.constants import Direction, Frequency
from lib_quant.rates.rate.rate import Rate
from lib_quant.security.credit.bond.bond import Bond


class FixedRateBond(Bond):
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
        if self.issue_date is None:
            raise ValueError("missing issue_date")
        if self.maturity_date is None:
            raise ValueError("missing maturity_date")

        dates = schedule(
            start_date=self.issue_date,
            end_date=self.maturity_date,
            frequency=self.frequency,
            direction=Direction.BACKWARD,
            calendar=self.calendar,
        )
        self._security = ql.FixedRateBond(
            self.calendar.settlement_days,
            self.size,
            ql.Schedule(list(map(lambda x: ql.Date(x.day, x.month, x.year), dates))),
            [self.coupon],
            self.calendar.day_count.ql,
        )

    @property
    def ql(self) -> ql.FixedRateBond:
        return self._security

    # @property
    # def schedule(self) -> CashflowSchedule:
    # result: list[CashflowEvent]
