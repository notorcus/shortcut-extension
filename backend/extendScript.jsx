//extendScript.jsx
$.runScript = {
    alertSelectedItemName: function() {
        var project = app.project;
        if (project) {
            var selection = project.activeSequence.getSelection();
            if (selection && selection.length > 0) {
                var selectedItem = selection[0];
                var selectedItemName = selectedItem.name;
                // Assuming inPoint and outPoint are accessible and in ticks
                var inPointSeconds = selectedItem.inPoint.seconds; // Convert from ticks if necessary
                var outPointSeconds = selectedItem.outPoint.seconds; // Convert from ticks if necessary
                var message = "Selected item: " + selectedItemName + 
                              "\nIn point: " + inPointSeconds + "s" + 
                              "\nOut point: " + outPointSeconds + "s";
                alert(message);
                return message; // Returns the message for further processing if needed
            } else {
                alert("No item selected.");
                return "No item selected.";
            }
        }
    }
}
