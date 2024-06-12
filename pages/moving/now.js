
// Truck Time & Labors Time
let truck_time = document.getElementById('truck_time');
let ttime_list = `<option value="">Time</option>`;

let labor_time = document.getElementById('labor_time');
let for_pack_time = document.querySelector('.for_pack_time');
let labor_time_opt = `<option value="">Hours for Loading & Unloading</option>`;
let for_pt_opt = `<option value="">Hours for Packing</option>`;


for (let i = 1; i < 21; i++) {
    ttime_list += `<option value="${i}_hours">${i} Hours</option>`;  
    labor_time_opt += `<option value="${i}_hours">${i} Hours</option>`;
    for_pt_opt += `<option value="${i}_hours">${i} Hours</option>`;    
}

truck_time.innerHTML = ttime_list;
labor_time.innerHTML = labor_time_opt;
for_pack_time.innerHTML = for_pt_opt;

// Insurance
// Insurance
let ins_type = document.getElementById('ins_type');
let ins_list = `
    <option value="">Select Insurance Type</option>
    <option value="envelope">No, I dont need insurance</option>
`;

let i = 10;
while (i <= 100) {
    let element = `<option value="${i*10}">Yes, $ ${i*10} [  Pay $ ${i}  ]</option>`;
    ins_list += element;
    
    i += 5;
}

ins_type.innerHTML = ins_list;

// Spacial Artical Numbers & Labors Number
let sp_ar_items = document.querySelectorAll('.sp_ar_item div select');
let sp_ar_options = `<option value="">Select</option>`;

let labors_num = document.getElementById('labors_num');
let for_pack_labor = document.getElementById('for_pack_labor');
let labor_opt = `<option value="">Select Number of Labor</option>`;


for (let i = 1; i < 11; i++) {
    sp_ar_options += `<option value="${i}">${i}</option>`;
    labor_opt += `<option value="${i}">${i}</option>`;
}


labors_num.innerHTML = labor_opt;
sp_ar_items.forEach((item) => {
    item.innerHTML = sp_ar_options;
})
for_pack_labor.innerHTML = labor_opt;

// Time_1
let moving_time = document.getElementById('moving_time');
let moving_time_list = `<option value="">Time</option>`;

let hour = 8;
let minute = 0;
while (hour < 20) {
    minute = 0;
    while (minute < 60) {
        t_elm = `<option value="${hour}:${minute}">${(hour < 10) ? `0${hour}` : `${hour}`}:${(minute < 10) ? `0${minute}` : `${minute}`}</option>`
        moving_time_list += t_elm;
        minute += 15;
    }        
    hour += 1;
}
moving_time_list += `<option value="20:00">20:00</option>`;

moving_time.innerHTML = moving_time_list;

// Show/Hide Packing Details Secondary
let pac_ser_type_extra = document.getElementById('pac_ser_type_extra');
let package_ser_type = document.getElementById('package_ser_type');

package_ser_type.addEventListener('change', () => {
    if (package_ser_type.value == 'labor_worker' || package_ser_type.value == 'both') {
        if(pac_ser_type_extra.classList.contains('hide')){
            pac_ser_type_extra.classList.remove('hide');
        }
        pac_ser_type_extra.classList.add('show');
    }else{
        if(pac_ser_type_extra.classList.contains('show')){
            pac_ser_type_extra.classList.remove('show');
        }
        pac_ser_type_extra.classList.add('hide');

    }
})

// Booking Type
// let truck_labors = document.getElementById('truck_labors');
// let labors_time = document.getElementById('labors_time');
// let moving_info = document.getElementById('moving_info');
// let packing_services = document.getElementById('packing_services');
// let spacial_artical = document.getElementById('spacial_artical');

let booking_items = document.querySelectorAll('.booking_item');
function hide_all_booking_item() {
    booking_items.forEach((item) => {
        if(item.classList.contains('show')){
            item.classList.remove('show');
        }
        item.classList.add('hide');
    })
}

function show_all_booking_item() {
    booking_items.forEach((item) => {
        if(item.classList.contains('hide')){
            item.classList.remove('hide');
        }
        item.classList.add('show');
    })
}



// Html Manupulation
let booking_type = document.getElementById('booking_type');
let moving_title = document.getElementById('moving_title');

booking_type.addEventListener('change', () => {
    if (booking_type.value == 'hourly') {
        show_all_booking_item();
        moving_title.innerText = '[ HOURLY ]';
    }
    if (booking_type.value == 'flat_rate') {
        booking_items[2].classList.add('show');
        booking_items[3].classList.add('show');
        booking_items[4].classList.add('show');
        moving_title.innerText = '[ FLAT RATE ]';
    }
    if (booking_type.value == 'sp_artical') {
        booking_items[4].classList.add('show');
        moving_title.innerText = '[ SPACIAL ARTICAL ]';
    }
    if (booking_type.value == '') {
        hide_all_booking_item();
    }
})





