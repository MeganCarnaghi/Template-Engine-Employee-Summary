// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// Child class - Manager
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // Getter for the officeNumber property
    getOfficeNumber(){
        return this.officeNumber;
    }
    // Getter for the role property
    getRole() {
        return 'Manager';
    }
}
module.exports = Manager;