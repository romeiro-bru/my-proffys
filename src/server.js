require('express')()
.get("/", (req, res) => {
    return res.send("hello")
})
.listen(5000)