//extendScript.jsx
$.runScript = {
    alertAndSaveSelectedItemInfo: function() {
        var project = app.project;
        if (project) {
            var selection = project.activeSequence.getSelection();
            if (selection && selection.length > 0) {
                var selectedItem = selection[0];
                var selectedItemName = selectedItem.name;
                var inPoint = selectedItem.inPoint.seconds; // Convert from ticks if necessary
                var outPoint = selectedItem.outPoint.seconds; // Convert from ticks if necessary
                var startTime = selectedItem.start.seconds; // Assuming startTime is accessible
                var endTime = selectedItem.end.seconds; // Assuming endTime is accessible
                var message = "Rendering " + selectedItemName;
                alert(message);

                // Manually constructing JSON string
                var clipInfoString = '{"selectedItemName": "' + selectedItemName +
                                     '", "inPoint": ' + inPoint +
                                     ', "outPoint": ' + outPoint +
                                     ', "startTime": ' + startTime +
                                     ', "endTime": ' + endTime +
                                     ', "wavFilePath": "Placeholder/path/to/selectedItem.wav"}';

                var file = new File("D:/Vault/clipInfo.json");
                file.open("w");
                file.write(clipInfoString);
                file.close();
                alert("Info saved for " + selectedItemName);
                return "Info saved for " + selectedItemName;
            } else {
                alert("No item selected.");
                return "No item selected.";
            }
        }
    }
}
