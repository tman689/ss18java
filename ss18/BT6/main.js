let year = parseInt(prompt("Nhập năm bạn muốn:"));
if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
    document.writeln(" là năm nhuận.");
}else{
    document.writeln(" không phải là năm nhuận.");
}
