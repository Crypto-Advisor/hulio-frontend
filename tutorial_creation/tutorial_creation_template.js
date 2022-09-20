let Url='';

let Project_name='';

let Category='';

let image_url='';

let description='';

const exampleSteps = { 
    "html_steps": [
        //step 1 <- (dont need to add these, just for show)
        '<div class="popup-tutorial-template popup-1">\n' +
            '<h1 id = "site-title">Jupiter</h1>\n' +
            '<p id = "paragraph123456">Jupiter searches all <a class = "vocab" href="https://coinmarketcap.com/alexandria/glossary/exchange" target="_blank">exchanges</a> on <a class = "vocab" href="https://www.youtube.com/watch?v=1jzROE6EhxM" target="_blank">Solana</a> to find you the best prices for <a class = "vocab" href="https://coinmarketcap.com/alexandria/glossary/token-swap" target="_blank">swapping</a> crypto.</p>\n' +
            '<button id="button-1">Continue</button>\n' +
        '</div>'

        ,
        //step 2
        '<div class="popup-tutorial-template popup-2">\n' +
            '<h1 id = "site-title">Connect Wallet</h1>\n' +
            '<p id = "paragraph123456">To swap crypto and interact with the <a class = "vocab" href="https://www.youtube.com/watch?v=1jzROE6EhxM" target="_blank">Solana</a> <a class = "vocab" href="https://coinmarketcap.com/alexandria/article/what-is-a-blockchain" target="_blank">blockchain</a>, you must first connect your <a class = "vocab" href="https://coinmarketcap.com/alexandria/glossary/wallet" target="_blank">wallet</a>. A wallet stores your crypto and is how you interact with <a class = "vocab" href="    https://coinmarketcap.com/alexandria/glossary/decentralized-applications-dapps" target="_blank">decentralized applications</a>. Click the "Connect Wallet" button in the top right corner. </p>\n' +
            `<button target="_blank" class = "button12345" onclick="window.open('https://phantom.app/');">Get a wallet</button>\n` +
            '<button id="button-1">My wallet is connected</button>\n' +
        '</div>'
        
        ,
        //step 3
        '<div class="popup-tutorial-template popup-2">\n' +
            '<h1 id = "site-title">Connect Wallet</h1>\n' +
            '<p id = "paragraph123456">To swap crypto and interact with the <a class = "vocab" href="https://www.youtube.com/watch?v=1jzROE6EhxM" target="_blank">Solana</a> <a class = "vocab" href="https://coinmarketcap.com/alexandria/article/what-is-a-blockchain" target="_blank">blockchain</a>, you must first connect your <a class = "vocab" href="https://coinmarketcap.com/alexandria/glossary/wallet" target="_blank">wallet</a>. A wallet stores your crypto and is how you interact with <a class = "vocab" href="    https://coinmarketcap.com/alexandria/glossary/decentralized-applications-dapps" target="_blank">decentralized applications</a>. Click the "Connect Wallet" button in the top right corner. </p>\n' +
            `<button target="_blank" class = "button12345" onclick="window.open('https://phantom.app/');">Get a wallet</button>\n` +
            '<button id="button-1">My wallet is connected</button>\n' +
        '</div>'
    ] 
}

