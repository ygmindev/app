from typing import Unpack

from lib_ai.scoring.scorer.auroc_scorer._auroc_scorer import _auroc_scorer
from lib_ai.scoring.scorer.auroc_scorer.auroc_scorer_models import (
    AurocScorerModel,
    AurocScorerParamsModel,
)


def auroc_scorer(*params: Unpack[AurocScorerParamsModel]) -> AurocScorerModel:
    return _auroc_scorer(*params)
