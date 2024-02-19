 let totalPrice = 0;
const cards = document.querySelectorAll('.card')
for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    // console.log(card)
    card.addEventListener('click', function () {
        // console.log('clicked');

        // Title
        const title = card.querySelector('h1').innerText
        const price =  550
        // console.log(price)
    
        const titleContainer = document.getElementById('title-container')
        // console.log(titleContainer)

        const p = document.createElement('p')
        p.innerText = title;

        titleContainer.appendChild(p)

        // Total Price
        totalPrice += price;
        // console.log(totalPrice)
        document.getElementById('total-price').innerText = totalPrice.toFixed(2)
    })

    // Discount Button
    const btn = document.getElementById('apply-button')
    btn.addEventListener('click',function(){
       
        const getInput = document.getElementById("input-filed")
        console.log(getInput.value)

        if(getInput === 'NEW15' || getInput === 'COUPLE 20'){
            const discountElement = document.getElementById("discount")
            const discountAmount = totalPrice * 0.2;
            // discountElement.innerText =discountAmount.toFixed(2)
            console.log(discountAmount)

            

        }
        // // else{
        //     alert('Invalid Coupon')
        // }
    })
    
}