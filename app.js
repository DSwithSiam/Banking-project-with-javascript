function Deposite()
{
    var depositeInput = document.getElementById('deposite-input').value;
    var depositeShow = document.getElementById('deposite-show').innerText;
    let totalShow = document.getElementById('total-show').innerText;
    var depositeInput = convertInt(depositeInput);
    var depositeAmount = convertInt(depositeShow);
    let totalTk = convertInt(totalShow);

    var sum = depositeInput + depositeAmount;
    if(sum > 0)
    {
        document.getElementById('deposite-show').innerText = sum;
        document.getElementById('total-show').innerText = totalTk + depositeInput;
    }
    document.getElementById("deposite-input").value = ""; 
}


function Widrow()
{
    var widrowInput = document.getElementById('widrow-input').value;
    var widrowShow = document.getElementById('widrow-show').innerText;
    let totalShow = document.getElementById('total-show').innerText;

    var widrowInput = convertInt(widrowInput);
    var widrowShow = convertInt(widrowShow);
    let totalTk = convertInt(totalShow);

    var sum = widrowInput + widrowShow;
    if(sum >= 0 && totalTk >= widrowInput)
    {
        document.getElementById('widrow-show').innerText = sum;
        document.getElementById('total-show').innerText = totalTk - widrowInput;
    }
    else
    {
        alert("apner balance kom ace")
    }
    document.getElementById("widrow-input").value = "";
    
}
function convertInt(value) 
{
    return parseInt(value);
}