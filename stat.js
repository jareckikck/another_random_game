class Stat {
    constructor(s) {
        this.name = s.name;
        this.value = s.value;
    }
}

var lvlStat  = new Stat({
    name: 'lvl',
    value: 1
})
var lifeStat = new Stat({
    name: 'life',
    value: 3,
  });

var scoreStat = new Stat({
    name: 'score',
    value: 0,
  });

var enemiesLimitStat = new Stat({
    name: 'enemies-limit',
    value: 2,
});