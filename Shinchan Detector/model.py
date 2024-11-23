# model.py
import torch.nn as nn
from torchvision import models

class ShinchanDetector(nn.Module):
    def __init__(self):
        super(ShinchanDetector, self).__init__()
        self.model = models.resnet18(pretrained=True)
        self.model.fc = nn.Linear(self.model.fc.in_features, 2)  # 2 classes

    def forward(self, x):
        return self.model(x)
