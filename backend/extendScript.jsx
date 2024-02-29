//extendScript.jsx
$.runScript = {
    checkSequenceExists: function(sequenceName) {
        // Log the received sequenceName to confirm its value
        $.writeln("Checking for sequence: " + sequenceName); // Add this line

        var sequences = app.project.sequences;
        var sequenceExists = false;
        for (var i = 0; i < sequences.numSequences; i++) {
            var seq = sequences[i];
            if (seq.name === sequenceName) {
                sequenceExists = true;
                break;
            }
        }

        if (sequenceExists) {
            alert(sequenceName + " exists!");
        } else {
            alert(sequenceName + " does not exist :(");
        }
    }
}
