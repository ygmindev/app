from lib_python.core.utils.test import test
from torch import bfloat16
from transformers import pipeline

# model_id = "meta-llama/Meta-Llama-3.1-8B-Instruct"

# pipe = pipeline(
#     "text-generation",
#     model=model_id,
#     model_kwargs={"torch_dtype": bfloat16},
#     # device_map="auto",
# )

# messages = [
#     {
#         "role": "system",
#         "content": "You are a pirate chatbot who always responds in pirate speak!",
#     },
#     {
#         "role": "user",
#         "content": "Who are you?",
#     },
# ]

# outputs = pipeline(
#     messages,
#     max_new_tokens=256,
# )
# print(outputs[0]["generated_text"][-1])
