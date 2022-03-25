let friendId = 4

module.exports = {

    createHouse: (req, res) =>{
        let { address, price, imageURL } = req.body
        let newHouse = {
            id: friendId,
            
            price,
            imageURL
        }
        houses.push(newHouse)
        res.status(200).send(frends)
        frienddD++