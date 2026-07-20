import os
import re
import sys
import json
import base64
from http.server import HTTPServer, BaseHTTPRequestHandler

# Reconfigure stdout for UTF-8 on Windows terminal
try:
    sys.stdout.reconfigure(encoding='utf-8')
except AttributeError:
    pass

def get_marathi_data():
    with open("src/data/weddingData.js", "r", encoding="utf-8") as f:
        content = f.read()
    
    # Helper to extract a field by key in a JS object string
    def extract_field_by_block(block_name, field_name):
        block_match = re.search(rf"{block_name}:\s*\{{(.*?)\}}", content, re.DOTALL)
        if block_match:
            block_content = block_match.group(1)
            field_match = re.search(rf"{field_name}:\s*\"([^\"]+)\"", block_content)
            if field_match:
                return field_match.group(1)
        return ""
    
    invocation = extract_field_by_block("invocation", "marathi")
    bride = extract_field_by_block("bride", "name")
    groom = extract_field_by_block("groom", "name")
    
    wedding_day = extract_field_by_block("weddingDate", "day")
    wedding_date = extract_field_by_block("weddingDate", "date")
    wedding_time = extract_field_by_block("weddingDate", "time")
    
    venue_name = extract_field_by_block("venue", "name")
    venue_address = extract_field_by_block("venue", "address")
    
    return {
        "invocation": invocation or "॥ श्री गणेशाय नमः ॥",
        "bride": bride or "चि.सौ.कां. सायली",
        "groom": groom or "चि. सुयोग",
        "day": wedding_day or "रविवार",
        "date": wedding_date or "२६ जुलै २०२६",
        "time": wedding_time or "दुपारी ०२:५१ वाजता",
        "venue_name": venue_name or "श्री.छ. अभयसिंहराजे भोसले सांस्कृतिक भवन",
        "venue_address": venue_address or "अजिंक्यतारा सह. साखर कारखाना मर्या, शेंद्रे, पुणे-बंगलोर हायवे  पुर्वेस, ता.जि. सातारा"
    }

def prepare_html():
    data = get_marathi_data()
    print("Extracted Data:")
    for k, v in data.items():
        print(f"  {k}: {v}")
        
    with open("generate_og.html.template", "r", encoding="utf-8") as f:
        template = f.read()
        
    # Replace placeholders
    for key, val in data.items():
        template = template.replace(f"{{{{{key}}}}}", val)
        
    with open("generate_og.html", "w", encoding="utf-8") as f:
        f.write(template)
    print("Generated generate_og.html successfully.")

should_stop = False

class SaveHandler(BaseHTTPRequestHandler):
    def log_message(self, format, *args):
        # Suppress server logs to keep terminal output clean
        pass
        
    def do_GET(self):
        if self.path == '/':
            self.send_response(200)
            self.send_header('Content-type', 'text/html; charset=utf-8')
            self.end_headers()
            with open('generate_og.html', 'r', encoding='utf-8') as f:
                self.wfile.write(f.read().encode('utf-8'))
        elif self.path == '/public/images/ganesh.png':
            self.send_response(200)
            self.send_header('Content-type', 'image/png')
            self.end_headers()
            with open('public/images/ganesh.png', 'rb') as f:
                self.wfile.write(f.read())
        else:
            self.send_error(404)
            
    def do_POST(self):
        if self.path == '/save':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            post_json = json.loads(post_data.decode('utf-8'))
            
            img_base64 = post_json['image'].split(',')[1]
            binary_data = base64.b64decode(img_base64)
            
            # Save to public
            with open('public/og-image.jpg', 'wb') as f:
                f.write(binary_data)
            # Save to dist if exists
            if os.path.exists('dist'):
                with open('dist/og-image.jpg', 'wb') as f:
                    f.write(binary_data)
                    
            print("Successfully received and saved og-image.jpg!")
            
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"status": "success"}).encode('utf-8'))
            
            global should_stop
            should_stop = True

def run_server():
    prepare_html()
    server = HTTPServer(('localhost', 8080), SaveHandler)
    print("Starting temporary server on http://localhost:8080/ ...")
    print("Please open http://localhost:8080/ in your browser to render and save the image.")
    while not should_stop:
        server.handle_request()
    print("Server stopped. Image has been generated and saved.")
    
    # Cleanup generate_og.html
    if os.path.exists("generate_og.html"):
        os.remove("generate_og.html")

if __name__ == "__main__":
    run_server()
