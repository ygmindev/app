import asyncio
from enum import Enum
from typing import Sequence

from lib_ai.agent.utils.agent import Agent
from lib_ai.agent.utils.skill import Skill
from lib_ai.agent.utils.tool import Tool
from lib_ai.model.llm import Llm
from lib_ai.model.llm.constants import LLM_NAME
from lib_shared.core.utils.base_model import BaseModel


class WeatherSkill(Skill):
    name: str = "weather"
    descriptions: Sequence[str] = (
        "Step #1: fetch current weather data for a given location using 'weather_fetch' tool",
        "Step #2: if the requested unit is different from the unit returned by the 'weather_fetch' tool, convert the temperature using 'temperature_conversion' tool",
    )

    @property
    def tools(self) -> list[Tool]:
        class TEMPERATURE_UNIT(str, Enum):
            CELCIUS = "celcius"
            FARENHEIGHT = "farenheight"

        class WeatherFetchToolInput(BaseModel):
            location: str

        class WeatherFetchTool(Tool):
            name: str = "weather_fetch"

            async def execute(
                self,
                params: WeatherFetchToolInput,
            ) -> dict:
                return {
                    "location": params.location,
                    "weather": "snowy",
                    "temperature": {
                        "degree": 90,
                        "unit": TEMPERATURE_UNIT.FARENHEIGHT,
                    },
                }

        class TemperatureConversionToolInput(BaseModel):
            from_unit: TEMPERATURE_UNIT
            from_value: float
            to_unit: TEMPERATURE_UNIT

        class TemperatureConversionTool(Tool):
            name: str = "temperature_conversion"

            async def execute(
                self,
                params: TemperatureConversionToolInput,
            ) -> str:
                if params.from_unit == params.to_unit:
                    return f"{params.from_value}"

                match params.from_unit:
                    case TEMPERATURE_UNIT.CELCIUS:
                        match params.to_unit:
                            case TEMPERATURE_UNIT.FARENHEIGHT:
                                return f"{params.from_value * 1.8 + 32}"
                            case _:
                                raise NotImplementedError()
                    case TEMPERATURE_UNIT.FARENHEIGHT:
                        match params.to_unit:
                            case TEMPERATURE_UNIT.CELCIUS:
                                return f"{(params.from_value - 32) / 1.8}"
                            case _:
                                raise NotImplementedError()
                    case _:
                        raise NotImplementedError()

        return [
            WeatherFetchTool(input_type=WeatherFetchToolInput),
            TemperatureConversionTool(input_type=TemperatureConversionToolInput),
        ]


async def run_agent():
    llm = Llm(name=LLM_NAME.GLM_5)

    agent = Agent(
        name="Weather agent",
        description="""
            When asked about the weather of a location, return ONLY JSON (without any other text) with the following fields:
            - "weather": string (one of 'sunny', 'cloudy', or 'rainy')
            - "temperature": number (in CELCIUS)
        """,
        llm=llm,
        skills=[
            WeatherSkill(),
        ],
    )

    prompt = "what is the weather in New York?"

    async for item in agent.stream(prompt=prompt):
        print(f"@@@ {item.message}")


def main():
    asyncio.run(run_agent())


if __name__ == "__main__":
    main()
