
(function (){    
    const setTodayDate = () => {
        const date = new Date().toDateString()
        const title = document.querySelector('[data-title]')

        title.innerText = date
    }

    setTodayDate()
})()
