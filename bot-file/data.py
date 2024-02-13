from transformers import BertForQuestionAnswering
from transformers import BertTokenizer
import torch

model = BertForQuestionAnswering.from_pretrained('bert-large-uncased-whole-word-masking-finetuned-squad')
passage = "The quick brown fox jumps over the lazy dog. The lazy dog is laying in the sun. The quick brown fox is looking for food."

question = "What is the lazy dog doing?"
tokenizer = BertTokenizer.from_pretrained('bert-large-uncased-whole-word-masking-finetuned-squad')

inputs = tokenizer(question, passage, add_special_tokens=True, return_tensors='pt')
start_scores, end_scores = model(**inputs)

start_index = torch.argmax(start_scores)
end_index = torch.argmax(end_scores)

answer_tokens = inputs['input_ids'][0][start_index:end_index+1]
answer = tokenizer.decode(answer_tokens)
print(answer)
# Output: "laying in the sun"


