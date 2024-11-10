from __future__ import annotations

from abc import ABC, abstractmethod

from lib_ai.data.base_data import BaseData


class BaseTransformerModel[
    TData: BaseData,
    TFit,
](ABC):
    @abstractmethod
    def fit(
        self,
        _data: TData,
        _params: TFit | None = None,
    ) -> None: ...

    @abstractmethod
    def fit_transform(
        self,
        data: TData,
        params: TFit | None = None,
    ) -> TData: ...

    @abstractmethod
    def transform(
        self,
        data: TData,
    ) -> TData: ...
