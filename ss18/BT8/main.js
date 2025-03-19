let a = parseInt(prompt("Nhập độ dài cạnh a"));
let b = parseInt(prompt("Nhập độ dài cạnh b"));
let c = parseInt(prompt("Nhập độ dài cạnh c"));
if(a + b > c && a + c > b && b + c > a){
    if(a == b && b == c){
        document.writeln("Đây là tam giác đều");
    }else if(a == b || b == c || a == c){
        document.writeln("Đây là tam giác cân");
    }else if(a * a + b * b == c * c || a * a + c * c == b * b || b * b + c * c == a * a){
        document.writeln("Đây là tam giác vuông");
    }else{
        document.writeln("Đây là tam giác thường");
    }
}else{
    document.writeln("Đây không phải là tam giác");
}