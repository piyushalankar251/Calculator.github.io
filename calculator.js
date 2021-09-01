var n = document.querySelectorAll(".button").length;
var res = document.querySelector("#Result");
var val = '', val2=0;
for (var i = 1; i <= n; i++) {
    document.querySelectorAll(".button")[i].addEventListener("click", values)
    function values() {

        val2 = this.innerText;
        
        console.log(val2);
     
       if (val2 == 'X') {
            val2 = '*'
            val += val2;
        }
        else if (val2 == 'c') {
            val = "";
            res.innerText = val;
        }
        else if (val2 == 'Del') {
            val = val.remove(val.length-1, 1);
        }
        else if (val2 == '=') {
            val=eval(val);
            res.innerText = val;
        }
        else if(val2 == '√')
        {
          val=Math.sqrt(val);
          res.innerText=val;
        }
        else
        {
            val += val2;
            res.innerText = val;
        }
    }
}
