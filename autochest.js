console.log("starting chest-bot");
setInterval(() => {
    console.log("looking for chest");
    let el = document.querySelector("#donation-box > div > div:nth-child(1) > div > div.treasure-chest-popup > div.width-100.bordert-grey-darken-2.flex-all-center.paddingt-4.margint-3 > div > div > span");
    if(el) {
        console.log("found chest");
        el.click();
    }
}, 1500);
