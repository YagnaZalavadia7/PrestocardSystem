//MADE BY Yagna Zalavadia

$(document).ready(function () {
    /* FUNCTION EXECUTED WHEN CLICK  */
    $("#submit_button").click(function () {
        submitSchedule()
    });

});

function submitSchedule() {

    let availableRoutes = [
        {
            key: 'Go Transit',
            tabeValue: [
                { route: 'North York-Peel', division: 'Derry Road', time: '06:00 AM' },
                { route: 'Brampton-Mississauge', division: 'Mavis Cross', time: '10:30 AM' },
                { route: 'Scarborough-Milton', division: 'Bronte Road', time: '12:45 PM' },
                { route: 'Etobicoke-Downtown', division: 'Steels main', time: '03:55 PM' }]
        },
        {
            key: 'Blue Subway',
            tabeValue: [
                { route: 'Brossard-Lasalle', division: 'Berri Street', time: '7:00 AM' },
                { route: 'Granby-Laval', division: 'Champlain Street', time: '12:10 PM' },
                { route: 'Hudson-Blainville', division: 'McGill Way', time: '6:05 PM' }]
        },
        {
            key: 'Sky Train',
            tabeValue: [
                { route: 'Richmond-Sea Island', division: 'North Van', time: '9:00 AM' },
                { route: 'Burnaby-BC Place', division: 'Main Street', time: '12:40 AM' },
                { route: 'Brentwood-Oak St', division: 'Robsan Avenue', time: '3:50 PM' }]
        }
    ]

    let selectedService = $('#service_selection').val();
    let selectedCity = $('#city_selection').val();


    if (selectedService && selectedCity) {

        var allSchdeuledDataRows = '';
        // APPEND THE DYNAMIC DATA AFTER FORM

        availableRoutes.map((route, index) => {
            if (selectedService === route.key) {
                route.tabeValue.map((tableData, index) => {
                    console.log('tableData', tableData)
                    allSchdeuledDataRows += `
                    <tr>
                    <td id='sr_no'>${index + 1}</td>
                    <td id='route_value'>${tableData.route} </td>
                    <td id='division_value'>${tableData.division}</td>
                    <td id='time_value'>${tableData.time}</td>
                    </tr>
                    `
                })
            }
        })
        console.log('allSchdeuledDataRows', allSchdeuledDataRows)
        $('#data_rows').append(allSchdeuledDataRows)
        $("#show_schedule_table").show();
    } else {
        $('#service_error').show()
    }

}

function onServiceChange() {
    $('#service_error').hide()
    var x = document.getElementById("service_selection").value;
    let cities = [{ key: 'Go Transit', value: 'Toronto' }, { key: 'Blue Subway', value: 'Montreal' }, { key: 'Sky Train', value: 'Vancouver' }]

    cities.map((city) => {
        if (x === city.key) {
            document.getElementById("city_selection").value = city.value
            const myNode = document.getElementById("data_rows");
            myNode.innerHTML = '';
            $('#show_schedule_table').hide()
        }
    })

}