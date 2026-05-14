# AI-Powered News Entity Extraction and Analytics Dashboard using Microsoft Azure

## Project Overview

This project is a cloud-based Natural Language Processing (NLP) application developed using Microsoft Azure AI Language Service. The system analyzes large news documents and extracts important entities such as:

- Person Names
- Organizations
- Locations
- Countries
- Dates

The extracted entities are displayed dynamically through an interactive dashboard built using Flask, HTML, CSS, and JavaScript.

---

# Features

- Named Entity Recognition (NER)
- Azure AI Language Service Integration
- Interactive Dashboard
- Entity Statistics Cards
- Search Functionality
- Pie Chart Analytics
- File Upload Support
- Real-Time Entity Extraction

---

# Technologies Used

## Frontend
- HTML
- CSS
- JavaScript
- Chart.js

## Backend
- Python
- Flask

## Cloud Services
- Microsoft Azure AI Language Service
- Azure Blob Storage

---

# Project Structure

```text
Azure-News-NLP/
│
├── index.html
├── style.css
├── script.js
├── server.py
├── sample_news.txt
├── requirements.txt
├── README.md
└── .gitignore
```

---

# Azure Services Used

| Service | Purpose |
|----------|----------|
| Azure AI Language Service | Named Entity Recognition |
| Azure Blob Storage | Store news documents |

---

# Setup Instructions

## 1. Clone Repository

```bash
git clone https://github.com/bhramersayna/azure-news-nlp-dashboard.git
```

---

## 2. Open Project Folder

```bash
cd azure-news-nlp-dashboard
```

---

## 3. Install Dependencies

```bash
pip install -r requirements.txt
```

---

## 4. Configure Azure Credentials

Open `server.py`

Replace:

```python
KEY = "YOUR_AZURE_KEY"
ENDPOINT = "YOUR_ENDPOINT"
```

with your Azure AI Language Service credentials.

---

## 5. Run Flask Server

```bash
python server.py
```

---

## 6. Open Dashboard

Open:

```text
index.html
```

OR use VS Code Live Server.

---

# Sample Input

```text
Prime Minister Narendra Modi met Microsoft CEO Satya Nadella
in New Delhi on April 14, 2026.

Apple announced a partnership with OpenAI in California.
```

---

# Sample Output

| Entity | Category |
|----------|----------|
| Narendra Modi | Person |
| Microsoft | Organization |
| Satya Nadella | Person |
| New Delhi | Location |
| April 14, 2026 | DateTime |

---

# Architecture Diagram

```text
+----------------------+
|   News Documents     |
+----------------------+
           |
           v
+----------------------+
| Azure Blob Storage   |
+----------------------+
           |
           v
+-----------------------------+
| Azure AI Language Service   |
| Named Entity Recognition    |
+-----------------------------+
           |
           v
+----------------------+
| Flask Backend        |
+----------------------+
           |
           v
+----------------------+
| Dashboard Frontend   |
+----------------------+
```

---

# Output Dashboard

The dashboard displays:

- Extracted Entities
- Confidence Scores
- Entity Statistics
- Search Results
- Pie Chart Analytics

---

# Future Enhancements

- Multi-language support
- PDF document analysis
- Real-time news streaming
- AI summarization
- Sentiment analysis

---

# Result

The project successfully demonstrated a scalable cloud-based NLP solution using Microsoft Azure AI Language Service for intelligent news document analysis and entity extraction.

---

# Live Dashboard

## Local Access

Run the Flask server:

```bash
python server.py
```

Then open:

```text
http://127.0.0.1:5000/analyze
```

For the dashboard interface, open:

```text
index.html
```

OR use the VS Code Live Server extension.
# Author

Sayna
