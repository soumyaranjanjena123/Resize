const resizerRight = document.querySelector('.resizer-right');
const resizerBottom = document.querySelector('.resizer-bottom');

const right = document.querySelector('.right');
const bottom = document.querySelector('.bottom');


const main = document.querySelector(".main")


// set the max width and height 

const maxRightWidth = 400;
const maxBottomHeight = 300;
const minRightWidth = 200;
const maxLowerHeight = 145;



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

    if (newWidth > maxRightWidth) {
        right.style.width = `${maxRightWidth}px`;
        // main.style.width = `${containerWidth - maxRightWidth}px`;
    } else if (newWidth < minRightWidth) { // Minimum width constraint
        right.style.width = `${minRightWidth}px`;
        // main.style.width = `${containerWidth - minRightWidth}px`;
    } else {
        right.style.width = `${newWidth}px`;
        // main.style.width = `${newWidth}px`;
    }

    


    // new width doesnot exceed

    // if(newWidth>maxRightWidth){
    //     right.style.width = `${maxRightWidth}px`;
    // }else if(newWidth<100){
    //     right.style.width =`100px`
    // }else{
    //     right.style.width = `${newWidth}px`
    // }
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

    console.log(newHeight);

    // if(newHeight<maxLowerHeight){
    //     bottom.style.height =`${maxLowerHeight}px`
        
    // }

    // height does not exceed

    if (newHeight > maxBottomHeight) {
        bottom.style.height = `${maxBottomHeight}px`;
        // main.style.height = `${containerHeight - maxBottomHeight}px`;
    } else if (newHeight < maxLowerHeight) { // Minimum height constraint
        bottom.style.height = `${maxLowerHeight}px`;
        // main.style.height = `${containerHeight - maxLowerHeight}px`;
    } else {
        bottom.style.height = `${newHeight}px`;
        // main.style.height = `${newHeight}px`;
    }
}

function stopResizeBottom() {
    
    document.removeEventListener('mousemove', resizeBottom)
    document.removeEventListener('mouseup', stopResizeBottom)
}


