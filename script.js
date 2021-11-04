var du = 0; 
du = parseFloat(du);

function laygitricu ()
{
    var gtc = document.getElementById("lichsu").value
    return gtc;
}

function button()
{
    var tien    = document.getElementById("sotien").value 
    var loai    = document.getElementById("loai").value
    var ngay    = document.getElementById("ngay").value
    var ghichu  = document.getElementById("ghichu").value 
    var lichsu  = document.getElementById("lichsu");

    
    if (tien == "")
    {
        alert("Hãy nhập số tiền vào!!!")
    } else if (ngay == "")
    {
        alert("Hãy chọn ngày!!!")
    }  else if (ghichu == "")
    {
        alert("Hãy nhập ghi chú vào. Chứ không nhớ là tiền đó đâu ra đâu!!!")
    }  else
    { 
        var text =  "" + loai  + "; " + ngay + "; " + tien +"vnđ (" + ghichu + ")"  +"\n"+ laygitricu()  ; 
        lichsu.value = text;
    }
    // Số dư hiện tại
    if (tien == "")
    {
        alert("Hãy nhập số tiền vào!!!")
    } else if (ngay == "")
    {
        alert("Hãy chọn ngày!!!")
    }  else if (ghichu == "")
    {
        alert("Hãy nhập ghi chú vào. Chứ không nhớ là tiền đó đâu ra đâu!!!")
    }  else if (loai == "Thu Nhập")
    {   tien = parseFloat(tien)
        du = du + tien;
        document.getElementById("sodu").innerHTML = du;
        
        
    } else if (loai == "Chi Phí")
    {   tien = parseFloat(tien)
        du = du - tien;
        document.getElementById("sodu").innerHTML =  du;
    }
}

