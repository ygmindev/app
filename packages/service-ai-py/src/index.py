import asyncio

from lib_config.http.server.server_config_ai import server_config_ai
from lib_shared.chat.utils.chat_service.chat_service import chat_service
from lib_shared.http.utils.server.server import Server

server = Server(
    name="server",
    config=server_config_ai,
    initialize=chat_service.initialize,
    close=chat_service.close,
)

app = server.app


async def run() -> None:
    await server.run()


def main() -> None:
    asyncio.run(run())


if __name__ == "__main__":
    main()

# ================
# import asyncio
# from enum import StrEnum
# from typing import Any, Sequence

# import httpx
# from lib_ai.agent.utils.agent import Agent
# from lib_ai.agent.utils.agent.agent_models import AgentState
# from lib_ai.agent.utils.skill import Skill
# from lib_ai.agent.utils.tool import Tool
# from lib_ai.model.llm import Llm
# from lib_ai.model.llm.constants import LLM_NAME
# from lib_shared.core.utils.base_model import BaseModel


# class Location(BaseModel):
#     name: str
#     latitude: float
#     longitude: float


# class WEATHER_CODE(StrEnum):
#     SUNNY = "sunny"
#     CLOUDY = "cloudy"
#     SNOWY = "snowy"
#     RAINY = "rainy"


# class Weather(BaseModel):
#     weather_code: WEATHER_CODE


# class WeatherResult(BaseModel):
#     location: Location
#     weather: Weather


# class WeatherSkill(Skill):
#     name: str = "weather"
#     descriptions: Sequence[str] = (
#         "You are a weather assistant. You ONLY answer weather-related questions",
#         "NEVER invent weather data. ALWAYS call the 'weather_fetch' tool",
#         "If the requested unit is different from the unit returned by the 'weather_fetch' tool, convert the temperature using 'temperature_conversion' tool",
#     )

#     @property
#     def tools(self) -> list[Tool[Any, Any]]:
#         class TEMPERATURE_UNIT(StrEnum):
#             CELCIUS = "celcius"
#             FARENHEIGHT = "farenheight"

#         class Temperature(BaseModel):
#             unit: TEMPERATURE_UNIT
#             value: float

#         class WeatherFetchToolInput(BaseModel):
#             location: str

#         class WeatherFetchToolOutput(BaseModel):
#             description: str
#             temperature: Temperature
#             humidity: float
#             wind_kmph: float

#         class WeatherFetchTool(Tool[WeatherFetchToolInput, WeatherFetchToolOutput]):
#             name: str = "weather_fetch"

#             async def execute(
#                 self,
#                 params: WeatherFetchToolInput,
#             ) -> WeatherFetchToolOutput:
#                 async with httpx.AsyncClient() as client:
#                     resp = await client.get(
#                         "https://wttr.in/nyc",
#                         params={"format": "j1"},
#                         timeout=10,
#                     )
#                     resp.raise_for_status()
#                     data = resp.json()
#                     current = data["current_condition"][0]
#                     return WeatherFetchToolOutput(
#                         description=current["weatherDesc"][0]["value"],
#                         temperature=Temperature(
#                             value=current["temp_F"],
#                             unit=TEMPERATURE_UNIT.FARENHEIGHT,
#                         ),
#                         humidity=current["humidity"],
#                         wind_kmph=current["windspeedKmph"],
#                     )

#         class TemperatureConversionToolInput(BaseModel):
#             from_temperature: Temperature
#             to_unit: TEMPERATURE_UNIT

#         class TemperatureConversionToolOutput(BaseModel):
#             temperature: Temperature

#         class TemperatureConversionTool(
#             Tool[TemperatureConversionToolInput, TemperatureConversionToolOutput]
#         ):
#             name: str = "temperature_conversion"

#             async def execute(
#                 self,
#                 params: TemperatureConversionToolInput,
#             ) -> TemperatureConversionToolOutput:
#                 if params.from_temperature.unit == params.to_unit:
#                     return TemperatureConversionToolOutput(
#                         temperature=Temperature(
#                             value=params.from_temperature.value,
#                             unit=params.to_unit,
#                         )
#                     )
#                 match params.from_temperature.unit:
#                     case TEMPERATURE_UNIT.CELCIUS:
#                         match params.to_unit:
#                             case TEMPERATURE_UNIT.FARENHEIGHT:
#                                 return TemperatureConversionToolOutput(
#                                     temperature=Temperature(
#                                         value=params.from_temperature.value * 1.8 + 32,
#                                         unit=params.to_unit,
#                                     )
#                                 )
#                             case _:
#                                 raise NotImplementedError()
#                     case TEMPERATURE_UNIT.FARENHEIGHT:
#                         match params.to_unit:
#                             case TEMPERATURE_UNIT.CELCIUS:
#                                 return TemperatureConversionToolOutput(
#                                     temperature=Temperature(
#                                         value=(params.from_temperature.value - 32)
#                                         / 1.8,
#                                         unit=params.to_unit,
#                                     )
#                                 )
#                             case _:
#                                 raise NotImplementedError()
#                     case _:
#                         raise NotImplementedError()

#         return [
#             WeatherFetchTool(input_type=WeatherFetchToolInput),
#             TemperatureConversionTool(input_type=TemperatureConversionToolInput),
#         ]


# async def run_agent():
#     llm = Llm(name=LLM_NAME.GLM_5)

#     class MyState(AgentState): ...

#     agent = Agent(
#         name="Weather agent",
#         descriptions=[
#             "When asked about the weather of a location, return ONLY JSON (without any other text) with the following fields:",
#             "- 'weather': string (one of 'sunny', 'cloudy', 'snowy', or 'rainy')",
#             "- 'temperature': {'value': number, 'unit': string}",
#             "ALWAYS return temperature in celcius",
#         ],
#         llm=llm,
#         initial_state=MyState(),
#         skills=[
#             WeatherSkill(),
#         ],
#     )

#     prompt = "what is the weather in New York?"
#     async for item in agent.stream_message(prompt=prompt):
#         print("\n", item.messages)


# def main():
#     asyncio.run(run_agent())


# if __name__ == "__main__":
#     main()

# import asyncio

# from lib_config.database.database import database_config
# from lib_model.chat.chat.chat import Chat
# from lib_model.chat.message.message import Message
# from lib_shared.database.utils.database.database import Database


# async def main():
#     database = Database(config=database_config)

#     try:
#         await database.initialize()
#         chat = Chat(name="test chat room")
#         await database.create(chat)
#         await database.create(Message(content="test message", chat=chat))
#     finally:
#         await database.close()


# asyncio.run(main())
