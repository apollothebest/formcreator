var inputId=0;
var formId=0;
var removeButtonId=0;
var dropDownMenuId=0;
var listId=0;

function addNewForm(){
    var formID = 'idf'+formId;
    var inputID = 'idi'+inputId;
    var dropDownMenuID = 'idd'+dropDownMenuId;
    var removeButtonID ='idn' + removeButtonId;
    var copiedSelect = $('#dm').html();

    $(".main")
        .append("<form />");

    $("form")
        .last()
            .css({"margin-top":'100px', "class":"formClass"})
            .attr('id', formID)
        .append("<span class='textQuestion'>Question:</span>")
        .append("<br />");

    $("#"+formID)
        .attr('class','form')
        .append(($('<input />')
            .css({"width":'800px',"margin-left" :'45px'})
            .attr('id',inputID)))
        .append(copiedSelect)
        .append($('<input type="button" value="Remove Form" />')
            .attr('id',removeButtonID)
            .attr('removeButton',"removeButton"));
    $(".dropClass")
        .last()
            .attr('id', dropDownMenuID)
            .attr('dropDownMenu', "dropDownMenu");

    inputId++;
    formId++;
    removeButtonId++;
    dropDownMenuId++;
}

