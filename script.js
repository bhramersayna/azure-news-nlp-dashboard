let allEntities = [];

async function analyzeNews() {

    const fileInput = document.getElementById('fileInput');

const formData = new FormData();

formData.append('file', fileInput.files[0]);

const response = await fetch('http://127.0.0.1:5000/analyze', {
    method: 'POST',
    body: formData
});
    const data = await response.json();

    allEntities = data;

    displayEntities(data);

    updateStats(data);

    createChart(data);
}

function displayEntities(data) {

    const resultsBody = document.getElementById('resultsBody');

    resultsBody.innerHTML = '';

    data.forEach(entity => {

        const row = `
            <tr>
                <td>${entity.text}</td>
                <td>${entity.category}</td>
                <td>${entity.confidence}</td>
            </tr>
        `;

        resultsBody.innerHTML += row;
    });
}

function updateStats(data) {

    let persons = 0;
    let organizations = 0;

    data.forEach(entity => {

        if(entity.category === "Person") {
            persons++;
        }

        if(entity.category === "Organization") {
            organizations++;
        }
    });

    document.getElementById('totalEntities').innerText = data.length;
    document.getElementById('personCount').innerText = persons;
    document.getElementById('orgCount').innerText = organizations;
}

document.getElementById('searchInput').addEventListener('keyup', function() {

    const searchValue = this.value.toLowerCase();

    const filtered = allEntities.filter(entity =>
        entity.text.toLowerCase().includes(searchValue)
    );

    displayEntities(filtered);
});

function createChart(data) {

    let persons = 0;
    let organizations = 0;
    let locations = 0;
    let dates = 0;

    data.forEach(entity => {

        if(entity.category === "Person") persons++;
        else if(entity.category === "Organization") organizations++;
        else if(entity.category === "Location") locations++;
        else if(entity.category === "DateTime") dates++;
    });

    const ctx = document.getElementById('entityChart');

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Persons', 'Organizations', 'Locations', 'Dates'],
            datasets: [{
                data: [persons, organizations, locations, dates]
            }]
        }
    });
}