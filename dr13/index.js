document.addEventListener('DOMContentLoaded',()=>{
    let count = document.querySelector('.counter')
    document.addEventListener('click',(e)=>{
        if(e.target.classList.contains('increment')){
            count.innerText = parseInt(count.innerText) + 1
        }
        if(e.target.classList.contains('decrement')){
            if(parseInt(count.innerText) > 0) {
                count.innerText = parseInt(count.innerText) - 1
            }
        }
        if(e.target.classList.contains('reset-count')){
            count.innerText = 0
        }
    })
})