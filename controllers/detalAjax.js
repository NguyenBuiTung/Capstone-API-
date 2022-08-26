import {getData as detail} from './indexAjax.js'
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search)
    const myParam = urlParams.get('productid')
    // console.log('first', myParam)
    getData(myParam)
    detail()
}
async function getData(myParam) {
    // console.log("tung", myParam)
    try {
        let result = await axios({
            url: `  https://shop.cyberlearn.vn/api/Product/getbyid?id=${myParam}`,
            method: 'GET',
            ResponseType: 'JSON',
        })
        let renderData = result.data.content
        console.log(renderData)
        let output = ''
        let render = `
            <div class="carousel-left">
                    <img src="${renderData.image}" alt="">
                </div>
                <div class="carousel-right">
                    <h4>${renderData.name}</h4>
                    <p>${renderData.description}</p>
                    <span class="available">Available size</span>
                    <div class="size"> 
                        <button>${renderData.size[0]}</button>
                        <button>${renderData.size[1]}</button>
                        <button>${renderData.size[2]}</button>
                        <button>${renderData.size[3]}</button>
                        <button>${renderData.size[4]}</button>
                        <button>${renderData.size[5]}</button>
                        <button>${renderData.size[6]}</button>
                    </div>
                    <span class="price">${renderData.price}$</span>
                   <div class="nextprev">
                    <button>+</button>
                    <span>1</span>
                    <button>-</button>
                   </div>
                   <button class="add">Add to cart</button>
                </div>
            `
        output += render
        document.querySelector("#detail").innerHTML = output
    }
    catch (error) {
        console.log(error)
    }
}


