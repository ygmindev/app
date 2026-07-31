from lib_ai.data.base_data.base_data_models import BaseDataModel
from lib_ai.dataset.base_dataset.base_dataset_models import BaseDatasetModel


class XYDatasetModel[
    TX: BaseDataModel,
    TY: BaseDataModel | None,
](BaseDatasetModel):
    _x: TX
    _y: TY | None = None

    @property
    def x(self) -> TX: ...

    @x.setter
    def x(
        self,
        value: TX,
    ) -> None: ...

    @property
    def y(self) -> TY | None: ...

    @y.setter
    def y(
        self,
        value: TY | None = None,
    ) -> None: ...
