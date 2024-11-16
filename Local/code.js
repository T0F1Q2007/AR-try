document.addEventListener("DOMContentLoaded", function () {
    const modelsContainer = document.getElementById('models-container');
    const baseURL = "models/";

    // List of model directories
    const modelDirs = ["model1", "model2", "model3", "model4", "model5","model6","model7","model8","model9","model10","model11","model12","model13"];

    // Add an input field for IP address
    const ipInputContainer = document.createElement('div');
    ipInputContainer.innerHTML = `
        <label for="ip-input">Enter IP Address:</label>
        <input type="text" id="ip-input" placeholder="e.g., 192.168.1.100">
        <button id="generate-links">Generate Links</button>
    `;
    document.body.insertBefore(ipInputContainer, modelsContainer);

    // Add event listener to generate links based on the entered IP
    document.getElementById('generate-links').addEventListener('click', function () {
        const ip = document.getElementById('ip-input').value.trim();

        if (!ip) {
            alert("Please enter a valid IP address.");
            return;
        }

        // Clear existing models (if regenerating)
        modelsContainer.innerHTML = '';

        // Generate links using the provided IP
        modelDirs.forEach(dir => {
            const modelPath = `${baseURL}${dir}/tinker.glb`;
            const thumbnailPath = `${baseURL}${dir}/thumbnail.jpg`;

            const modelSection = document.createElement('div');
            modelSection.className = 'model-section';

            modelSection.innerHTML = `
                <a href="https://arvr.google.com/scene-viewer/1.0?file=http://${ip}:80/${modelPath}&mode=ar_preferred" rel="ar" target="_blank" class="access">
                    <img src="${thumbnailPath}" alt="Model Thumbnail" class="box">
                    <br>
                    <h4 class="access">View in AR</h4>
                </a>
            `;

            modelsContainer.appendChild(modelSection);
        });
    });
});

