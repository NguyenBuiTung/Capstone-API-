//Code các chức năng thao tác vs dũ liệu từ Backend
//GET:Lấy thông tin từ sever và hiển thị lên table tbody
async function getData() {
    try {
        let result = await axios({
            url: 'https://shop.cyberlearn.vn/api/Product',//Đường dẫn BE cung cấp
            method: 'GET',
            ResponseType: 'JSON',
        })
        renderSinhVien(result.data.content)
    } catch (err) {
        console.log(err)
    }
}
//Sau khi giao diện load xong thì sẽ tự động thực thi các hàm trong funtion
window.onload = function () {
    //Gọi api lấy data từ backend
    getData()
}
