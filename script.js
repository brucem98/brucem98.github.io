let eventTarget = document.querySelectorAll('.target_element');

let clickEvent = (event) => {
    if (window.getComputedStyle(event.target.parentNode.children[1]).display === 'none') {
        event.target.parentNode.children[1].style.display = 'block';
        event.target.parentNode.children[2].style.display = 'block';
    } else {
        event.target.parentNode.children[1].style.display = 'none';
        event.target.parentNode.children[2].style.display = 'none';
    }
}

eventTarget.forEach((item) => {
    item.addEventListener('click', clickEvent);
})



// // addEventListenerListener() syntax allows for multiple event handler functions
// // eventTarget.addEventListener('click', eventHandlerFunction);

// eventTarget.onclick = eventHandlerFunction;
