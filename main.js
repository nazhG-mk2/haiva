import './style.css'

const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const loader = document.getElementById('loader');
const dropZoneText = document.getElementById('drop-zone-text');

dropZone.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', (e) => handleFiles(e.target.files));

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    console.log('dragover');

    dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    handleFiles(e.dataTransfer.files);
});

function handleFiles(files) {
    console.log('Archivos subidos:', files);
    loader.classList.remove('hidden');
    dropZoneText.classList.add('hidden');
    setTimeout(() => {
        dropZone.classList.add('hidden');
    }, 3000);
}