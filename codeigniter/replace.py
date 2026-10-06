import os

def replace_in_file(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace('Cisco CCST Networking Certification Practice Hub', 'CodeIgniter 4 Exam Simulator')
    content = content.replace('CCST Networking', 'CodeIgniter 4')
    content = content.replace('CCST_QUESTIONS', 'CI4_QUESTIONS')
    content = content.replace('ccst2026', 'ci42026')
    content = content.replace('ccst_', 'ci4_')
    content = content.replace('86', '100')
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

replace_in_file('index.html')
replace_in_file('app.js')
