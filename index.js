const input = document.querySelector('#fruit');
const button = document.querySelector('#submit')
const targetNode = document.querySelector('#myList')

const config = {
    attributes: true,
    childList: true,
    subtree: true
}

// Event Listeners
button.addEventListener('click', add)

function add () {
    const li = document.createElement('li');
    const text = input.value
    li.appendChild(document.createTextNode(text))
    targetNode.appendChild(li)
}


// Mutation Observer
const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
        console.log(mutation);

        if (mutation.type === 'childList') {
            console.log('Child added or removed');
        } else if (mutation.type === 'attributes') {
            console.log(`The ${mutation.attributeName} attribute was modified`);
        }
    }
}

const observer = new MutationObserver(callback)

observer.observe(targetNode, config)
// observer.disconnect()