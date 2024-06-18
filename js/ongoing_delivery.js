// Add Package
let add_exc_inp = document.getElementById('add_exc_inp');
let exception_inputs = document.getElementById('exception_inputs');

add_exc_inp.addEventListener('click', () => {
    let ran_num = Math.floor(Math.random() * 1000000);
    let elm = document.createElement('div');
    elm.classList.add('exc_item');

    elm.setAttribute('_uid', ran_num);
    elm.innerHTML = `
        <input type="date" name="exception_inp">
        <button class="side_delete_btn" onclick="delete_exc_inp(${ran_num})"><i class="bi bi-trash"></i></button>
    `;

    exception_inputs.appendChild(elm);
})

// 

function delete_exc_inp(val) {
    let excep_list = document.querySelectorAll('.exc_item');
    val = parseInt(val);

    excep_list.forEach((item) => {
        let key = parseInt(item.getAttribute('_uid'));
        if(val == key){
            exception_inputs.removeChild(item);
        }
    })            

}


// Month 
let month_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let current_month = new Date().getMonth();
let check_inp_sec = document.querySelector('.check_inp_sec');

for (let i = 1; i <= month_days[current_month]; i++) {
    if (i == 1 || i == 21 || i == 31){ m_ext = 'st' }
    else if(i == 2 || i == 22){ m_ext = 'nd' }
    else if(i == 3 || i == 23){ m_ext = 'rd' }
    else { m_ext = 'th'}
    let m_elm = `
        <div class="check_inp_field">
            <input type="checkbox" name="${i}" id="${i}">
            <label for="${i}">${i}${m_ext}</label>
        </div>
    `;

    check_inp_sec.innerHTML += m_elm;
 
}

// 

let ongoing_items = document.querySelectorAll('.ongoing_item');
let exception = document.getElementById('exception');

function hide_all_ongoing_item() {
    ongoing_items.forEach((item) => {
        if(item.classList.contains('show')){
            item.classList.remove('show');
        }
        item.classList.add('hide');
    })
    exception.classList.add('hide');
}


// Html Manupulation
let ongoing_type = document.getElementById('ongoing_type');

ongoing_type.addEventListener('change', () => {
    console.log(ongoing_type.value);
    if(ongoing_type.value != ''){
        exception.classList.add('show');
    }
    if (ongoing_type.value == 'daily') {
        ongoing_items[0].classList.add('show');
        ongoing_items[1].classList.remove('show');
        ongoing_items[2].classList.remove('show');

    }
    if (ongoing_type.value == 'weekly') {
        ongoing_items[0].classList.remove('show');
        ongoing_items[1].classList.add('show');
        ongoing_items[2].classList.remove('show');

    }
    if (ongoing_type.value == 'monthly') {
        ongoing_items[0].classList.remove('show');
        ongoing_items[1].classList.remove('show');
        ongoing_items[2].classList.add('show');

    }
    if (ongoing_type.value == '') {
        hide_all_ongoing_item();
    }
})