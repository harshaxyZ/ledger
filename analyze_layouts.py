import collections 
import collections.abc
from pptx import Presentation

prs = Presentation("ppt template.pptx")
print(f"Total layouts: {len(prs.slide_layouts)}")
for i, layout in enumerate(prs.slide_layouts):
    print(f"Layout {i}: {layout.name}")
