import json
import re

def parse_file(filename, start_id):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Split by the result delimiter: "Results for question X.\n[maybe X]\n"
    blocks = re.split(r'Results for question \d+\.\n(?:\d+\n)?', content.strip())
    
    questions = []
    current_id = start_id
    
    for block in blocks:
        block = block.strip()
        if not block: continue
        
        lines = [line.strip() for line in block.split('\n') if line.strip()]
        
        # Remove score line if present
        if 'point' in lines[0]:
            lines.pop(0)
            
        if not lines: continue
            
        q_type = lines.pop(0)
        
        q = {
            "id": f"q{current_id}",
            "page": current_id,
            "category": "CodeIgniter Basics" if start_id == 1 else "CodeIgniter Advanced",
            "type": "",
            "question": "",
            "options": [],
            "correct_answers": []
        }
        
        if q_type == "Multiple choice":
            q["type"] = "multiple_choice"
            q["question"] = lines.pop(0)
            
            is_correct = False
            for line in lines:
                if line in ["Correct answer:", "Correct Answer:"]:
                    is_correct = True
                elif line in ["Incorrect answer:", "Incorrect Answer:"]:
                    is_correct = False
                elif line == ", Not Selected":
                    pass
                else:
                    if line not in q["options"]:
                        q["options"].append(line)
                    if is_correct:
                        if line not in q["correct_answers"]:
                            q["correct_answers"].append(line)
                        is_correct = False
                        
        elif q_type == "True or False":
            q["type"] = "multiple_choice"
            q["question"] = lines.pop(0)
            q["options"] = ["True", "False"]
            
            is_correct = False
            for line in lines:
                if line in ["Correct answer:", "Correct Answer:"]:
                    is_correct = True
                elif line in ["Incorrect answer:", "Incorrect Answer:"]:
                    is_correct = False
                elif line in ["True", "False"]:
                    if is_correct:
                        q["correct_answers"].append(line)
                        is_correct = False
                        
        elif q_type == "Fill in the Blank":
            q["type"] = "text_input"
            q["question"] = lines.pop(0)
            q["accepted_answers"] = []
            
            is_correct = False
            for line in lines:
                if line in ["Correct answer:", "Correct Answer:"]:
                    is_correct = True
                elif line in ["Incorrect answer:", "Incorrect Answer:"]:
                    is_correct = False
                else:
                    if is_correct:
                        q["accepted_answers"].append(line)
                        is_correct = False
                        
        elif q_type == "Matching":
            q["type"] = "matching"
            if "Match the term with the correct description." in lines[0]:
                lines.pop(0)
            
            q["pairs"] = []
            
            # The pattern is: Prompt \n Correct match: \n Answer
            prompt = ""
            for line in lines:
                if line == "Correct match:":
                    continue
                elif not prompt:
                    prompt = line
                else:
                    # this is the answer
                    q["pairs"].append({"prompt": prompt, "answer": line})
                    q["options"].append(line)
                    prompt = ""

        questions.append(q)
        current_id += 1
        
    return questions

q1 = parse_file('q1.txt', 1)
q2 = parse_file('q2.txt', 51)

all_qs = q1 + q2

# Verify lengths
print(f"Parsed {len(q1)} questions from part 1")
print(f"Parsed {len(q2)} questions from part 2")

js_out = f"window.CCST_QUESTIONS = {json.dumps(all_qs, indent=2)};\n"
with open('questions.js', 'w', encoding='utf-8') as f:
    f.write(js_out)
