        let rangevalue = document.getElementById("myRange");
        let setvalue = document.getElementById("rangevalue");
        let imgchangevalue = document.getElementById("imgchange")
            //setvalue.innerHTML = rangevalue.value;
            //console.log(rangevalue.value)

        //Now will use oninput event.
        rangevalue.oninput = function() {
            let getvalue = rangevalue.value;
            setvalue.innerHTML = this.value;
            if (getvalue == 1) {
                imgchangevalue.setAttribute("src", "Stage 1.jpg")
            } else if (getvalue == 2) {
                imgchangevalue.setAttribute("src", "Stage 2.jpg")
            } else if (getvalue == 3) {
                imgchangevalue.setAttribute("src", "Stage 3.jpg")
            } else if (getvalue == 4) {
                imgchangevalue.setAttribute("src", "Stage 4.jpg")
            } else if (getvalue == 5) {
                imgchangevalue.setAttribute("src", "Stage 5.jpg")
            } else if (getvalue == 6) {
                imgchangevalue.setAttribute("src", "Stage 6.jpg")
            } else if (getvalue == 7) {
                imgchangevalue.setAttribute("src", "Stage 7.jpg")
            } else if (getvalue == 8) {
                imgchangevalue.setAttribute("src", "Stage 8.jpg")
            } else if (getvalue == 9) {
                imgchangevalue.setAttribute("src", "Stage 9.jpg")
            }
        }