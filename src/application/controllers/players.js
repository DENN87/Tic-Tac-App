let player1 = { name: "Denis", age: 32, city: "Antioch" };
let player2 = { name: "Victor", age: 32, city: "New Jersey" };

function allplayers(req, res) {
    res.send([player1, player2]);
}

module.exports = allplayers;