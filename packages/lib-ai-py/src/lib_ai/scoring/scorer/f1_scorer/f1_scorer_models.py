# template version: 1.0.0


from lib_ai.scoring.utils.scorable.scorable_models import (
    DecoratedScorerModel,
    ScorerModel,
)

_F1ScorerModel = ScorerModel


F1ScorerModel = DecoratedScorerModel[_F1ScorerModel]
