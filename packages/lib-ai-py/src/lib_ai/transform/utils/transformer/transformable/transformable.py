from __future__ import annotations

from lib_shared.core.utils.base_model.base_model import BaseModel

from lib_ai.data.base_data import BaseData


class Transformable[
    TData: BaseData,
    TFit,
](BaseModel):
    def fit(
        self,
        data: TData,
        params: TFit | None = None,
    ) -> None: ...

    def transform(
        self,
        data: TData,
    ) -> TData: ...

    def fit_transform(
        self,
        data: TData,
        params: TFit | None = None,
    ) -> TData:
        self.fit(data, params)
        return self.transform(data)
