let user1 = {
    name: 'arafat',
    id: 44,
    address: {
        city: 'dhaka',
        thana: 'jatrabari'
    }
}

let user2 = {
    name: 'al nur',
    id: 51,
}
// console.log(user1?.address);
// console.log(user2?.address?.city);

// nulish collescing undefined or null hoi sekhetre

console.log(user2?.address?.city ?? 'Mymensing')