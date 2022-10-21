const main = document.querySelector(".main");
myInput = main.querySelector("input");
mybtn = main.querySelector("button");
qrImage = main.querySelector("img");
closeBtn = main.querySelector('span')

mybtn.addEventListener("click", () => {
    let value = myInput.value;
    if(!value) return;
    console.log(value)
    mybtn.innerText = "Generating your QR Code..."
    qrImage.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
    qrImage.addEventListener('load', () =>{
        main.classList.add('active')
        mybtn.innerText = "Generate Code"
    })
    
})

closeBtn.addEventListener('click', () => {
    main.classList.remove("active");
    myInput.value = "";
});