from lib_ai.model.language.text_generation._text_generation_models import (
    _TextGenerationEvalParamsModel,
    _TextGenerationFitParamsModel,
    _TextGenerationParamsModel,
    _TextGenerationPredParamsModel,
)
from lib_ai.model.language.text_generation.text_generation_models import (
    TextGenerationModel,
)


class KnowledgeParamsModel(_TextGenerationParamsModel): ...


class KnowledgeFitParamsModel(_TextGenerationFitParamsModel): ...


class KnowledgeEvalParamsModel(_TextGenerationEvalParamsModel): ...


class KnowledgePredParamsModel(_TextGenerationPredParamsModel): ...


class KnowledgeModel(
    TextGenerationModel,
): ...
