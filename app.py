from flask import Flask, request, render_template
from lgc import processimages  # Import your custom image processing module

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload():
    if 'image1' not in request.files or 'image2' not in request.files:
        return "Please upload both images."

    image_file1 = request.files['image1']
    image_file2 = request.files['image2']

    if image_file1.filename == '' or image_file2.filename == '':
        return "Please select both images."

    try:
        # Call your custom image processing function from your_image_processing_module
        result = processimages(image_file1,image_file2)

        return result
    except Exception as e:
        return f"Error processing images: {str(e)}"

if __name__ == '__main__':
    app.run(debug=True)
