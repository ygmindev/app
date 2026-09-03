import QuantLib as ql
from lib_shared.core.utils.field.field import Field
from lib_shared.core.utils.private_field.private_field import PrivateField

from lib_quant.datetime.constants import Frequency
from lib_quant.instruments.fixed_income.credit.credit.credit import Credit


class FloatingRateCredit(Credit[ql.FloatingRateBond]):
    frequency: Frequency = Field(default=Frequency.QUARTERLY)

    _security: "ql.FloatingRateBond | ql.AmortizingFloatingRateBond" = PrivateField()
    _day_count: "ql.DayCounter | None" = PrivateField()

    def post_init(self) -> None:
        super().post_init()
        if self.rate.benchmark is None:
            raise ValueError("missing benchmark")

        if self.amortization_type is not None:
            self._security = ql.AmortizingFloatingRateBond(
                self.calendar.settlement_days,
                self.notionals,
                self._schedule.ql,
                self.rate.benchmark.ql,
                self._day_count,
                self.calendar.business_day_convention.ql,
                self.rate.fixing_days or 0,
                [] if self.rate.gearing is None else [self.rate.gearing],
                [] if self.rate.spread is None else [self.rate.spread],
                [] if self.rate.cap is None else [self.rate.cap],
                [] if self.rate.floor is None else [self.rate.floor],
                False,  # self.in_arrears,
                ql.Date(
                    self.issue_date.day,
                    self.issue_date.month,
                    self.issue_date.year,
                ),
            )
        else:
            self._security = ql.FloatingRateBond(
                self.calendar.settlement_days,
                self.size,
                self._schedule.ql,
                self.rate.benchmark.ql,
                self._day_count,
                self.calendar.business_day_convention.ql,
                self.rate.fixing_days or 0,
                [] if self.rate.gearing is None else [self.rate.gearing],
                [] if self.rate.spread is None else [self.rate.spread],
                [] if self.rate.cap is None else [self.rate.cap],
                [] if self.rate.floor is None else [self.rate.floor],
                False,  # self.in_arrears,
                100.0,
                ql.Date(
                    self.issue_date.day, self.issue_date.month, self.issue_date.year
                ),
            )
