// Your JS goes here
function checkerBoard(){
    let boardColor = true
    for(let i = 0; i < 550; i+= 50){
        for(j = 0; j < 550; j+= 50){
            let box = document.createElement('div')
            if(boardColor == true){
                color = "black"
            }else{
                color = "red"
            }
            boardColor = !boardColor
            let style = "border:0px solid black ; position:absolute; background-color: " + color + "; height:50px; width:50px;top: " + i + "px;left: " + j + "px";
            box.setAttribute("style", style)
            document.body.append(box)
    }
}
}
checkerBoard()