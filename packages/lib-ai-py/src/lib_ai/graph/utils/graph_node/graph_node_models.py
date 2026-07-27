# template version: 1.0.0


from lib_shared.core.utils.field.field import Field

from lib_ai.agent.utils.streamable.streamable_models import StreamableModel, TState


class GraphNodeModel(
    StreamableModel[TState],
):
    name: str = Field()

    def edges(self) -> tuple[str, str]: ...

    def markup(self) -> str: ...
