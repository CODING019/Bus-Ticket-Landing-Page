 let totalPrice = 0;
const cards = document.querySelectorAll('.card')
for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    // console.log(card)
    card.addEventListener('click', function () {
        // console.log('clicked');
        card.style.background = 'green'
        // Title
        const title = card.querySelector('h1').innerText
        const price =  550
        // console.log(price)
    
        const titleContainer = document.getElementById('title-container')
        // console.log(titleContainer)

        const p = document.createElement('li')
        // p.innerText = title;
        const d3 = document.createElement('div')
        d3.innerText = title
        const d1 = document.createElement('div')
        d1.innerText = 'economy'
        const d2 = document.createElement('div')
        d2.innerText = price
        p.classList.add('flex','justify-between')
        p.appendChild(d3)
        p.appendChild(d1)
        p.appendChild(d2)
        titleContainer.appendChild(p)
        // Total Price
        totalPrice += price;
        // console.log(totalPrice)
        document.getElementById('total-price').innerText = totalPrice.toFixed(2)
    })

    // Discount Button
 
    
}
const btn = document.getElementById('apply-button');
btn.addEventListener('click', function(){
   
    const getInput = document.getElementById("input-filed");
    const getInput2 = getInput.value.trim(); // trim added to remove leading/trailing whitespaces

    if (getInput2 === 'NEW15') {
        const discountElement = document.getElementById("discount");
        const discountAmount = totalPrice - (totalPrice * 15 / 100);
        discountElement.innerText = discountAmount.toFixed(2);
    } 
    else if (getInput2 === 'Couple 20') { // changed 'Couple 20' to 'Couple20' to match the input value
        const discountElement = document.getElementById("discount");
        const discountAmount = totalPrice - (totalPrice * 20 / 100);
        discountElement.innerText = discountAmount.toFixed(2);
    } 
    else {
        alert('Invalid Coupon');
    }
});
