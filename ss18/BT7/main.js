let a = parseInt(prompt("Nhập số a:"));
let b = parseInt(prompt("Nhập số b:"));
let operation = prompt("Nhập phép toán (+, -, *, /):");
if(operation == '+'){
    alert("Kết quả: " + (a + b));
}else if(operation == '-'){
    alert("Kết quả: " + (a - b));
}else if(operation == '*'){
    alert("Kết quả: " + (a * b));
}else if(operation == '/'){
    if(b === 0){
        alert("Không thể chia cho 0!");
    }else{
        alert("Kết quả: " + (a / b));
    }
}else{
    alert("Phép toán không hợp lệ!");
}