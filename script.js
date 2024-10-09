const resizerRight = document.querySelector('.resizer-right');
const resizerBottom = document.querySelector('.resizer-bottom');

const right = document.querySelector('.right');
const bottom = document.querySelector('.bottom');


// set the max width and height 

const maxRightWidth = 400;
const maxBottomHeight = 300;



// Resizing the right section
resizerRight.addEventListener('mousedown', function (e) {
    e.preventDefault();
    document.addEventListener('mousemove', resizeRight);
    document.addEventListener('mouseup', stopResizeRight);
});

function resizeRight(e) {
    const containerWidth = window.innerWidth;
    const newWidth = containerWidth - e.clientX;
    right.style.width = `${newWidth}px`;

    console.log(newWidth)
    // main.style.width = `${e.clientX}px`;


    // new width doesnot exceed

    if(newWidth>maxRightWidth){
        right.style.width = `${maxRightWidth}px`;
    }else if(newWidth<100){
        right.style.width =`100px`
    }else{
        right.style.width = `${newWidth}px`
    }
}

function stopResizeRight() {
    document.removeEventListener('mousemove', resizeRight);
    document.removeEventListener('mouseup', stopResizeRight);
}

// Resizing the bottom section
resizerBottom.addEventListener('mousedown', function (e) {
    e.preventDefault()
    document.addEventListener('mousemove', resizeBottom)
    document.addEventListener('mouseup', stopResizeBottom)
});

 function resizeBottom(e) {
    // const containerHeight = container.getBoundingClientRect().height;
    const containerHeight = window.innerHeight;
    const newHeight = containerHeight - e.clientY;
    bottom.style.height = `${newHeight}px`;
    // right.style.height = "160%"
    // main.style.height = `${e.clientY}px`;

    // height does not exceed

    if(newHeight>maxBottomHeight){
        bottom.style.height = `${maxBottomHeight}px`
        right.style.height = `${173.6}% `
    }else if(newHeight<100){
        bottom.style.height = `100px`
    }else{
        bottom.style.height =`${newHeight}`
    }
}

function stopResizeBottom() {
    
    document.removeEventListener('mousemove', resizeBottom)
    document.removeEventListener('mouseup', stopResizeBottom)
}


