
(function (){
    const setTodayDate = (date) => {
        const title = document.querySelector('[data-title]')

        title.innerText = date.toDateString()
    }
    const setGreeting = (date) => {
        const greeting = document.querySelector('[data-greeting]')

        const hour = date.getHours()

        if (hour >= 4 && hour <= 11) {
            greeting.innerText = "Good morning!! "
        } else if (hour >= 12 && hour <= 18) {
            greeting.innerText = "Good Afternoon!! "
        } else {
            greeting.innerText = "Good Evening!! "
        }
                
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
    
    const setCounter = () =>{
        const container = document.querySelector('[data-list]')
        const counter = document.querySelector('[data-counter]')
        const quantity = container.childNodes.length

        counter.innerText = quantity
    }
    const removeItem = (index) => {
        const card = document.querySelector(`[data-card="${index}"`)
        card.remove()
        setCounter()

    }
    const createItem = (value, index, container) => {
        const card = document.createElement('li')
        card.classList.add('card')
        card.setAttribute('data-card', index)
        
        const button = document.createElement('button')
        button.setAttribute('type','button')
        button.classList.add('button-del')
        button.addEventListener('click', () =>removeItem(index))
        button.innerHTML = '<img class="button-del__image" src="delete.png" alt="deletar"></img>'
        
        card.innerHTML = `
            <input class="checkbox" type="checkbox" id="item-${index}"/>
            <label for="item-${index}" class="card__label">${value}</label>
        `
        card.appendChild(button)
        
        container.appendChild(card)
    }

    const initForm = () => {
        const input = document.querySelector('[data-input]')
        const list = document.querySelector('[data-list]')
        const form = document.querySelector('[data-form]')
        let counter = 0


        form.addEventListener('submit', (e) => {
            e.preventDefault()
            
            createItem(input.value, counter, list)
            counter++
            setCounter()
        })  
        setCounter()
    }
    const date = new Date()
       
    initForm()
    setGreeting(date)
    setTodayDate(date)
    openField()
})()
