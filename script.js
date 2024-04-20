document.addEventListener('DOMContentLoaded', () => {
    const choicePictures = document.querySelectorAll('.choicePicture');
    const mainPhoto = document.getElementById('mainPhoto');

    choicePictures.forEach(picture => {
        picture.addEventListener('click', () => {
            const src = picture.src;
            mainPhoto.src = src;
        });
    });
});


function changeColor(element) {
    element.style.borderColor = "brown";
}



document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const plusButtons = document.querySelectorAll('.plus');
    const minusButtons = document.querySelectorAll('.minus');
    const quantityInputs = document.querySelectorAll('.quantity-input');

    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const quantity = parseInt(quantityInputs[index].value);
            addToCart(productName, productPrice, quantity);
        });
    });

    plusButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let currentValue = parseInt(quantityInputs[index].value);
            quantityInputs[index].value = currentValue + 1;
        });
    });

    minusButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let currentValue = parseInt(quantityInputs[index].value);
            if (currentValue > 1) {
                quantityInputs[index].value = currentValue - 1;
            }
        });
    });
});
