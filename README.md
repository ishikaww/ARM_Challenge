# ARM_Challenge
Real-Time Road Anomaly Detection from Dashcam Footage on Raspberry Pi

## Getting Started
Our goal was to optimize the ML Model used in Dashboard Road Obstracle Detection in such a way that it hits 5 FPS in real time and actively logs everything into a database.
We used a Raspberry Pi 4b board with cooling fan and microSD card. We went with a USB webcam as opposed to a Raspberry Pi cam module because of better stability and picture capturization. 

## Dataset
Our team used the YOLOv8n model to train a custom dataset from Roboflow which contained the following classes that could classify as road obstracles: 
```
1. Alligator Cracking
2. Edge Cracking
3. Longitudinal Cracking
4. Patching
5. Potholes
6. Rutting
7. Transverse Cracking
```

The link to the Dataset we have used can be accessed [here](https://universe.roboflow.com/baka-1ravj/road-damage-det)

## Tech Stack
![Python](https://img.shields.io/badge/Python-3.x-blue?logo=python&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-DeepLearning-red?logo=pytorch&logoColor=white)
![Ultralytics YOLOv8](https://img.shields.io/badge/YOLOv8-Ultralytics-black)
![TensorFlow](https://img.shields.io/badge/TensorFlow-ML-orange?logo=tensorflow&logoColor=white)
![TensorFlow Lite](https://img.shields.io/badge/TFLite-EdgeInference-yellow?logo=tensorflow&logoColor=black)
![OpenCV](https://img.shields.io/badge/OpenCV-ComputerVision-green?logo=opencv&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-ScientificComputing-blue?logo=numpy&logoColor=white)
![Roboflow](https://img.shields.io/badge/Roboflow-Dataset-purple)
![Google Colab](https://img.shields.io/badge/GoogleColab-Training-orange?logo=googlecolab&logoColor=white)
![Raspberry Pi](https://img.shields.io/badge/RaspberryPi-EdgeDevice-red?logo=raspberrypi&logoColor=white)
![Computer Vision](https://img.shields.io/badge/Computer%20Vision-Object%20Detection-blue)
![Edge AI](https://img.shields.io/badge/Edge%20AI-Raspberry%20Pi-green)
![INT8 Quantization](https://img.shields.io/badge/Quantization-INT8-important)


## Usage
After running the YOLO model for 50 Epochs the results we got was:
<img width="1390" height="468" alt="image" src="https://github.com/user-attachments/assets/a442e3df-b91a-40dd-b471-36bf30928c02" />

For more info for on the ML model's working please refer to the [documentation](final_report.pdf)

### Website 
The primary objective of developing the web interface was to:
* Stream live pothole detection results remotely
* Monitor detection performance in real time
* Display bounding box predictions on live video
* Enable scalability for future cloud integration
* Provide a user-friendly interface for demonstration and deployment
  
  <img width="1534" height="903" alt="image" src="https://github.com/user-attachments/assets/6be34dc3-7706-478a-8467-cb17b518f565" />

## Roadmap
Our furthere steps include:
* Packaging the Raspberry Pi to be installed on the dashboard of a car.
* Live Feed from the car to be viewed on the website.
* SQLite database must be integrated to cloud and updated in real time on the website dashboard.
* Development of a pothole hotspot map from the data acquired during the testing phase of our project.


