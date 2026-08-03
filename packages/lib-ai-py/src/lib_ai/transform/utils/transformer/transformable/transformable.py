from __future__ import annotations

from lib_ai.data.base_data import BaseData
from lib_ai.transform.utils.transformer.transformable.transformable_models import (
    TransformableModel,
)


class Transformable[
    TData: BaseData,
    TFit,
](
    TransformableModel[
        TData,
        TFit,
    ]
):
    def fit(
        self,
        data: TData,
        params: TFit | None = None,
    ) -> None: ...

    def fit_transform(
        self,
        data: TData,
        params: TFit | None = None,
    ) -> TData:
        self.fit(data, params)
        return self.transform(data)
