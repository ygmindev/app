# template version: 1.0.0


from lib_ai.graph.utils.graph_node.graph_node_models import (
    GraphNodeModel,
)


class GraphNode(
    GraphNodeModel,
):
    def edges(self) -> tuple[str, str]:
        return (
            self.name,
            self.name,
        )

    def markup(self) -> str:
        return f'{self.name}["{self.name}"]'
