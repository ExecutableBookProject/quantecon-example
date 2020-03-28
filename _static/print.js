printContent = () => {
    // MathJax displays a second version of any math for assistive devices etc.
    // This prevents double-rendering in the PDF output.
    var ignoreAssistList = [];
    assistives = document.querySelectorAll('.MathJax_Display span.MJX_Assistive_MathML').forEach((element, index) => {
        var thisId = 'MathJax-assistive-' + index.toString();
        element.setAttribute('id', thisId);
        ignoreAssistList.push(thisId)
    });

    // Print the actual content object
    // css_paths are defined in the `layout` HTML template - so that we can use a templating function
    printJS({
        printable: 'main-content',
        type: 'html',
        css: css_paths,
        scanStyles: false,
        targetStyles: ["*"],
        ignoreElements: ignoreAssistList,
        documentTitle: ""
    })
};

initPrint = () => {
    document.querySelector('#download-print').addEventListener('click', printContent)
}

var sbt_runWhenDOMLoaded = cb => {
    if (document.readyState != 'loading') {
      cb()
    } else if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', cb)
    } else {
      document.attachEvent('onreadystatechange', function() {
        if (document.readyState == 'complete') cb()
      })
    }
  }

sbt_runWhenDOMLoaded(initPrint)