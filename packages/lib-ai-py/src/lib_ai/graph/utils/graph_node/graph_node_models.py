# template version: 1.0.0


from lib_ai.agent.utils.streamable.streamable_models import StreamableModel, TState


class GraphNodeModel(StreamableModel[TState]):
    def edges(self) -> tuple[str, str]: ...

    def markup(self) -> str: ...
