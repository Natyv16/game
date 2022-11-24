const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const playerHP = document.getElementById("playerHP");
const enemyHP = document.getElementById("enemyHP");
const attack = document.getElementById("attack");

attack.onmousedown = () => {
if (playerHP.innerHTML > 0 && enemyHP.innerHTML > 0){
    enemyHP.innerHTML--;
    player.style.left = "150px";
}
if (enemyHP.innerHTML <= 0) {
info.innerHTML = "Info: Nepritel zemrel";
}
}

attack.onmouseup = () => {
    player.style.left = "0";  
}