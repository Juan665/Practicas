 function ponernum(input, character)
        {
            if(input.value == null || input.value == "0")
                input.value = character
            else
                input.value += character
}
        function borrarnum(input)
        {
            input.value = input.value.substring(0, input.value.length - 1)
}
        function ponersigno(input)
        {
            if(input.value.substring(0, 1) == "-")
                input.value = input.value.substring(1, input.value.length)
            else
                input.value = "-" + input.value
}
        function igualxd(form) 
        {
            form.display.value = eval(form.display.value)
}
        function multi(form) 
        {
            form.display.value = eval(form.display.value) * eval(form.display.value)
}
        function avrchecalo(str) 
        {
            for (var i = 0; i < str.length; i++) {
                var ch = str.substring(i, i+1)
            if (ch < "0" || ch > "9") {
                if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "(" && ch!= ")") {
                    alert("Que pex krnal asi no va ;v")
                return false
            }
        }
    }
  return true
}