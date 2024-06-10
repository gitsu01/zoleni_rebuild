// Html Manupulation
let booking_type = document.getElementById('booking_type');
let booking_value = 'hourly'

booking_type.addEventListener('change', (e) => {
    booking_value = e.target.value;
    now_html_manupulation(booking_value);
})

function now_html_manupulation(value) {
    
}