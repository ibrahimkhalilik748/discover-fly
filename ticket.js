function firstClassTicket (button){
    const ticketInput = document.getElementById('first-class-ticket-count');
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if (button == true){
        ticketNewCount = ticketCount + 1 ;
    }
    if (button == false && ticketCount > 0){
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    const ticketPrice = ticketNewCount * 150;
    document.getElementById("first-price").innerText = ticketPrice;
    Subtotal();
};


function economyTicket(button){
    const ticketInput = document.getElementById('economy-ticket-count');
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if (button == true){
        ticketNewCount = ticketCount + 1 ;
    }
    if (button == false && ticketCount > 0){
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    const ticketPrice = ticketNewCount * 100;
    document.getElementById("economy-price").innerText = ticketPrice;
    Subtotal();
};

function Subtotal(){
    const firstClassTicket = document.getElementById('first-class-ticket-count');
    const firstClassCount = parseInt(firstClassTicket.value);

    const economyTicket = document.getElementById('economy-ticket-count');
    const economyCount = parseInt(economyTicket.value);

    const totalPrice = firstClassCount * 150 + economyCount * 100;
    document.getElementById("Subtotal").innerText = totalPrice;

    const vat = totalPrice * 0.1;
    document.getElementById('vat').innerText = vat;

    const grandTotal = totalPrice + vat;
    document.getElementById("grand-total").innerText = grandTotal;
}










    const bookingBtn = document.getElementById("book-btn");
        bookingBtn.addEventListener("click", function(){
        const body = document.getElementById("body");
        body.style.display = "none";
        const displayBack = document.getElementById("display");
            displayBack.style.display = "block";
        
    })












// function firstClassTicket (button){
//     const ticketInput = document.getElementById('first-class-ticket-count');
//     const ticketCount = parseInt(ticketInput.value);
//     let ticketNewCount = ticketCount;
//     if (button == true){
//         ticketNewCount = ticketCount + 1 ;
//     }
//     if (button == false && ticketCount > 0){
//         ticketNewCount = ticketCount - 1;
//     }
//     ticketInput.value = ticketNewCount;
//     const ticketPrice = ticketNewCount * 150;
//     document.getElementById("first-price").innerText = ticketPrice;
// };


// function economyTicket(button){
//     const ticketInput = document.getElementById('economy-ticket-count');
//     const ticketCount = parseInt(ticketInput.value);
//     let ticketNewCount = ticketCount;
//     if (button == true){
//         ticketNewCount = ticketCount + 1 ;
//     }
//     if (button == false && ticketCount > 0){
//         ticketNewCount = ticketCount - 1;
//     }
//     ticketInput.value = ticketNewCount;
//     const ticketPrice = ticketNewCount * 100;
//     document.getElementById("economy-price").innerText = ticketPrice;
// }



// document.getElementById('first-class-plus-btn').addEventListener('click', function(){
//         const ticketInput = document.getElementById('ticket-count');
//         const ticketCount = parseInt(ticketInput.value);
//         const ticketNewCount = ticketCount + 1 ;
//         ticketInput.value = ticketNewCount;
//         const ticketPrice = ticketNewCount * 150;
//         document.getElementById("first-price").innerText = ticketPrice;
//     });

// document.getElementById("first-class-minus-btn").addEventListener('click', function(){
//     const ticketInput = document.getElementById('ticket-count');
//         const ticketCount = parseInt(ticketInput.value);
//         const ticketNewCount = ticketCount - 1 ;
//         ticketInput.value = ticketNewCount;
//         const ticketPrice = ticketNewCount * 150;
//         document.getElementById("first-price").innerText = ticketPrice;
// });
