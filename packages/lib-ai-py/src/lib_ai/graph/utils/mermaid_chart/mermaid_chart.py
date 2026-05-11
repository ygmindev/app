# template version: 1.0.0


from lib_shared.core.utils.field.field import Field

from lib_ai.graph.constants import GraphNodeType
from lib_ai.graph.utils.directed_acyclic_graph.directed_acyclic_graph_models import (
    GraphEdgeModel,
)
from lib_ai.graph.utils.graph_node.graph_node import GraphNode

from .mermaid_chart_models import MermaidChartModel, _MermaidChartModel


class _MermaidChart(_MermaidChartModel):
    nodes: list[GraphNode] = Field(default_value=list)
    edges: list[GraphEdgeModel] = Field(default_value=list)

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
        value: GraphEdgeModel | list[GraphEdgeModel],
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


class MermaidChart(_MermaidChart, MermaidChartModel): ...
