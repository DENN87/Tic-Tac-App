function home(req, res) {
    res.send({ Game: 'Tic Tac Toe', Description: 'is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.' });
}

module.exports = home;