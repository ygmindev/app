import datetime
from typing import Generic, Self, TypeVar

import QuantLib as ql
from lib_shared.core.utils.field.field import Field
from lib_shared.core.utils.private_field.private_field import PrivateField

from lib_quant.curve.bootstrappable_curve.constants import BootstrappingMethod
from lib_quant.curve.curve.constants import Compounding
from lib_quant.curve.curve.curve import Curve
from lib_quant.datetime.utils.period.period import Period
from lib_quant.pricing.utils.quote.quote.quote import Quote

TType = TypeVar("TType", bound=Quote)


class BootstrappableCurve(
    Curve,
    Generic[TType],
):
    interpolation: BootstrappingMethod = Field(
        default=BootstrappingMethod.PIECEWISE_LOG_CUBIC
    )

    _curve: ql.YieldTermStructure | None = PrivateField(default=None)
    _handle: ql.RelinkableYieldTermStructureHandle = PrivateField(
        default_factory=ql.RelinkableYieldTermStructureHandle
    )

    @property
    def curve(self) -> ql.YieldTermStructure:
        if self._curve is None:
            raise ValueError("Curve is not initialized")
        return self._curve

    @curve.setter
    def curve(self, value: ql.YieldTermStructure) -> None:
        self._curve = value

    @property
    def handle(self) -> ql.RelinkableYieldTermStructureHandle:
        if self._handle is None:
            raise ValueError("Handle is not initialized")
        return self._handle

    @handle.setter
    def handle(self, value: ql.RelinkableYieldTermStructureHandle) -> None:
        self._handle = value

    def _get_helper(
        self,
        quote: TType,
    ) -> ql.RateHelper:
        raise NotImplementedError("Subclasses must implement this method")

    def fit(
        self,
        quotes: list[TType],
    ) -> None:
        if not quotes:
            raise ValueError("no quotes provided")
        helpers = [self._get_helper(q) for q in quotes]
        as_of_date = self.calendar.as_of_date
        self._curve = self.interpolation.ql(
            ql.Date(as_of_date.day, as_of_date.month, as_of_date.year),
            helpers,
            self.calendar.day_count.ql,
        )
        self._curve.enableExtrapolation()
        self._handle.linkTo(self._curve)
        self.is_initialized = True

    def discount_factor(
        self,
        date: datetime.date,
        is_extrapolate: bool = True,
    ) -> float:
        return self.curve.discount(
            ql.Date(date.day, date.month, date.year),
            is_extrapolate,
        )

    def forward_rate(
        self,
        start: datetime.date,
        end: datetime.date,
        compounding: Compounding = Compounding.COMPOUNDED,
    ) -> float:
        return self.curve.forwardRate(
            ql.Date(start.day, start.month, start.year),
            ql.Date(end.day, end.month, end.year),
            self.calendar.day_count.ql,
            compounding.ql,
        )

    def zero_rate(
        self,
        at: datetime.date | Period,
        compounding: Compounding = Compounding.COMPOUNDED,
    ) -> float:
        date = (
            self.calendar.advance(
                at,
                self.calendar.as_of_date,
            )
            if isinstance(at, Period)
            else at
        )
        return self.curve.zeroRate(
            ql.Date(date.day, date.month, date.year),
            self.calendar.day_count.ql,
            compounding.ql,
            ql.Annual,
        ).rate()

    def shifted(
        self,
        bps: float,
    ) -> Self:
        shift = bps / 10000.0
        curve = ql.ZeroSpreadedTermStructure(
            self._curve,
            ql.QuoteHandle(ql.SimpleQuote(shift)),
            ql.Compounded,
            ql.Annual,
        )
        result = type(self)(
            calendar=self.calendar,
            interpolation=self.interpolation,
            is_initialized=self.is_initialized,
        )
        result.curve = curve
        result.handle = ql.RelinkableYieldTermStructureHandle(result.curve)
        return result
