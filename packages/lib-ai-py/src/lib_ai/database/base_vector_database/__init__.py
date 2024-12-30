
from lib_ai.database.base_vector_database.base_vector_database_models import (
    BaseVectorDatabaseModel,
    BaseVectorDatabaseParamsModel,
)
from lib_ai.model.language.text_embedding import TextEmbedding
from lib_shared.core.utils.get_item import get_item


class BaseVectorDatabase(BaseVectorDatabaseModel):
    _embedding: TextEmbedding

    def __init__(
        self,
        params: BaseVectorDatabaseParamsModel,
    ) -> None:
        self._embedding = get_item(params, "embedding")
