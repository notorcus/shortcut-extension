//extendScript.jsx
$.runScript = {
    alertSelectedItemName: function() {
        var project = app.project;
        if (project) {
            var selection = project.activeSequence.getSelection();
            if (selection && selection.length > 0) {
                var selectedItemName = selection[0].name;
                alert("Selected item: " + selectedItemName);
                return selectedItemName; // Returns the name for further processing if needed
            } else {
                alert("No item selected.");
                return "No item selected.";
            }
        }
    }
}