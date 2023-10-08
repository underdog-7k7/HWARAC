from transformers import TrOCRProcessor, VisionEncoderDecoderModel
from PIL import Image
import requests


def processimages(image_file1, image_file2):
    try:

        img1 = Image.open(image_file1.raw).convert("RGB")
        img2 = Image.open(image_file2.raw).convert("RGB")
        
        processor = TrOCRProcessor.from_pretrained('microsoft/trocr-large-handwritten')
        model = VisionEncoderDecoderModel.from_pretrained('microsoft/trocr-large-handwritten')
        
        pixel_valuesA = processor(images=img1, return_tensors="pt").pixel_values
        pixel_valuesB = processor(images=img2, return_tensors="pt").pixel_values
        
        generated_idsA = model.generate(pixel_valuesA)
        generated_idsB = model.generate(pixel_valuesB)
        
        generated_textA = processor.batch_decode(generated_idsA, skip_special_tokens=True)[0]
        generated_textB = processor.batch_decode(generated_idsB, skip_special_tokens=True)[0]
        
        result = generated_textA
        return result
    
    except Exception as e:
        return f"Error processing images: {str(e)}"
