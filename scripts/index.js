
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
    const initForm = () => {
        const input = document.querySelector('[data-input]')
        const list = document.querySelector('[data-list]')
        const form = document.querySelector('[data-form]')

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            
            const card = document.createElement('li')
            card.classList.add('card')
            card.innerHTML = `
                <input class="checkbox" type="checkbox" id="item-${input.value}"/>
                <label class="card__label" for="item-${input.value}"> ${input.value} 
                <button class="button-del" type="button"><img class="button-del__image" src="delete.png" alt="deletar"></button>
                </label>
            `
            
            list.appendChild(card)
        })  
    }
    initForm()
    setTodayDate()
    openField()
})()
