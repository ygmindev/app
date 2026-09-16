# template version: 1.0.0


from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_ai.agent.utils.streamable.streamable import Streamable


class GraphNode[TState: BaseModel](Streamable[BaseModel]):
    name: str = Field()
    descriptions: list[str] = Field(default_factory=list)

    def edges(self) -> tuple[str, str]:
        return (
            self.name,
            self.name,
        )

    def markup(self) -> str:
        return f'{self.name}["{self.name}"]'

    def messages(self, state: TState) -> list[str] | None:
        return None
