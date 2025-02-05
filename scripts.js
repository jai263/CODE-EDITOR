document.addEventListener('DOMContentLoaded', function() {
    var codeMirror = CodeMirror.fromTextArea(document.getElementById('code'), {
        mode: "htmlmixed",
        lineNumbers: true,
        theme: "default"
    });

    window.runCode = function() {
        var output = document.getElementById('output');
        var code = codeMirror.getValue();
        output.srcdoc = code;
    };
});
