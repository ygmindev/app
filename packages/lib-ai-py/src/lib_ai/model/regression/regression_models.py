from abc import ABC

from lib_ai.model.base_model.base_model_models import BaseModelModel


class RegressionModel[TTrain](BaseModelModel[TTrain], ABC):
    pass
