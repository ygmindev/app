from lib_quant.curve.curve.zero_curve.zero_curve import ZeroCurve


class FlatCurve(ZeroCurve):
    rate: float

    def initialize(
        self,
    ) -> None:
        super().initialize(
            tenors=[0.0, 50.0],
            rates=[self.rate, self.rate],
        )
        self.is_initialized = True
