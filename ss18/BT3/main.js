let input = prompt("mời bạn nhập tên vào tk vào");
if(input == "admin"){
    let password = prompt("Mời bạn nhập mật khẩu:");
    if(password == "theMaster"){
        document.writeln("welcom");
    }else if(password == "null"){
        document.writeln("cancelled");
    }else{
        document.writeln("wrongpasseword");
    }
}else if(input == "null"){
    document.writeln("Cancelled");
}else{
    document.writeln("I Don’t know you");
}
    
