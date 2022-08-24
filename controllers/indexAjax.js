//Code các chức năng thao tác vs dũ liệu từ Backend
//GET:Lấy thông tin từ sever và hiển thị lên table tbody
async function getData() {
    try {
        let result = await axios({
            url: 'https://shop.cyberlearn.vn/api/Product',//Đường dẫn BE cung cấp
            method: 'GET',
            ResponseType: 'JSON',
        })
        // render(result.data.content)
        let dataRender = result.data.content
        let output = "";
        for (let item of dataRender) {
            console.log(item)
   

            let renderItem = `
            <div class="col-4">
                        <div class="item">
                            <img src="./img/image 5.png" alt="" />
                            <div class="card-body">
                                <h1>${item.name}</h1>
                                <p>${item.description}</p>
                            </div>
                            <div class="card-button">
                                <button><a href="./detail.html?productid=${item.id}">Buy now</a></button>
                                <span>85$</span>
                            </div>
                        </div>
                    </div>
            `;
            output += renderItem
        }
        document.querySelector(".product").innerHTML = output

        console.log(dataRender)
    } catch (err) {
        console.log(err)
    }
}
//Sau khi giao diện load xong thì sẽ tự động thực thi các hàm trong funtion
window.onload = function () {
    //Gọi api lấy data từ backend
    getData()
}


