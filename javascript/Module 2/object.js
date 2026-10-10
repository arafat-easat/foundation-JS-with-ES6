let user = {
    name: "Arafat",
    weight: '66kg',
    age: '22',
    address: "jatrabari"

}

// console.log(user["address"])
delete user.address;
user.address = 'Mymensing';
user.address = {
    city: 'Netrokona',
    thana:'durgapur'
}
console.log(Object.entries(user))
