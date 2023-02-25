let car = {
    color: 'blue',
    company: 'honda',
    model: 2000
}
let update = {...car};
let latest = car

update.company = 'suzuki';
latest.color = 'red';

car.company = 'toyota';
car.color = 'green';

console.log(latest.color,update.company);