import collections 
import collections.abc
from pptx import Presentation

prs = Presentation("ppt template.pptx")
for i, layout in enumerate(prs.slide_layouts):
    print(f"Layout {i}: {layout.name} - {len(layout.shapes)} shapes")
