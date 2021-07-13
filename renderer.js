const { ipcRenderer } = require('electron');

const close_btn = document.getElementById('close-btn');
const min_btn = document.getElementById('minim-btn');
const max_btn = document.getElementById('maxim-btn');
//const menu_bar_btn = document.getElementById('menu_bar_btn');

close_btn.onclick = () => {
    ipcRenderer.send('close-window')
};

min_btn.onclick = () => {
    ipcRenderer.send('minim-window')
}

max_btn.onclick = () => {
    ipcRenderer.send('maxim-window')
}

//menu_bar_btn.onclick = () => {
//    ipcRenderer.send('open-menu')
//}