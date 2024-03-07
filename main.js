let changeOwned = prompt("Cash owned: ");
function Change() {
  const quarter = 25;
  if (
    changeOwned >= quarter ||
    changeOwned >= dimes ||
    changeOwned >= Nickel ||
    changeOwned >= Penny
  ) {
    let sumQuarter = Math.floor(changeOwned / quarter);
    console.log(`Quarters: ${sumQuarter}`);
    changeOwned %= quarter;
    const dimes = 10;
    let sumDime = Math.floor(changeOwned / dimes);
    console.log(`Dimes: ${sumDime}`);
    changeOwned %= dimes;
    const Nickel = 5;
    let SumNickel = Math.floor(changeOwned / Nickel);
    console.log(`Nickel: ${SumNickel}`);
    changeOwned %= Nickel;
    const Penny = 1;
    let SumPenny = Math.floor(changeOwned / Penny);
    console.log(`Penny: ${SumPenny}`);
    changeOwned %= Penny;
  }
}
Change();
