import asyncio
from enum import Enum
from typing import Any, Sequence

import httpx
from lib_ai.agent.utils.agent import Agent
from lib_ai.agent.utils.agent.agent_models import AgentState
from lib_ai.agent.utils.skill import Skill
from lib_ai.agent.utils.tool import Tool
from lib_ai.model.llm import Llm
from lib_ai.model.llm.constants import LLM_NAME
from lib_shared.core.utils.base_model import BaseModel


class Location(BaseModel):
    name: str
    latitude: float
    longitude: float


class WEATHER_CODE(str, Enum):
    SUNNY = "sunny"
    CLOUDY = "cloudy"
    SNOWY = "snowy"
    RAINY = "rainy"


class Weather(BaseModel):
    weather_code: WEATHER_CODE


class WeatherResult(BaseModel):
    location: Location
    weather: Weather


class WeatherSkill(Skill):
    name: str = "weather"
    descriptions: Sequence[str] = (
        "You are a weather assistant. You ONLY answer weather-related questions",
        "NEVER invent weather data. ALWAYS call the 'weather_fetch' tool",
        "If the requested unit is different from the unit returned by the 'weather_fetch' tool, convert the temperature using 'temperature_conversion' tool",
    )

    @property
    def tools(self) -> list[Tool[Any, Any]]:
        class TEMPERATURE_UNIT(str, Enum):
            CELCIUS = "celcius"
            FARENHEIGHT = "farenheight"

        class Temperature(BaseModel):
            unit: TEMPERATURE_UNIT
            value: float

        class WeatherFetchToolInput(BaseModel):
            location: str

        class WeatherFetchToolOutput(BaseModel):
            description: str
            temperature: Temperature
            humidity: float
            wind_kmph: float

        class WeatherFetchTool(Tool[WeatherFetchToolInput, WeatherFetchToolOutput]):
            name: str = "weather_fetch"

            async def execute(
                self,
                params: WeatherFetchToolInput,
            ) -> WeatherFetchToolOutput:
                async with httpx.AsyncClient() as client:
                    resp = await client.get(
                        "https://wttr.in/nyc",
                        params={"format": "j1"},
                        timeout=10,
                    )
                    resp.raise_for_status()
                    data = resp.json()
                    current = data["current_condition"][0]
                    return WeatherFetchToolOutput(
                        description=current["weatherDesc"][0]["value"],
                        temperature=Temperature(
                            value=current["temp_F"],
                            unit=TEMPERATURE_UNIT.FARENHEIGHT,
                        ),
                        humidity=current["humidity"],
                        wind_kmph=current["windspeedKmph"],
                    )

        class TemperatureConversionToolInput(BaseModel):
            from_temperature: Temperature
            to_unit: TEMPERATURE_UNIT

        class TemperatureConversionToolOutput(BaseModel):
            temperature: Temperature

        class TemperatureConversionTool(
            Tool[TemperatureConversionToolInput, TemperatureConversionToolOutput]
        ):
            name: str = "temperature_conversion"

            async def execute(
                self,
                params: TemperatureConversionToolInput,
            ) -> TemperatureConversionToolOutput:
                if params.from_temperature.unit == params.to_unit:
                    return TemperatureConversionToolOutput(
                        temperature=Temperature(
                            value=params.from_temperature.value,
                            unit=params.to_unit,
                        )
                    )

                match params.from_temperature.unit:
                    case TEMPERATURE_UNIT.CELCIUS:
                        match params.to_unit:
                            case TEMPERATURE_UNIT.FARENHEIGHT:
                                return TemperatureConversionToolOutput(
                                    temperature=Temperature(
                                        value=params.from_temperature.value * 1.8 + 32,
                                        unit=params.to_unit,
                                    )
                                )
                            case _:
                                raise NotImplementedError()
                    case TEMPERATURE_UNIT.FARENHEIGHT:
                        match params.to_unit:
                            case TEMPERATURE_UNIT.CELCIUS:
                                return TemperatureConversionToolOutput(
                                    temperature=Temperature(
                                        value=(params.from_temperature.value - 32)
                                        / 1.8,
                                        unit=params.to_unit,
                                    )
                                )
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

    class MyState(AgentState): ...

    agent = Agent(
        name="Weather agent",
        descriptions=[
            "When asked about the weather of a location, return ONLY JSON (without any other text) with the following fields:",
            "- 'weather': string (one of 'sunny', 'cloudy', 'snowy', or 'rainy')",
            "- 'temperature': {'value': number, 'unit': string}",
            "ALWAYS return temperature in celcius",
        ],
        llm=llm,
        state_schema=MyState,
        skills=[
            WeatherSkill(),
        ],
    )

    prompt = "what is the weather in New York?"
    await agent.graph.visualize()
    async for item in agent.stream(prompt=prompt):
        print(f"### ITEM: {item.message}")


def main():
    asyncio.run(run_agent())


if __name__ == "__main__":
    main()
