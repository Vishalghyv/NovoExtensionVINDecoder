// On vin-submit event
var vin = document.getElementById('vin-submit');
vin.addEventListener('click', function(event) {
    event.preventDefault();
    var vin = document.getElementById('vin-input').value;
    var vin_url = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/' + vin + '?format=json';
    fetch(vin_url)
        .then(function(response) {
        return response.json();
        })
        .then(function(json) {
        var vin_data = json.Results[0];
        var vin_data_keys = Object.keys(vin_data);
        var vin_data_values = Object.values(vin_data);
        var vin_data_html = '';
        for (var i = 0; i < vin_data_keys.length; i++) {
            vin_data_html += '<p>' + vin_data_keys[i] + ': ' + vin_data_values[i] + '</p>';
        }
        document.getElementById('vin-data').innerHTML = vin_data_html;
        });
    }
);