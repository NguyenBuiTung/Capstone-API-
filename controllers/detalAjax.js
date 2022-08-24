window.onload =function(){
    const urlParams= new URLSearchParams(window.location.search)
    const myParam=urlParams.get('product')
    console.log('first',myParam)
}