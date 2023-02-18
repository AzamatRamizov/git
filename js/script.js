$("#button").click(function(){
    var matn=$("#matn").val();
    if(matn.length%3==0){
        var raqam1=parseFloat($("#raqam1").val());
        var raqam2=parseFloat($("#raqam2").val());
        var raqam3=parseFloat($("#raqam3").val());
        var raqam4=parseFloat($("#raqam4").val());
        var raqam5=parseFloat($("#raqam5").val());
        var raqam6=parseFloat($("#raqam6").val());
        var raqam7=parseFloat($("#raqam7").val());
        var raqam8=parseFloat($("#raqam8").val());
        var raqam9=parseFloat($("#raqam9").val());
        var determinant=raqam1*raqam5*raqam9+raqam2*raqam6*raqam7+raqam4*raqam8*raqam3-(raqam3*raqam5*raqam7+raqam1*raqam6*raqam8+raqam2*raqam4*raqam9)

        $("#det").text("Determinant : "+determinant)
        var letters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        var sonmatn="";
        for(var i=0;i<matn.length;i++){
            for(var j=0;j<letters.length;j++){
                if(matn[i]==letters[j]){
                    sonmatn+=(j+1)+" ";
                }
            }
        }
        sonmatn=sonmatn.substring(0,sonmatn.length-1);
        var maaaa=sonmatn.split(" ");

        $("#harf").text(sonmatn)

        var natija="";
        for(var i=0;i<matn.length;i+=3){
            var mat1=raqam1*maaaa[i]+raqam2*maaaa[i+1]+raqam3*maaaa[i+2]
            var mat2=raqam4*maaaa[i]+raqam5*maaaa[i+1]+raqam6*maaaa[i+2]
            var mat3=raqam7*maaaa[i]+raqam8*maaaa[i+1]+raqam9*maaaa[i+2]
            natija+=mat1+","+mat2+","+mat3+",";
        }
        $("#natija").text(natija)
    }
    else{
        alert("Matn To'g'ri kelmaydi")
    }
})