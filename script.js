function toggleDocuments(fileId) {
    var documents = document.getElementById(fileId);
    if (documents.classList.contains('hidden')) {
        documents.classList.remove('hidden');
    } else {
        documents.classList.add('hidden');
    }
}
