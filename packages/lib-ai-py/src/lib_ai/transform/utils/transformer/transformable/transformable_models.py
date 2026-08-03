from __future__ import annotations

from lib_shared.core.utils.base_model.base_model import BaseModel

from lib_ai.data.base_data.base_data import BaseData


class TransformableModel[
    TData: BaseData,
    TFit = None,
](BaseModel):
    def fit(
        self,
        data: TData,
        params: TFit | None = None,
    ) -> None: ...

    def fit_transform(
        self,
        data: TData,
        params: TFit | None = None,
    ) -> TData: ...

    def transform(
        self,
        data: TData,
    ) -> TData: ...
