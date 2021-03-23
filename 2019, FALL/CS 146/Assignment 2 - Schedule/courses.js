function showCourse(textClass,checkID,cellClass,colorID){
    var checkBox = document.getElementById(checkID);
    var textBox = document.getElementsByClassName(textClass);
    var courseCell = document.getElementsByClassName(cellClass);
    var cellColor = document.getElementsByClassName(colorID);
    for (var cell = 0; cell < courseCell.length; cell++){ // For every cell for a certain course, either show the text of the cell as a block with the color specified in the color picker or display a black white box depending on if the checkbox for the course is checked.
        if (checkBox.checked){
          textBox[cell].style.display = "block";
          colorCourse(cellClass,colorID);
          courseCell[cell].style.background = cellColor.value;
        } else {
            textBox[cell].style.display = "none";
            courseCell[cell].style.background = "#FFFFFF";
        }
    }
}

function colorCourse(cellClass,colorID){
    var cellColor = document.getElementById(colorID);
    var cells = document.getElementsByClassName(cellClass);
    for (var cell = 0; cell < cells.length; cell++){ // For every cell for a certain course, change its background color to the color specified as input at the top of the schedule page.
        cells[cell].style.background = cellColor.value;
    }
}
