document.addEventListener("DOMContentLoaded", function() {
    const modelsContainer = document.getElementById('models-container');
    const baseURL = "Local/models/";
    
    // List of model directories
    const modelDirs = ["model1", "model2", "model3","model4","model5","model6","model8","model9","model10","model11","model12","model13"]; // You can dynamically generate this list if needed

    modelDirs.forEach(dir => {
        const modelPath = `${baseURL}${dir}/tinker.glb`;
        const thumbnailPath = `${baseURL}${dir}/thumbnail.jpg`;

        const modelSection = document.createElement('div');
        modelSection.className = 'model-section';

        modelSection.innerHTML = `
            <a href="https://arvr.google.com/scene-viewer/1.0?file=https://t0f1q2007.github.io/AR-try/${modelPath}&mode=ar_preferred" rel="ar" target="_blank" class="access">
                <img src="${thumbnailPath}" alt="Model Thumbnail" class="box">
                <br>
                <h4 class="access">View in AR</h4>
            </a>
        `;

        modelsContainer.appendChild(modelSection);
    });
});
