const bulut = document.querySelectorAll('.bulut'),
      qushlar = document.querySelector('.qushlar'),
      quyosh = document.querySelectorAll('.quyosh');

      window.addEventListener('scroll', function(e){
        let y = window.scrollY
        const speed1 = qushlar.getAttribute('speed')
        qushlar.style.transform = `translateY(${y*speed1}px)`
        bulut.forEach((el) => {
            const speed2 = el.getAttribute('speed')
            el.style.transform = `translateX(${y*speed2}px)`
        })
        quyosh.forEach((el) => {
            const speed3 = el.getAttribute('data-speed')
            el.style.transform = `translateY(${y*speed3}px)`
        })
        
      })