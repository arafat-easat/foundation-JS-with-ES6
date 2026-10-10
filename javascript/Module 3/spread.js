const personalInfo = {
    name: 'Al Arafat',
    age: 22,
};

const contractInfo = {
    phone: '01357****95',
    email: 'arafatesat@gmail.com',
};

const fullProfile = {
    ...personalInfo,
    ...contractInfo,
    address: 'dhaka'
}
console.log(fullProfile)