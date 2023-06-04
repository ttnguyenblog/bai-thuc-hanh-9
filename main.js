
//Check dữ liệu

function checkThongTin() {

    var txtTen = document.getElementById('txtTen');
    var txtHang = document.getElementById('txtHang');
    var dNgaySX = document.getElementById('dNgaySX');
    var fGia = document.getElementById('fGia');

    var checkTen = document.getElementById('checkTen');
    var checkHang = document.getElementById('checkHang');
    var checkNgaySX = document.getElementById('checkNgaySX');
    var checkGia = document.getElementById('checkGia');

    //Kiểm tra tên

    if (txtTen.value == '') {
        checkTen.innerHTML = '<span>Không được để trống!</span>';
    }else {
        checkTen.innerHTML = '';
    }


    // kiểm tra hãng
    if (txtHang.value === '') {
        checkHang.innerHTML = '<span>Không được để trống!</span>';
    } else {
        checkHang.innerHTML = '';
    }



    // kiểm tra ngày sản xuất
    if (dNgaySX.value.trim().length == 0) {
        checkNgaySX.innerHTML = '<span>Không được để trống!</span>';
    } else if (Date.parse(dNgaySX.value) >= Date.now()) {
        checkNgaySX.innerHTML = 'Ngày sản xuất không được lớn hơn ngày hiện tại';
    } else {
        checkNgaySX.innerHTML = '';
    }


    //kiểm tra giá
    if (fGia.value === '') {
        checkGia.innerHTML = '<span>Không được để trống!</span>';
    } else if (isNaN(parseInt(fGia.value))) {
        checkGia.innerHTML = 'Nhập sai định dạng giá';
    } else {
        checkGia.innerHTML = '';
    }

    if (checkTen.innerHTML === '' && checkHang.innerHTML === '' && checkNgaySX.innerHTML === '' && checkGia.innerHTML === '') {
        return true;
    }

    return false;

}
function huy() {
    document.getElementById('txtTen').value = '';
    document.getElementById('txtHang').value = '';
    document.getElementById('dNgaySX').value = '';
    document.getElementById('fGia').value = '';

    document.getElementById('checkTen').innerHTML = '';
    document.getElementById('checkHang').innerHTML = '';
    document.getElementById('checkNgaySX').innerHTML = '';
    document.getElementById('checkGia').innerHTML = '';
}