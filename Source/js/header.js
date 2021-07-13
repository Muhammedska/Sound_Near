// ---------- Title space -------------
let title_bar = document.createElement('header');

title_bar.id = 'titlebar';
title_bar.classList.add('width-filler');

document.body.appendChild(title_bar);

let div1 = document.createElement('div');
div1.classList.add('width-filler');

title_bar.appendChild(div1);

let div2 = document.createElement('div');
div2.id = 'drag-region';
div2.classList.add('d-inline-flex');
div2.classList.add('header-black');
div2.classList.add('width-filler');
div2.classList.add('text-dark')
div2.classList.add('fix-40')

div1.appendChild(div2);

let app_span = document.createElement('span');
app_span.id = 'window-title';
app_span.classList.add('text-left');
app_span.classList.add('width-fill-fifty')

div2.appendChild(app_span);

document.getElementById('window-title').innerHTML = `<img src="../Source/image/Logo.png" alt="Logo" class='app-icon rounded-circle app-icon-padding'> Sound Near &nbsp;`;
`let menu_bar_btn = document.createElement('button');
menu_bar_btn.id = 'menu_bar_btn';
menu_bar_btn.classList.add('btn');
menu_bar_btn.classList.add('header-black');
menu_bar_btn.classList.add('text-white');
menu_bar_btn.classList.add('btn-window-other');
app_span.appendChild(menu_bar_btn)

let menu_bar = document.createElement('i');
menu_bar.id = 'menubar';
menu_bar.classList.add('fa');
menu_bar.classList.add('fa-caret-square-down');
menu_bar_btn.appendChild(menu_bar);`

let wintool_span = document.createElement('span');
wintool_span.id = 'window-item';
wintool_span.classList.add('text-right');
wintool_span.classList.add('width-fill-fifty')

div2.appendChild(wintool_span);

// ---------- Buttons -------------

// ---------- Minimize -------------
let win_btn1 = document.createElement('button');
win_btn1.id = 'minim-btn';
win_btn1.classList.add('btn');
win_btn1.classList.add('header-black');
win_btn1.classList.add('text-dark');
win_btn1.classList.add('btn-window-other');

wintool_span.appendChild(win_btn1);

let win_btn1_ico = document.createElement('i');
win_btn1_ico.classList.add('fa');
win_btn1_ico.classList.add('fa-window-minimize');
win_btn1_ico.ariaHidden = true;

win_btn1.appendChild(win_btn1_ico);

// ---------- Maximize -------------
let win_btn2 = document.createElement('button');
win_btn2.id = 'maxim-btn';
win_btn2.classList.add('btn');
win_btn2.classList.add('header-black');
win_btn2.classList.add('text-dark');
win_btn2.classList.add('btn-window-other');

wintool_span.appendChild(win_btn2)

let win_btn2_ico = document.createElement('i');
win_btn2_ico.classList.add('fa');
win_btn2_ico.classList.add('fa-window-maximize');
win_btn2_ico.ariaHidden = true;

win_btn2.appendChild(win_btn2_ico);

// ---------- close -------------
let win_btn3 = document.createElement('button');
win_btn3.id = 'close-btn';
win_btn3.classList.add('btn');
win_btn3.classList.add('header-black');
win_btn3.classList.add('text-dark');
win_btn3.classList.add('btn-window-close');

wintool_span.appendChild(win_btn3);

let win_btn3_ico = document.createElement('i');
win_btn3_ico.classList.add('fa');
win_btn3_ico.classList.add('fa-window-close');
win_btn3_ico.ariaHidden = true;

win_btn3.appendChild(win_btn3_ico);

// ----------  -------------