from lib_ai.model.base_model import BaseModel
from lib_ai.model.utils.neural_network._neural_network import _NeuralNetwork
from lib_ai.model.utils.neural_network.neural_network_models import NeuralNetworkModel


class NeuralNetwork(
    _NeuralNetwork,
    NeuralNetworkModel,
    BaseModel,
): ...
