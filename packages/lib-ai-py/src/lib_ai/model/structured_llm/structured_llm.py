from typing import Any, TypeVar

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field
from lib_shared.core.utils.logger.logger import logger

from lib_ai.agent.utils.ai_message.ai_message import AIMessage
from lib_ai.model.llm.llm import Llm

TSchema = TypeVar("TSchema", bound=BaseModel)


class StructuredLlm(BaseModel):
    llm: Llm = Field(default_factory=Llm)
    output_schema: type[TSchema] | None = Field(default=None)

    async def aclose(self) -> None:
        await self.llm.aclose()

    def _coerce(
        self,
        result: Any,
        schema: type[TSchema],
    ) -> TSchema:
        if isinstance(result, schema):
            return result
        if isinstance(result, BaseModel):
            return schema.model_validate(result.model_dump())
        if isinstance(result, dict):
            return schema.model_validate(result)
        raise TypeError(
            f"Expected structured output of type {schema.__name__}, "
            f"got {type(result).__name__}"
        )

    async def run(
        self,
        messages: list[AIMessage],
        schema: type[TSchema] | None = None,
    ) -> TSchema:
        schema = schema or self.output_schema
        if schema is None:
            raise ValueError("output_schema is required")
        logger.info(
            "structured_llm.run model=%s schema=%s",
            self.llm.name,
            schema.__name__,
        )
        serialized = [x.serialize() for x in messages]
        structured = self.llm.llm.with_structured_output(
            schema,
            method="function_calling",
        )
        result = await structured.ainvoke(serialized)
        return self._coerce(result, schema)
