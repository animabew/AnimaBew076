a=0;
function postFunction(){
    var answer = document.getElementById("text1").value;
    console.log("answer");
    if(a==0){
                if(answer==null)
                    {
                    return false;  
                    }
                else{
                    document.getElementById("topic1").innerHTML = answer;
                    a++;
                    }
                
            }
    else if(a ==1){
                    if(document.getElementById("text1").value == null)
                    {
                        return false;
                    }
                    else
                    {
                        document.getElementById("comment1").innerHTML = answer;
                        a++;
                    }
                    } 
    else if(a ==2){
                    if(document.getElementById("text1").value == null)
                    {
                        return false;
                    }
                    else
                    {
                        document.getElementById("comment2").innerHTML = answer;
                        a++;
                    }
                    }
    else
    {
        return null;
    }
    document.getElementById("text1").value = "";
}
function clearFunction(){
    document.getElementById("topic1").innerHTML = null;
    document.getElementById("comment1").innerHTML = null;
    document.getElementById("comment2").innerHTML = null;
    document.getElementById("text1").value = null;
    a = 0;
}