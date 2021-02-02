interface Person {
    // readonly name: string,
    name: string,
    age?: Number
}

const getPersonName = (person: Person): void => {
    console.log(person.name)
}

const setPersonName = (person: Person, name: string): void => {
    person.name = name
}

const person = {
    name: 'dell',
    age: 20,
    other: '4564564'
}

getPersonName(person)
setPersonName(person, 'lell')