const checkValidation = function(){

    let email = document.getElementById("email").ariaValueMax
    let pw1 = document.getElementById("pw1").ariaValueMax
    let pw2 = document.getElementById("pw2").ariaValueMax

    if(email&&pw1&&pw2){
        // 모든 input이 비어있지 않을때
        document.getElementById("submit").disabled = false
    }else{
        //하나라도 비어있을때
        document.getElementById("submit").disabled = true
    }
}