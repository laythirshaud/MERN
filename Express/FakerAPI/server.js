const express = require("express");
const faker = require("faker")
const app = express();
const port = 8000;

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );

class User{
    constructor(){

        this.id= faker.datatype.uuid();
        this.firstName= faker.name.firstName();
        this.lastName= faker.name.lastName();
        this.recent= faker.time.recent();
        this.phoneNumber =faker.phone.phoneNumber();
        this.email =faker.internet.email();
        this.password =faker.internet.password();
    }
}
console.log(new User());

class Company{
    constructor(){
        this.id= faker.datatype.uuid();
        this.companyName=faker.company.companyName();
        this.adress={
            street:faker.address.streetName(),
            city: faker.address.city(),
            state:faker.address.state(),
            zipCode:faker.address.zipCode(),
            country:faker.address.country()
        }
    }
}
console.log(new Company());


app.get("/api/users/new", (req, res) => {
    const users=new User();
    res.json( users );
});
app.get("/api/companies/new", (req, res) => {
    const companies1=new Company();
    res.json( companies1 );
});
app.get("/api/user/company", (req, res) => {
    const layth= {
        users:new User(),
        companies: new Company(),
    }
    
    res.json( layth );
});


