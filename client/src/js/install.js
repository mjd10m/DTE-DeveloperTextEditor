const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault()
    butInstall.style.visibility = 'false'
});


butInstall.addEventListener('click', async () => {
    butInstall.setAttribute('disabled', true)
    butInstall.textContent = 'Installed'
});


window.addEventListener('appinstalled', (event) => {
    console.log('app installed', event)
});
