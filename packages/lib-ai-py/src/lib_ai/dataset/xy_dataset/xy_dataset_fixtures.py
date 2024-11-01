from lib_ai.data.tabular_data.tabular_data_fixtures import (
    TABULAR_DATA_FIXTURE_1,
    TABULAR_DATA_FIXTURE_2,
)
from lib_ai.dataset.xy_dataset import XYDataset

XY_MATRIX_DATASET_FIXTURE_1 = XYDataset(
    x=TABULAR_DATA_FIXTURE_1,
)

XY_MATRIX_DATASET_FIXTURE_2 = XYDataset(
    x=TABULAR_DATA_FIXTURE_2,
)
