from datetime import datetime

import QuantLib as ql
from lib_shared.core.utils.private_field.private_field import PrivateField

from lib_quant.curve.curve.curve import Curve
from lib_quant.pricing.utils.quote.quote import Quote


class BootstrappableCurve(Curve):
    _helper: ql.RateHelper = PrivateField()

    def _get_helper(
        self,
        quote: Quote,
    ) -> ql.RateHelper:
        raise NotImplementedError("Subclasses must implement this method")

    def initialize(
        self,
        quotes: list[Quote],
    ) -> None:
        if not quotes:
            raise ValueError("no quotes provided")
        helpers = [self._get_helper(q) for q in quotes]
        self._curve = self.interpolation.ql(
            ql.Date(self.as_of_date.day, self.as_of_date.month, self.as_of_date.year),
            helpers,
            self.calendar.day_count.ql,
        )
        self._curve.enableExtrapolation()
        self._handle.linkTo(self._curve)
        self.is_initialized = True

    def zero_rate(
        self,
        timestamp: datetime,
    ) -> float:
        if not self.is_initialized:
            raise ValueError("Curve is not initialized")
        return self._curve.zeroRate(
            ql.Date(timestamp.day, timestamp.month, timestamp.year),
            self.calendar.day_count.ql,
            ql.Annual,
            ql.Continuous,
        ).rate()
