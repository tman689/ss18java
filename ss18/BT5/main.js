let sonamkinhngiem = parseInt(prompt("Nhập số năm kinh nghiệm của bạn :"));
if(sonamkinhngiem >= 6){
    document.writeln("quản lý");
}else if(sonamkinhngiem >= 4){
    document.writeln("Chuyên viên");
}else if(sonamkinhngiem >= 1){
    document.writeln("Nhân viên có kinh nghiệm");
}else{
    document.writeln("Mới vào nghề");
}
