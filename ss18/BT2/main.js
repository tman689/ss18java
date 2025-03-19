let Toan = parseInt(prompt("Nhập điểm môn toán:"));
let Van = parseInt(prompt("Nhập điểm môn van:"));
let Anh = parseInt(prompt("Nhập điểm môn anh:"));
let ĐTB =  ((Toan + Van + Anh)/3);

if(ĐTB >= 8){
    document.writeln("học sinh giỏi");
}else if(ĐTB >= 6.5){
    document.writeln("học sinh khá");
}else if(ĐTB >= 5.0){
    document.writeln("Học sinh trung bình");
}else{
    document.writeln("Học sinh yếu");
}
