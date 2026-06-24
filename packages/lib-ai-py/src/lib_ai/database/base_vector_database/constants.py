from enum import Enum


class BaseVectorDatabaseSearchAlgorithm(Enum):
    COSINE = "cosine"
    EUCLIDEAN = "euclidean"
