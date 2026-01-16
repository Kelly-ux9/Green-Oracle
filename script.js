function analyzeImage() {
    const input = document.getElementById("imageInput");
    const file = input.files[0];

    if (!file) {
        alert("Please upload an image first.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function () {
        document.getElementById("previewImage").src = reader.result;
        document.getElementById("previewSection").classList.remove("hidden");
    };
    reader.readAsDataURL(file);

    // Simulated AI decision logic
    const fileName = file.name.toLowerCase();

    let result = {};

    if (fileName.includes("blight")) {
        result = {
            status: "Late Blight Detected",
            description: "A fungal disease causing leaf browning and decay.",
            treatment: "Apply fungicide and remove infected leaves.",
            prevention: "Ensure proper spacing and avoid excess moisture."
        };
    } else if (fileName.includes("rust")) {
        result = {
            status: "Leaf Rust Detected",
            description: "Fungal infection causing reddish-brown spots.",
            treatment: "Use sulfur-based fungicides.",
            prevention: "Plant resistant varieties and ensure air circulation."
        };
    } else if (fileName.includes("spot")) {
        result = {
            status: "Leaf Spot Disease",
            description: "Spots caused by bacteria or fungi.",
            treatment: "Remove infected leaves and apply appropriate spray.",
            prevention: "Avoid overhead watering."
        };
    } else {
        result = {
            status: "Healthy Plant",
            description: "No visible disease detected.",
            treatment: "No treatment required.",
            prevention: "Continue good agricultural practices."
        };
    }

    setTimeout(() => {
        document.getElementById("status").textContent = result.status;
        document.getElementById("description").textContent = result.description;
        document.getElementById("treatment").textContent = result.treatment;
        document.getElementById("prevention").textContent = result.prevention;

        document.getElementById("resultSection").classList.remove("hidden");
    }, 1000);
}
