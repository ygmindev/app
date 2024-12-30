from abc import ABC, abstractmethod
from typing import List, TypedDict

from lib_ai.data.text_data import TextData
from lib_ai.database.base_vector_database.base_vector_database_constants import (
    BaseVectorDatabaseSearchAlgorithm,
)
from lib_ai.model.language.text_embedding import TextEmbedding


class BaseVectorDatabaseParamsModel(TypedDict):
    embedding: TextEmbedding


class BaseVectorDatabaseSearchResultModel(TypedDict):
    content: str
    score: float


class BaseVectorDatabaseModel(ABC):
    @abstractmethod
    def __init__(
        self,
        _params: BaseVectorDatabaseParamsModel,
    ) -> None: ...

    @abstractmethod
    def search(
        self,
        query: str,
        algorithm: BaseVectorDatabaseSearchAlgorithm = BaseVectorDatabaseSearchAlgorithm.COSINE,
        top_n: int = 1,
    ) -> List[BaseVectorDatabaseSearchResultModel]: ...

    @abstractmethod
    def upsert(
        self,
        data: TextData,
    ) -> None: ...
