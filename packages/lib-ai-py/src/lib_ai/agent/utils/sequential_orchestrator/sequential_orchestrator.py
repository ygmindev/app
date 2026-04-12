# template version: 1.0.0


from lib_ai.agent.utils.orchestrator import Orchestrator
from lib_ai.agent.utils.orchestrator.orchestrator_models import TState
from lib_ai.agent.utils.sequential_orchestrator.sequential_orchestrator_models import (
    SequentialOrchestratorModel,
)


class SequentialOrchestrator(Orchestrator[TState], SequentialOrchestratorModel): ...
