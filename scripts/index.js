
(function (){    
    const setTodayDate = () => {
        const date = new Date().toDateString()
        const title = document.querySelector('[data-title]')

        title.innerText = date
    }
    const openField = () =>{
        const button = document.querySelector('[data-button]')
        const field = document.querySelector('[data-field]')

        button.addEventListener('click', (e) => {
            field.classList.toggle('field--hidden')
                if (e.target.innerText === '+') {
                    button.innerText = '-'
                } else {
                    button.innerText = '+'
                }    
        })
    }
    setTodayDate()
    openField()
})()
