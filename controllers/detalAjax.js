window.onload =function(){
    const urlParams= new URLSearchParams(window.location.search)
    const myParam=urlParams.get('productid')
    console.log('first',myParam)
    getData(myParam)
}

async function getData(tung) {
    console.log("tung", tung)
    try {
        
    } catch (error) {
        
    }
}

