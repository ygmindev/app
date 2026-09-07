import datetime
from typing import Self

from lib_shared.core.utils.private_field.private_field import PrivateField

from lib_quant.cashflow.cashflow_schedule.cashflow_schedule import CashflowSchedule
from lib_quant.datetime.constants import Frequency
from lib_quant.datetime.utils.period.period import Period
from lib_quant.features.prepayment.base_provision.base_provision import BaseProvision
from lib_quant.features.prepayment.open_provision.open_provision import OpenProvision


class SequenceProvision(BaseProvision):
    segments: list[tuple[Period, BaseProvision]]

    _segments_by_date: list[tuple[datetime.date, BaseProvision]] = PrivateField(
        default_factory=list
    )

    def bind(
        self,
        start_date: datetime.date,
        cashflows: CashflowSchedule,
        frequency: Frequency,
    ) -> Self:
        super().bind(
            start_date=start_date,
            cashflows=cashflows,
            frequency=frequency,
        )
        cursor = self._start_date
        if cursor is not None:
            segments = []
            for period, provision in self.segments:
                provision.bind(
                    start_date=cursor,
                    cashflows=cashflows,
                    frequency=frequency,
                )
                cursor = self.calendar.advance(period, cursor)
                segments.append((cursor, provision))
            self._segments_by_date = segments
        return self

    def _active(
        self,
        date: datetime.date,
    ) -> BaseProvision:
        for dt, provision in self._segments_by_date:
            if date < dt:
                return provision
        return OpenProvision()

    def _is_prepayable(
        self,
        date: datetime.date,
    ) -> bool:
        provision = self._active(date)
        return provision.is_prepayable(date)

    def penalty(
        self,
        date: datetime.date,
        prepaid_principal: float,
    ) -> float:
        provision = self._active(date)
        return provision.penalty(date, prepaid_principal)
