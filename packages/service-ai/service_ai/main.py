from lib_python.core.utils.test import test
from torch import bfloat16
from transformers import pipeline

model_id = "meta-llama/Meta-Llama-3-8B"

pipe = pipeline(
    "text-generation",
    model=model_id,
    model_kwargs={"torch_dtype": bfloat16},
    device_map="auto",
)
pipe("Hey how are you doing today?")

print("hi")
test()
