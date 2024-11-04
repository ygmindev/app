from typing import Mapping

import torch
from lib_ai.core.utils.chunks import chunks
from lib_ai.data.array_data import ArrayData
from lib_ai.data.matrix_data import MatrixData
from lib_ai.data.matrix_data.matrix_data_models import MatrixDataModel
from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.dataset.xy_matrix_dataset import XYMatrixDataset
from lib_ai.model.base_model.base_model_constants import OPTIMIZER
from lib_ai.model.regression.base_regression.base_regression_models import (
    BaseRegressionScoreModel,
)
from lib_ai.model.regression.linear_regression._linear_regression_models import (
    _LinearRegressionEvalParamsModel,
    _LinearRegressionFitParamsModel,
    _LinearRegressionModel,
)
from lib_ai.model.utils.early_stopping import EarlyStopping
from lib_ai.model.utils.neural_network import NeuralNetwork
from lib_ai.scoring.scorer.mse_scorer import mse_scorer
from lib_shared.core.utils.logger import logger
from lib_shared.core.utils.not_found_exception import NotFoundException
from torch.nn import Linear, Module
from torch.optim.adam import Adam
from torch.optim.sgd import SGD


class _LinearRegression(NeuralNetwork, _LinearRegressionModel):
    def __init__(self) -> None:
        super().__init__()
