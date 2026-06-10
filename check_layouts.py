from pptx import Presentation

prs = Presentation("ppt template.pptx")
for i, layout in enumerate(prs.slide_layouts):
    print(f"--- Layout {i}: {layout.name} ---")
    for shape in layout.shapes:
        shape_type = type(shape).__name__
        if shape.is_placeholder:
            print(f"Placeholder: {shape.placeholder_format.type}")
        else:
            print(f"Shape: {shape_type}, name: {shape.name}")
