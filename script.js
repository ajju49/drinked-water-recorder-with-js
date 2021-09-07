const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx){
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }
//above condition is , eg. if 3rd cup is full but its next cup (eg.4th cup)
// is not full then , we click on 3rd cup it becomes empty  

    smallCups.forEach((cup, idx2) => { 
        //we already use idx 1 to mention index of small cup
        // now idx2 used for index of filled cups
        if(idx2 <= idx) {
         cup.classList.add('full')
        }                                                                                                                                                                                                                                                           
        else{
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length                
    const totalCups = smallCups.length

    console.log(totalCups)

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
    }

    

    // else{
    //     percentage.style.visibility = 'visible'
    //     percentage.style.height = `${fullCups / totalCups*330}px`
    //     //to show filled bigcup we take total fullcups and divide them by total cups 
    //     //and multiply it with 330 (which is height of our bigcup (330px))
    // }
}