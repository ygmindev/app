# template version: 1.0.0


from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_ai.graph.constants import GraphNodeType
from lib_ai.graph.utils.graph_edge.graph_edge import GraphEdge
from lib_ai.graph.utils.graph_node.graph_node import GraphNode


class _MermaidChart(BaseModel):
    nodes: list[GraphNode] = Field(default_factory=list)
    edges: list[GraphEdge] = Field(default_factory=list)

    @staticmethod
    def _get_node(name: GraphNodeType | str) -> str:
        match name:
            case GraphNodeType.START:
                return "__start__"
            case GraphNodeType.END:
                return "__end__"
            case _:
                return name

    def add_node(
        self,
        value: GraphNode | list[GraphNode],
    ) -> None:
        if isinstance(value, list):
            self.nodes.extend(value)
        else:
            self.nodes.append(value)

    def add_edge(
        self,
        value: GraphEdge | list[GraphEdge],
    ) -> None:
        if isinstance(value, list):
            self.edges.extend(value)
        else:
            self.edges.append(value)

    def markup(self) -> str:
        start, end = GraphNode(name="__start__"), GraphNode(name="__end__")
        markups = [
            "graph TD",
            start.markup,
            end.markup,
        ]

        for node in self.nodes:
            markups.append(node.markup())

        for edge in self.edges:
            if len(edge) == 2:
                from_edge, to_edge = edge

            else:
                ...


class MermaidChart(_MermaidChart): ...
