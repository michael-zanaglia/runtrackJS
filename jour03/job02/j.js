var tester = []

function TestA() {   
  $("someobject").click(function () {
    tester.push("hello")
    $(this).off()
  })
}

TestA()