let game = { type: 'Game', name: 'Tic Tac Toe', version: 'v.0 - stage 0' };

function allgames(req, res) {
    res.send(game);
}

module.exports = allgames;