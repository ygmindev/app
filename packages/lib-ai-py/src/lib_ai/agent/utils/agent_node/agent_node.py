# template version: 1.0.0

from lib_shared.core.utils.base_model import BaseModel

from .agent_node_models import AgentNodeModel


class AgentNode(BaseModel, AgentNodeModel):
    name: str
