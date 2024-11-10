from __future__ import annotations

from abc import ABC, abstractmethod
from typing import Sequence

from lib_ai.data.base_data import BaseData
from lib_ai.transform.utils.transformer.base_transformer.base_transformer_models import (
    BaseTransformerModel,
)
from lib_shared.core.utils.not_implemented_exception import NotImplementedException


class BaseTransformer[
    TData: BaseData,
    TFit,
](
    BaseTransformerModel[
        TData,
        TFit,
    ]
):
    def fit(
        self,
        _data: TData,
        _params: TFit | None = None,
    ) -> None: ...

    def fit_transform(
        self,
        data: TData,
        params: TFit | None = None,
    ) -> TData:
        self.fit(data, params)
        return self.transform(data)
