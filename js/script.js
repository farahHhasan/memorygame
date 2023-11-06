let duration = 1000;
let blocksContainer = document.querySelector(".game");
let blocks = Array.from(blocksContainer.children);
// let orderRange = [...Array(blocks.length).keys()];
let orderRange = Array.from(Array(blocks.length).keys());
let over = document.getElementById('over');
shuffle(orderRange);


blocks.forEach((block, index) => {
    block.style.order = orderRange[index];
    block.addEventListener('click', function() {
        flipBlock(block);
    });
});

function flipBlock(selectedBlock) {
    selectedBlock.classList.add('is-flipped');
    let allFlipBlocks = blocks.filter(flipBlock => flipBlock.classList.contains('is-flipped'));
    if (allFlipBlocks.length === 2) {
        stopClicking();
        checkMatchedBlocks(allFlipBlocks[0], allFlipBlocks[1]);
    }
}
function stopClicking() {
    blocksContainer.classList.add('no-clicking');
    setTimeout(() => {
        blocksContainer.classList.remove('no-clicking');

    }, duration);
}
function checkMatchedBlocks(firstBlock, secondBlock) {
    if (firstBlock.dataset.palestine === secondBlock.dataset.palestine) {
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');

        firstBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');
        if (document.querySelectorAll('.has-match').length == blocks.length) {
            over.style.display = "block"
        }
    }
    else {
       setTimeout(() => {
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');
       }, duration);
    }
}
function shuffle(array) {
    let current = array.length,
    temp,
    random;
    while (current > 0) {
        random = Math.floor(Math.random() * current);
        current--;
        temp = array[current];
        array[current] = array[random];
        array[random] = temp;
    }
    return array;
}
function re() {
    location.reload();
}