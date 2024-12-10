from transformers import pipeline

prompt = "this is a prompt"

model = pipeline("question-answering", model="distilbert/distilbert-base-cased-distilled-squad")
# question_answerer(question=question, context=context)


# from tabnanny import verbose
# from timeit import timeit

# from mlx_lm import generate, load
# from ollama import ChatResponse


# def test():
#     model, tokenizer = load("mlx-community/Meta-Llama-3.1-8B-Instruct-4bit")
# prompt = """
#     Generate me key attributes from the following text:

#     LIGHTWEIGHT. DURABLE. EASY TO USE. And now, featuring Gorilla's innovative storage features to help you get your projects done even more quickly, easily and safely. The newly designed Gorilla Ladders 22 ft. Reach Aluminum Multi-Position Ladder is the first ever of its kind to come with a removable Project Bucket. This innovative Project Bucket sits atop the ladder to hold all your tools, hardware and accessories, keeping your hands free for safe and secure climbing and work. The updated ladder also features built-in tool hangers on the armored feet and on the hinge knobs, ensuring you'll always have a place to hang your tools while working and climbing. With 28 telescoping adjustable heights, this ladder can be used as an Extension Ladder, Double-Sided Twin Stepladder, 90° Wall Ladder, Stairway Stepladder and as 2 Scaffold Bases (with the purchase of the Rail Brackets accessory) while still folding down to a compact package for easy storage and transport. Extra-large, heavy-duty MPXA hinges are easy to use and give you improved strength and rigidity while climbing for an added sense of security. With plenty of added features and the same light-weight, easy-to-use design, this ladder is truly Built Smart and Always Tough.

#     Highlights
#     Removable Project Bucket sits on top of ladder to hold tools, hardware, paint, accessories
#     28 telescoping adjustable heights
#     Durable design with type 1A ANSI duty rating rated to hold up to 300 lbs.
#     Oversized hinges and armored feet also feature built-in tool hangers for added convenience and safety when climbing
#     Optional Rail Brackets (OMSID 312258995, model #GLMP-RB-2) for use in scaffold position are available at https://www.homedepot.com/p/Gorilla-Ladders-Lightweight-Aluminum-Rail-Brackets-Fits-All-Gorilla-MPX-Multi-Position-Ladders-Quick-and-Easy-to-Use-GLMP-RB-2/312258995
#     Limited lifetime warranty
#     Review user manual for ladder heights and reach heights
#     Return Policy
#     California residents

#     see Prop 65 WARNINGS
#     Product Information
#     Internet # 330315134
#     Model # GMPXA-22B
#     Store SKU # 1004687607
# """
# messages = [
#     {
#         "role": "system",
#         "content": "You are a helpful assistant who always responds in JSON format",
#     },
#     {"role": "user", "content": prompt},
# ]
# prompt = tokenizer.apply_chat_template(
#     messages,
#     tokenize=True,
#     add_generation_prompt=True,
#     verbose=True,
# )
# text = generate(
#     model,
#     tokenizer,
#     prompt=prompt,
#     max_tokens=500,
# )
# print(text)


# print(timeit(test, number=1))
# test()


# import os
# from timeit import timeit

# import torch
# from transformers import AutoModelForCausalLM, AutoTokenizer

# os.environ["TOKENIZERS_PARALLELISM"] = "false"
# os.environ["HF_TOKEN"] = "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"

# MODEL_NAME = "microsoft/Phi-3.5-mini-instruct"

# # prompt = """
# # Generate me color, sleeve style, product type, material, features, categories, age and neck attributes from the following text:
# # "The Slouchy V-Neck Why is it key? Slouchy, oversized and boxy silhouettes continue to drive casual V-neck styles, in line with the growing desire for a cosy, comfortable wardrobe that reassuringly envelops the wearer for A/W. A recognisable knitwear shape ripe for a youthful update, the #countrycalling trend we’re tracking is reworking classic patterns in larger scales. #Supersizedintarsia argyle motifs are a bold and contemporary example.
# # Design details: use 5gg yarn, ensuring a deep V-neckline and raglan sleeves to heighten the slouchy look. Knit in sustainable brushed super-kid mohair yarn for a cosy, soft finish, using a palette of earthy greens and grey tones."
# # """
# # print(torch.cuda.is_bf16_supported())
# # raise Exception()

# tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
# model = AutoModelForCausalLM.from_pretrained(MODEL_NAME)

# device = torch.device("mps")
# model.to(device)

# prompt = "write a quick sort algorithm."
# messages = [
#     {
#         "role": "system",
#         "content": "You are Qwen, created by Alibaba Cloud. You are a helpful assistant.",
#     },
#     {"role": "user", "content": prompt},
# ]
# text = tokenizer.apply_chat_template(
#     messages,
#     tokenize=False,
#     add_generation_prompt=True,
# )
# model_inputs = tokenizer([text], return_tensors="pt").to(model.device)


# def test():
#     generated_ids = model.generate(
#         **model_inputs,
#         # torch_dtype=torch.float16,
#         max_new_tokens=512,
#         top_k=50,
#         top_p=0.95,
#         # attention_mask=model_inputs["attention_mask"],
#         # pad_token_id=tokenizer.eos_token_id,
#         # device_map="auto",
#     )

#     generated_ids = [
#         output_ids[len(input_ids) :]
#         for input_ids, output_ids in zip(model_inputs.input_ids, generated_ids)
#     ]

#     response = tokenizer.batch_decode(generated_ids, skip_special_tokens=True)[0]
#     print(response)


# timeit(test)
