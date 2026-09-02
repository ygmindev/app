import datetime
from collections import defaultdict
from typing import Any

import QuantLib as ql
from lib_shared.core.utils.field.field import Field
from lib_shared.core.utils.private_field.private_field import PrivateField

from lib_quant.cashflow.cashflow.cashflow import Cashflow
from lib_quant.cashflow.cashflow_event.cashflow_event import CashflowEvent
from lib_quant.cashflow.utils.schedule.schedule import Schedule
from lib_quant.curve.bootstrappable_curve.bootstrappable_curve import (
    BootstrappableCurve,
)
from lib_quant.datetime.constants import Direction, Frequency
from lib_quant.rates.rate.rate import Rate
from lib_quant.security.credit.bond.bond import Bond


class FixedRateBond(Bond):
    coupon: float
    frequency: Frequency = Field(default=Frequency.SEMI_ANNUAL)

    _security: "ql.FixedRateBond" = PrivateField()
    _day_count: "ql.DayCounter | None" = PrivateField()

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
        if self.issue_date is None:
            raise ValueError("missing issue_date")
        if self.maturity_date is None:
            raise ValueError("missing maturity_date")

        schedule = Schedule(
            start_date=self.issue_date,
            end_date=self.maturity_date,
            step=self.frequency.unit_period,
            direction=Direction.BACKWARD,
            calendar=self.calendar,
        )
        self._day_count = self.calendar.day_count.ql_schedule(schedule)
        self._security = ql.FixedRateBond(
            self.calendar.settlement_days,
            self.size,
            schedule.ql,
            [self.coupon],
            self._day_count,
            self.calendar.business_day_convention.ql,
            100.0,
            ql.Date(self.issue_date.day, self.issue_date.month, self.issue_date.year),
        )

    @property
    def ql(self) -> ql.FixedRateBond:
        return self._security

    def yield_from_price(
        self,
        value: float,
    ) -> float:
        return self.ql.bondYield(
            value,
            self._day_count,
            ql.Compounded,
            self.frequency.ql,
        )

    def price_from_yield(
        self,
        value: float,
    ) -> float:
        return self.ql.cleanPrice(
            value,
            self._day_count,
            ql.Compounded,
            self.frequency.ql,
        )

    def price_from_zspread(
        self,
        value: float,
        curve: BootstrappableCurve,
    ) -> float:
        return ql.BondFunctions.cleanPrice(
            self.ql,
            curve.curve,
            value,
            self._day_count,
            ql.Compounded,
            self.frequency.ql,
        )

    def zspread_from_price(
        self,
        value: float,
        curve: BootstrappableCurve,
    ) -> float:
        return ql.BondFunctions.zSpread(
            self.ql,
            ql.BondPrice(value, ql.BondPrice.Clean),
            curve.curve,
            self._day_count,
            ql.Compounded,
            self.frequency.ql,
        )

    @property
    def cashflows(self) -> Cashflow:
        by_date = defaultdict(
            lambda: {"interest": 0.0, "principal": 0.0, "nominal": None}
        )

        security = self.ql

        for cf in security.cashflows():
            d = cf.date()
            coupon = ql.as_coupon(cf)
            if coupon is not None:
                by_date[d]["interest"] += coupon.amount()
                by_date[d]["nominal"] = coupon.nominal()
            else:
                by_date[d]["principal"] += cf.amount()

        notionals = security.notionals()
        events: list[CashflowEvent] = []
        running_balance = notionals[0] if notionals else self.size

        for d in sorted(by_date.keys()):
            row = by_date[d]
            balance_start = (
                row["nominal"] if row["nominal"] is not None else running_balance
            )
            balance_end = balance_start - row["principal"]

            events.append(
                CashflowEvent(
                    date=datetime.date(d.year(), d.month(), d.dayOfMonth()),
                    balance_start=balance_start,
                    balance_end=balance_end,
                    principal=row["principal"],
                    interest=row["interest"],
                )
            )
            running_balance = balance_end

        return Cashflow(events=events)
