from transformers import BertTokenizer, BertForQuestionAnswering
import torch

# Load the pre-trained BERT model and tokenizer
model_name = 'bert-base-uncased'
tokenizer = BertTokenizer.from_pretrained(model_name)
model = BertForQuestionAnswering.from_pretrained(model_name)

# Input passage and question
passage = "The quick brown fox jumps over the lazy dog."
question = "What jumps over the dog?"

# Tokenize the input
tokens = tokenizer.encode_plus(question, passage, truncation=True, padding=True, return_tensors='pt')

# Get the input IDs and attention mask
input_ids = tokens['input_ids']
attention_mask = tokens['attention_mask']

# Perform question-answering inference
start_scores, end_scores = model(input_ids, attention_mask=attention_mask)

# Convert the start_scores tensor to a numpy array
start_scores = start_scores.detach().numpy()

# Find the start index of the answer
start_index = int(torch.argmax(start_scores))
end_index = torch.argmax(end_scores)

# Convert the indices to token IDs
tokens_ids = input_ids[0][start_index:end_index+1]
answer_tokens = tokenizer.convert_ids_to_tokens(tokens_ids, skip_special_tokens=True)

# Convert tokens back to a string answer
answer = tokenizer.convert_tokens_to_string(answer_tokens)

print("Question:", question)
print("Answer:", answer)
