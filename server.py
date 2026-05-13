from flask import Flask, jsonify, request
from flask_cors import CORS

from azure.ai.textanalytics import TextAnalyticsClient
from azure.core.credentials import AzureKeyCredential

app = Flask(__name__)
CORS(app)

KEY = "YOUR_AZURE_KEY"
ENDPOINT = "YOUR_ENDPOINT"

credential = AzureKeyCredential(KEY)

client = TextAnalyticsClient(
    endpoint=ENDPOINT,
    credential=credential
)

@app.route('/analyze', methods=['POST'])
def analyze_news():

    uploaded_file = request.files['file']

    text = uploaded_file.read().decode('utf-8')

    documents = [text]

    response = client.recognize_entities(documents)

    results = []

    for doc in response:

        for entity in doc.entities:

            results.append({
                "text": entity.text,
                "category": entity.category,
                "confidence": round(entity.confidence_score, 2)
            })

    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)