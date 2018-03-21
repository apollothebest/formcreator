;(function () {

    document.onclick = function(event) {
        if (event.target.hasAttribute('dropDownMenu')) {
            var idf=event.target.closest("form").id;
            var idd=event.target.id;
        } else if (event.target.hasAttribute('removeButton')) {
            var idF=event.target.closest("form").id;
            document.getElementById(idF).remove();
        } else if (event.target.hasAttribute('addNewFiled')) {
            var idFm=event.target.closest("form").id;
            addListItems();
        } else {
            return;
        }

    var copiedList=$('#list').html();

    var listID ='idn' + listId;

    var clearList=function(){
        $("#"+idf).find(".addListItemClass").remove();
    };

    var additionalListOfItems=function() {
        $("#"+idf)
            .append(copiedList)
            .find(".addListItem")
            .attr('id',listID);
        listId++;
        };

    $("#"+idf).on('change', "#"+idd, function() {
        var value=$( "#"+idd ).children("select option:selected").val();
        switch (value){

            case "1":
                clearList();
                break;

            case "2":
                clearList();
                additionalListOfItems();
                break;

            case "3":
                clearList();
                additionalListOfItems();
                break;
        }
    });

    function addListItems() {
        var div=$('<div/>', {'class': 'listItemDiv'})
            .prependTo($("#" + idFm).find ("#addListItem"));
        $('<i/>')
            .appendTo(div);
        $('<input/>', {'class' : 'listField', type : 'text'})
            .appendTo(div);
        var input=$('<input/>', {value : 'Remove List Item', type : 'button', 'class' : 'removeListItem'})
            .appendTo(div);
        input.click(function() {
                $(this).parent().remove();
        });
        var br=$('<br/>').appendTo(div);
        }
};
}());

