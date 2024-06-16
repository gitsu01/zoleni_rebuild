

// Insurance
let ins_type = document.getElementsByName('ins_type');
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

ins_type.forEach((item) => {
    item.innerHTML = ins_list;
})


// Package
let package_quantity = document.querySelectorAll('.package_quantity');
let child = `<option value="">Select Box Quanity</option>`;
for (let i = 1; i <= 100; i++) {
    child += (`<option value="${i}">${i}</option>`);          
}

if (package_quantity) {
    package_quantity[0].innerHTML = child;
}

// Package type
let package_type_list = `
    <option value="">Select Box Type</option>
    <option value="envelope">Envelope (4' x 18' x 18')</option>
    <option value="small">Small (12' x 12' x 12')</option>
    <option value="medium">Medium (16' x 16' x 16')</option>
    <option value="large">Large (20' x 20' x 20')</option>
    <option value="xlarge">XLarge (28' x 28' x 28')</option>
    <option value="flat_small">Flat Small (2' x 24' x 24')</option>
    <option value="flat_medium">Flat Medium (2' x 24' x 48')</option>
    <option value="flat_large">Flat Large (2' x 48' x 48')</option>
    <option value="flat_xlarge">Flat XLarge (2' x 48' x 96')</option>                            
    <option value="tube_small">Tube Small (6' x 6' x 36')</option>
    <option value="tube_medium">Tube Medium (10' x 10' x 50')</option>
    <option value="tube_large">Tube Large (10' x 10' x 96')</option>
    <option value="spacial_box">Spacial Box (10' x 30' x 55')</option>
    <option value="wardrobe_box">Wardrobe Box (22' x 24' x 60')</option>
`;
let package_type = document.querySelectorAll('.package_type');
package_type[0].innerHTML = package_type_list;


// Add Package & Delivery Act
let add_package = document.getElementById('add_package');
let package_sec = document.getElementById('package_sec');

add_package.addEventListener('click', () => {
    let ran_num = Math.floor(Math.random() * 1000000);
    let elm = document.createElement('div');
    elm.classList.add('package_item','full_inp_sec','gap_0');

    elm.setAttribute('_uid', ran_num);
    elm.innerHTML = `
        <select class="select package_type" name="package_type" id="package_type">
            ${package_type_list}
        </select>
        <select class="select package_quantity" name="package_quantity" id="package_quantity">
            ${child}
        </select>
        <button class="side_delete_btn" onclick="delete_pack_item(${ran_num})"><i class="bi bi-trash"></i></button>
    `;

    package_sec.appendChild(elm);
})

function delete_pack_item(val) {
    let pac_item_list = document.querySelectorAll('.package_item');
    val = parseInt(val);

    pac_item_list.forEach((item) => {
        let key = parseInt(item.getAttribute('_uid'));
        if(val == key){
            package_sec.removeChild(item);
        }
    })            

}

// Add Delivery Acts
let add_delivery_act = document.getElementById('add_delivery_act');
let delivery_act_inp = document.getElementById('delivery_act_inp');

if(add_delivery_act){
    add_delivery_act.addEventListener('click', () => {
        let ran_id = Math.floor(Math.random() * 1000000);
        let d_elm = document.createElement('div');
        d_elm.classList.add('full_inp_sec','gap_0');
        d_elm.setAttribute('id', ran_id);

        d_elm.innerHTML = `
            <select _uid="${ran_id}" class="select data_item" name="da_item" id="da_item" onchange="func_data_ref(this)">
                <option value="">Select</option>
                <option value="dancer">Dancer</option>
                <option value="singer">Singer</option>
            </select>
            <select ref="${ran_id}" class="select data_ref">
                <option value="">Choose Performer</option>
            </select>
            <button class="side_delete_btn" onclick="delete_del_act(${ran_id})"><i class="bi bi-trash"></i></button>
        `;

        delivery_act_inp.appendChild(d_elm);

    })
}

// Delete Delivery Act
function delete_del_act(_id) {
    let del_it = document.getElementById(_id);
    delivery_act_inp.removeChild(del_it);
}
  

// Weekly Time Table
let weekly_sel_inp = document.querySelectorAll('.weekly_sel_inp');
let inte_dtime = document.querySelectorAll('#inte_dtime');
let time_list = '';

let hour = 0;
let minute = 0;
while (hour < 24) {
    minute = 0;
    while (minute < 60) {
        t_elm = `<option value="${hour}:${minute}">${(hour < 10) ? `0${hour}` : `${hour}`}:${(minute < 10) ? `0${minute}` : `${minute}`}</option>`
        time_list += t_elm;
        minute += 15;
    }        
    hour += 1;
}

console.log(inte_dtime);
inte_dtime[0].innerHTML += time_list;
weekly_sel_inp.forEach((item) => {
    item.innerHTML += time_list;
})

// Dancer & Singer
function func_data_ref(e) {
    e_value = e.value;
    _uid = parseInt(e.getAttribute('_uid'));

    let data_ref = document.querySelectorAll('.data_ref');
    let singer_data = `
        <option value="">Select</option>
        <option value="baritone">Baritone</option>
        <option value="soprano">Soprano</option>
        <option value="tenor">Tenor</option>
    `;
    let dancer_data = `
        <option value="">Select</option>
        <option value="ballet">Ballet</option>
        <option value="conten">Contenporary</option>
        <option value="hip_hop">Hip Hop</option>
    `;

    data_ref.forEach((item) => {
        if(item.value == ''){
            let val = parseInt(item.getAttribute('ref'));
            if(val == _uid){
                if(e_value == 'singer'){
                    item.innerHTML = singer_data;
                }
                if(e_value == 'dancer'){
                    item.innerHTML = dancer_data;
                }
                if (e_value == '') {
                    item.innerHTML = `<option value="">Choose Performer</option>`;
                }
            }
        }
    })

}

// html manu
function func_del_mal(item){
    link = window.location.origin;
    if(item.value == 'now'){
        window.location.replace(`${link}/pages/quote_rate/delivery/now.html`)
    }
    if(item.value == 'schedule'){
        window.location.replace(`${link}/pages/quote_rate/delivery/schedule.html`)
    }
    if(item.value == 'sameday'){
        window.location.replace(`${link}/pages/quote_rate/delivery/sameday.html`)
    }
    if(item.value == 'ongoing'){
        window.location.replace(`${link}/pages/quote_rate/delivery/ongoing.html`)
    }
    if(item.value == 'inter'){
        window.location.replace(`${link}/pages/quote_rate/delivery/interactive.html`)
    }
    if(item.value == 'same_pickup'){
        window.location.replace(`${link}/pages/quote_rate/delivery/same_pickup.html`)
    }
    if(item.value == 'same_dropoff'){
        window.location.replace(`${link}/pages/quote_rate/delivery/same_dropoff.html`)
    }
}