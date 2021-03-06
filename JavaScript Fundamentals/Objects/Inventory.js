function solve(input) {

    let heroes = [];

    for (let element of input) {
        let info = element.split(' / ');
        let hero = info[0];
        let level = info[1];
        let items = info[2].split(', ').join(', ');
        let currHero = {
            hero,
            level,
            items
        };
        heroes.push(currHero);
    }
    heroes.sort((a, b) => a.level - b.level);
    for (let hero of heroes){
        console.log(`Hero: ${hero.hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}