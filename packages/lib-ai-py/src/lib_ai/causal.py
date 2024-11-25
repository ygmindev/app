from transformers import AutoModelForCausalLM, AutoTokenizer

MODEL_NAME = "distilbert/distilgpt2"
prompt = """
Generate me color, sleeve style, product type, material, features, categories, age and neck attributes from the following text:
"The Slouchy V-Neck Why is it key? Slouchy, oversized and boxy silhouettes continue to drive casual V-neck styles, in line with the growing desire for a cosy, comfortable wardrobe that reassuringly envelops the wearer for A/W. A recognisable knitwear shape ripe for a youthful update, the #countrycalling trend we’re tracking is reworking classic patterns in larger scales. #Supersizedintarsia argyle motifs are a bold and contemporary example.
Design details: use 5gg yarn, ensuring a deep V-neckline and raglan sleeves to heighten the slouchy look. Knit in sustainable brushed super-kid mohair yarn for a cosy, soft finish, using a palette of earthy greens and grey tones."
"""

tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
inputs = tokenizer(prompt, return_tensors="pt").input_ids
model = AutoModelForCausalLM.from_pretrained(MODEL_NAME)
outputs = model.generate(inputs, max_new_tokens=100, do_sample=True, top_k=50, top_p=0.95)
result = tokenizer.batch_decode(outputs, skip_special_tokens=True)

print(result)
