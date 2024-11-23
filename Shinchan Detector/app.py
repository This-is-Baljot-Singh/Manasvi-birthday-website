from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
from torchvision import transforms
from PIL import Image
import os
from model import ShinchanDetector  # Your ShinchanDetector class

app = Flask(__name__)
CORS(app)  # Allows cross-origin requests from your frontend

# Load the model
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")# model.py
import torch.nn as nn
from torchvision import models

class ShinchanDetector(nn.Module):
    def __init__(self):
        super(ShinchanDetector, self).__init__()
        self.model = models.resnet18(pretrained=True)
        self.model.fc = nn.Linear(self.model.fc.in_features, 2)  # 2 classes

    def forward(self, x):
        return self.model(x)

model = ShinchanDetector()
model.load_state_dict(torch.load("shinchan_model.pth", map_location=device))  # Replace with your model file
model.to(device)
model.eval()

# Define image transformations
transform = transforms.Compose([
    transforms.Resize((128, 128)),
    transforms.ToTensor(),
    transforms.Normalize((0.5,), (0.5,))
])

# Prediction route
@app.route("/predict", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error": "No file provided"}), 400
    
    file = request.files["file"]

    try:
        # Load the image
        image = Image.open(file.stream).convert("RGB")
        image = transform(image).unsqueeze(0).to(device)

        # Predict
        with torch.no_grad():
            outputs = model(image)
            probabilities = torch.nn.functional.softmax(outputs, dim=1)
            confidence, predicted = torch.max(probabilities, 1)

        # Get class names and prediction
        class_names = ["shinchan", "also shinchan"]
        if confidence.item() < 0.5:
            result = "not shinchan"
        else:
            result = f"is {class_names[predicted.item()]}"

        return jsonify({"result": result, "confidence": confidence.item()})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Run the server
if __name__ == "__main__":
    app.run(debug=True)
