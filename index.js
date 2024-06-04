// Sidebar
let open_menu = document.getElementById('open_menu');
let close_menu = document.getElementById('close_menu');
let sidebar = document.getElementById('sidebar');

open_menu.addEventListener('click', () => {
    sidebar.classList.add('open');
})

close_menu.addEventListener('click', () => {
    sidebar.classList.remove('open');
})


// Dropdown Function
let d_item = document.querySelectorAll('.sidebar_d_items');
d_item.forEach((item) => {
    item.addEventListener('click', () =>{
        let temp_class = document.querySelector(`#${item.id.toString().concat('_list')}`);
        temp_class.classList.toggle('active');
    })
})


// Login
let login_model = document.getElementById('login_model');
let login_o_btn = document.getElementById('login_btn');
let login_c_btn = document.getElementById('close_l_model');

login_o_btn.addEventListener('click', () => {
    login_model.classList.add('active');
})

login_c_btn.addEventListener('click', () => {
    login_model.classList.remove('active');
})


// Local Time
let show_time = document.getElementById('local_time');
setInterval(() => {
    let time = new Date();
    let time_now = time.toLocaleTimeString();
    show_time.innerText = time_now;
},1000)

