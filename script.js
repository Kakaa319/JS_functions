function calculateDamage(base, crit) {
    return base*crit;
}

const healPotion = (hp) => {
    return hp+50;
}

let myHealth = 100;

myHealth = myHealth - calculateDamage(20,2);
//60

myHealth = healPotion(myHealth);
//110