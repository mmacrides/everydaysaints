# export_saints.py
import json
from app import SAINTS  # or from whatever file your SAINTS list lives in

with open("../saints.js", "w", encoding="utf-8") as f:
    f.write("const SAINTS = ")
    json.dump(SAINTS, f, ensure_ascii=False, indent=2)
    f.write(";\n")
