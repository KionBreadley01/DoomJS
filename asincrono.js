const teams = ["Liverpol","Dortmun","Chelsie"];

setTimeout(() => console.log('Tarea asigcrona'));

console.log('sigue ejecutando');
console.log(teams);

function getTeams(){
    return teams;
}
function asincGeTeams(){
    setTimeout(() => teams , 2000);

}
console.log(getTeams());
console.log('final de codigo');

console.log(DsincGeTeans());
console.log(DsincGeTeans());
console.log('Termina el llamado de funcion ');

