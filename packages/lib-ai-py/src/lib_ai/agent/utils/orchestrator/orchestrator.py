# template version: 1.0.0

from lib_shared.core.utils.base_model import BaseModel

from .orchestrator_models import OrchestratorModel, TState


class Orchestrator(BaseModel, OrchestratorModel[TState]):
    name: str
