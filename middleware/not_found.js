const notFound = (req, res) => {

    console.log(req);
    res.status(404).send("NOT FOUND")
}

module.exports = notFound