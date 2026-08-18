        let a=0;
            let b=0;
            let displayValue="";
            let operator="";
            let aPopulated="false";
            let bPopulated="false";


            function add(a,b){
                return a+b;
            }
            //console.log(add(a,b));
            function substract(a,b){
                return a-b;
            }
            //console.log(substract(a,b));
            function multiply(a,b){
                return a*b;
            }
            //console.log(multiply(a,b));
            function divide(a,b){
                if (b==0){
                    return "ERROR"
                } else{
                    return a/b;
                }
            }
            //console.log(divide(a,b));
            function operate(operator,a,b){
                let result;
                result=(operator=="+")? add(a,b): operator=="-"? substract(a,b):operator=="*"? multiply(a,b):operator=="/"? divide(a,b):a,b;
                return result;
            }
            // populate numbers
            function populate1(){
                if (displayValue.length == 18){

                } else{
                    displayValue += "1";
                    document.getElementById("displayValue").innerHTML = displayValue;
                }
            }
            function populate2(){
                if (displayValue.length == 18){

                } else{
                displayValue += "2";
                document.getElementById("displayValue").innerHTML = displayValue;
                }
            }
            function populate3(){
                if (displayValue.length == 18){

                } else{
                displayValue += "3";
                document.getElementById("displayValue").innerHTML = displayValue;
                }
            }
            function populate4(){
                if (displayValue.length == 18){

                } else{
                displayValue += "4";
                document.getElementById("displayValue").innerHTML = displayValue;
                }
            }
            function populate5(){
                if (displayValue.length == 18){

                } else{
                displayValue += "5";
                document.getElementById("displayValue").innerHTML = displayValue;
                }
            }
            function populate6(){
                if (displayValue.length == 18){

                } else{
                displayValue += "6";
                document.getElementById("displayValue").innerHTML = displayValue;
                }
            }
            function populate7(){
                if (displayValue.length == 18){

                } else{
                displayValue += "7";
                document.getElementById("displayValue").innerHTML = displayValue;
                }
            }
            function populate8(){
                if (displayValue.length == 18){

                } else{
                displayValue += "8";
                document.getElementById("displayValue").innerHTML = displayValue;
                }
            }
            function populate9(){
                if (displayValue.length == 18){

                } else{
                displayValue += "9";
                document.getElementById("displayValue").innerHTML = displayValue;
                }
            }
            function populate0(){
                if (displayValue.length == 18){

                } else{
                    if (displayValue==""){
                       displayValue="0";
                       document.getElementById("displayValue").innerHTML = displayValue;
                    } else{
                        displayValue += "0";
                        document.getElementById("displayValue").innerHTML = displayValue;
                }
                }   
            }
            function populatePeriod(){
                let hayPunto=false;
                if (displayValue==""){
                    displayValue += "0.";
                    document.getElementById("displayValue").innerHTML = displayValue;
                } else{
                    for(let i=0; i<displayValue.length ;i++){
                        if(displayValue[i]==".") {
                            hayPunto=true;
                        };
                    }
                    if(hayPunto==false){
                        displayValue += ".";
                        document.getElementById("displayValue").innerHTML = displayValue;
                    }   

                }   
            }
            //populate operators
            function populateMas(){
                if (operator!=""){
                    populateIgual();
                }
                if (aPopulated==true){
                    b=Number(displayValue);
                    bPopulated=true;
                    displayValue="";
                    operator="+";

                } else{
                    a=Number(displayValue);
                    aPopulated=true;
                    displayValue="";
                    operator="+";
                }
                
            }
            function populateMenos(){
                if (operator!=""){
                    populateIgual();
                }
                if (aPopulated==true){
                    b=Number(displayValue);
                    bPopulated=true;
                    displayValue="";
                    operator="-";

                } else{
                    a=Number(displayValue);
                    aPopulated=true;
                    displayValue="";
                    operator="-";
                }
            }
            function populatePor(){
                if (operator!=""){
                    populateIgual();
                }
                if (aPopulated==true){
                    b=Number(displayValue);
                    bPopulated=true;
                    displayValue="";
                    operator="*";

                } else{
                    a=Number(displayValue);
                    aPopulated=true;
                    displayValue="";
                    operator="*";
                }
            }
            function populateDividir(){
                if (operator!=""){
                    populateIgual();
                }
                if (aPopulated==true){
                    b=Number(displayValue);
                    bPopulated=true;
                    displayValue="";
                    operator="/";

                } else{
                    a=Number(displayValue);
                    aPopulated=true;
                    displayValue="";
                    operator="/";
                }
            }
            function populateIgual(){
                if (operator==""){

                } else{
                    if (aPopulated){
                        b=Number(displayValue);
                        displayValue="";
                        bPopulated="true";
                        if(aPopulated&&bPopulated){
                            let resultado = operate(operator,a,b);
                            console.log(operator+" "+a+" "+b+" "+" "+resultado);
                            if (resultado.length>18){
                                //make small the text!!!or use exponencial
                                document.getElementById("displayValue").innerHTML = resultado;
                                a=resultado;
                                aPopulated=true;
                                operator="";
                            } else{
                                document.getElementById("displayValue").innerHTML = resultado;
                                a=resultado;
                                aPopulated=true;
                                operator=""; 
                            }
                             
                        }
                    }
                }      
            }
            function populateClear(){
                a=0;
                b=0;
                displayValue="";
                operator="";
                aPopulated="false";
                bPopulated="false";
                document.getElementById("displayValue").innerHTML = "0";

            }
