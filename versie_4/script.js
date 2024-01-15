document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('webcam')
    const messageContainer = document.getElementById('messageContainer')
    const textHidden = document.getElementById('product')
    let audioNotif = new Audio('./iphone_ding.mp3')

    audioNotif.autoplay = false

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                video.srcObject = stream
            })
            .catch(function (error) {
                console.error('Error accessing webcam:', error)
            })
    }

    function checkOpacity() {
        const section103 = document.querySelector('section:nth-of-type(103)')

        if (section103 && window.getComputedStyle(section103).opacity === '1') {
            messageContainer.style.display = 'none'
            textHidden.style.display = 'flex'
            audioNotif.play()
        }
    }

    // Controleer de opacity elke seconde
    setInterval(checkOpacity, 500)

    // Voorkom standaardgedrag van het notif-element (bijv. voorkom het herladen van de pagina)
    const messageBtn = document.getElementById('notif')
    messageBtn.addEventListener('click', function (event) {
        event.preventDefault()
    })
})
