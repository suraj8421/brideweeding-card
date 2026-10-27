import fitz
import os

width = 1200
height = 630

doc = fitz.open()
page = doc.new_page(width=width, height=height)

# Load fonts and get font objects for text length calculation
font_yatra_file = "YatraOne-Regular.ttf"
font_tiro_file = "TiroDevanagariMarathi-Regular.ttf"

page.insert_font(fontfile=font_yatra_file, fontname="yatra")
page.insert_font(fontfile=font_tiro_file, fontname="tiro")

font_yatra = fitz.Font(fontfile=font_yatra_file)
font_tiro = fitz.Font(fontfile=font_tiro_file)

# Helper to draw centered text with insert_text
def draw_centered(text, y, font_obj, font_name, fontsize, color):
    text_w = font_obj.text_length(text, fontsize=fontsize)
    x = (width - text_w) / 2
    page.insert_text(fitz.Point(x, y), text, fontname=font_name, fontsize=fontsize, color=color)

col_light = (252/255, 230/255, 164/255)
col_med = (212/255, 175/255, 55/255)
col_dark = (170/255, 119/255, 28/255)

# Try drawing all elements
draw_centered("॥ श्री गणेशाय नमः ॥", 180, font_tiro, "tiro", 20, col_light)
draw_centered("चि. जीवन", 270, font_yatra, "yatra", 50, col_light)
draw_centered("शुभविवाह", 325, font_tiro, "tiro", 26, col_med)
draw_centered("चि.सौ.का. पूनम", 395, font_yatra, "yatra", 50, col_light)
draw_centered("रविवार, २६ जुलै २०२६  |  दुपारी ०२:५१ वाजता", 460, font_tiro, "tiro", 20, col_light)
draw_centered("स्थळ: श्री.छ. अभयसिंहराजे भोसले सांस्कृतिक भवन", 510, font_tiro, "tiro", 20, col_med)
draw_centered("अजिंक्यतारा सह. साखर कारखाना मर्या, शेंद्रे, पुणे-बंगलोर हायवे  पुर्वेस, ता.जि. सातारा", 545, font_tiro, "tiro", 16, col_light)

doc.save("test_text.pdf")
doc2 = fitz.open("test_text.pdf")
print("Extracted ords of page text:")
print([ord(c) for c in doc2[0].get_text()])

pix = page.get_pixmap()
pix.save("test_insert_text.png")
print("Saved test image successfully")
