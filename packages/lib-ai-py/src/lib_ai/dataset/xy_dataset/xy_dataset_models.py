from __future__ import annotations

from abc import abstractmethod

from lib_ai.data.base_data.base_data_models import BaseDataModel
from lib_ai.dataset.base_dataset.base_dataset_models import BaseDatasetModel


class XYDatasetModel[
    TX: BaseDataModel,
    TY: BaseDataModel | None,
](BaseDatasetModel):
    @abstractmethod
    def __init__(
        self,
        x: TX,
        y: TY | None = None,
    ) -> None: ...

    @property
    @abstractmethod
    def x(self) -> TX: ...

    @x.setter
    @abstractmethod
    def x(
        self,
        value: TX,
    ) -> None: ...

    @property
    @abstractmethod
    def y(self) -> TY | None: ...

    @y.setter
    @abstractmethod
    def y(
        self,
        value: TY | None = None,
    ) -> None: ...
