document.getElementById('image1').addEventListener('change', function(e) {
    const preview = document.getElementById('image-preview1');
    const container = document.getElementById('preview1');
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function() {
        preview.src = reader.result;
        preview.classList.remove('hidden');
        container.classList.add('animated');
    }

    if (file) {
        reader.readAsDataURL(file);
    }
});

document.getElementById('image2').addEventListener('change', function(e) {
    const preview = document.getElementById('image-preview2');
    const container = document.getElementById('preview2');
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function() {
        preview.src = reader.result;
        preview.classList.remove('hidden');
        container.classList.add('animated');
    }

    if (file) {
        reader.readAsDataURL(file);
    }
});

document.querySelector('.submit-button').addEventListener('click', function(e) {
    e.preventDefault(); 

    const size1Span = document.getElementById('size1');
    const size2Span = document.getElementById('size2');

    const size1 = size1Span.textContent;
    const size2 = size2Span.textContent;

    if (size1 === 'N/A' || size2 === 'N/A') {
        alert('Please upload both images before submitting.');
    } else {
        alert(`Size of Image 1: ${size1} bytes\nSize of Image 2: ${size2} bytes`);
    }
});



