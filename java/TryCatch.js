var gst,qst,total,value;


function calc()
{   
    value=parseFloat(document.getElementById("input").value);
    gst=(value*0.05);
    qst=(value*(9.975)/100);
    total=(value+gst+qst);

    if(isNaN(value)  )
    {
        alert("Please Enter Valid Input ");
    }
    else if(value<0)
    {
        alert("input must be grater than 0 ");
    }
    else if(value>1000)
    {
        alert("input must be lesser than 1000 ");
    }
    else
    {
        document.getElementById("value").innerHTML=value;
        document.getElementById("gstValue").innerHTML="($"+value+" x 5%)";
        document.getElementById("qstvalue").innerHTML="($"+value+" x 9.975%)";
        document.getElementById("gst").innerHTML=gst.toFixed(2);
        document.getElementById("qst").innerHTML=qst.toFixed(2);
        document.getElementById("totalValue").innerHTML=total.toFixed(2);

        //Applying onclick effects
        document.getElementById('table').setAttribute("class", "style1");
        document.getElementById('input').setAttribute("class", "style1");

        //alert message with dates and output

        var date=new Date();
        alert("Today's Date is                  : "+date+"\n"+
              "The Total Amount is              :"+total.toFixed(2));
    }
}
function reSet()
{
    document.getElementById('table').setAttribute("class","style2");
    document.getElementById("input").setAttribute("class","styleForInpiut");
    document.getElementById("input").value=" ";
    document.getElementById("value").innerHTML=0;
    document.getElementById("gstValue").innerHTML=" ";
    document.getElementById("qstvalue").innerHTML=" ";
    document.getElementById("gst").innerHTML=" ";
    document.getElementById("qst").innerHTML=" ";
    document.getElementById("totalValue").innerHTML=" ";
}
