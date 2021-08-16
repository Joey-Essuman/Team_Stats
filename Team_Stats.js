team = {
  _players: [
    {
      firstName: "Joey",
      lastName: " Essuman",
      age: 28,
    },
    {
      firstName: "Charis",
      lastName: "Ocloo",
      age: 26,
    },
    {
      firstName: "Sebastian",
      lastName: "Cudjoe",
      age: 16,
    },
  ],
  _games: [
    {
      opponent: "Broncos",
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: "Bucks",
      teamPoints: 58,
      opponentPoints: 48,
    },
    {
      opponent: "Lakers",
      teamPoints: 105,
      opponentPoints: 99,
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    const update = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
    this._games.push(update);
  },
};
team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);

team.addGame("Bulls", 120, 105);
team.addGame("Raptors", 95, 90);
team.addGame("Wizards", 111, 108);
console.log(team.games);
