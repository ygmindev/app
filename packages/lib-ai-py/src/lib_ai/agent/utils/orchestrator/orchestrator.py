# template version: 1.0.0


from .orchestrator_models import OrchestratorModel, TState


class Orchestrator(OrchestratorModel[TState]): ...
