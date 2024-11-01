from lib_ai.data.matrix_data import MatrixData
from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.dataset.xy_matrix_dataset.xy_matrix_dataset_models import (
    XYMatrixDatasetModel,
)


class XYMatrixDataset(XYDataset[MatrixData, MatrixData], XYMatrixDatasetModel): ...
