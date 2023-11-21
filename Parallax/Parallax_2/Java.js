const koz = document.querySelectorAll('.koz'),
      smile = document.querySelector('.smile')

      window.addEventListener('mousemove', (e) => {
    koz.forEach(el => {
        const speed = el.getAttribute('speed')
        let x = (window.innerWidth - e.pageX * speed) / 15
        let y = (window.innerHeight - e.pageY * speed) / 5
        el.style.transform = `translate(${x}px, ${y}px)`
    })
})