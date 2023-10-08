document.addEventListener('DOMContentLoaded', function () {
    // Function to handle the "Upload Image" button click for image 1
    document.getElementById('upload-button-1').addEventListener('click', function () {
        document.getElementById('image-upload-1').click();
    });

    // Function to handle the "Upload Image" button click for image 2
    document.getElementById('upload-button-2').addEventListener('click', function () {
        document.getElementById('image-upload-2').click();
    });

    // Function to handle image preview for a given input
    function previewImage(input, previewElement) {
        const file = input.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                previewElement.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
            };
            reader.readAsDataURL(file);
        }
    }

    // Event listeners for image preview buttons for image 1
    document.getElementById('preview-button-1').addEventListener('click', function () {
        previewImage(document.getElementById('image-upload-1'), document.getElementById('preview-1'));
    });

    // Event listeners for image preview buttons for image 2
    document.getElementById('preview-button-2').addEventListener('click', function () {
        previewImage(document.getElementById('image-upload-2'), document.getElementById('preview-2'));
    });

    // Function to clear image preview
    function clearPreview(previewElement) {
        previewElement.innerHTML = '';
    }

    // Event listeners for clearing previews when the input changes for image 1
    document.getElementById('image-upload-1').addEventListener('change', function () {
        clearPreview(document.getElementById('preview-1'));
    });

    // Event listeners for clearing previews when the input changes for image 2
    document.getElementById('image-upload-2').addEventListener('change', function () {
        clearPreview(document.getElementById('preview-2'));
    });

    // Function to handle the "Process Images" button click
    document.getElementById('process-button').addEventListener('click', async function () {
        const formData = new FormData();
        formData.append('image1', document.getElementById('image-upload-1').files[0]);
        formData.append('image2', document.getElementById('image-upload-2').files[0]);

        const response = await fetch('/upload', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const result = await response.text();
            const resultDiv = document.getElementById('result');
            resultDiv.innerText = result;
            resultDiv.style.display = 'block';
            resultDiv.style.animation = 'fadeIn 0.5s ease-in';
        } else {
            console.error('Error uploading images');
        }
    });
});
