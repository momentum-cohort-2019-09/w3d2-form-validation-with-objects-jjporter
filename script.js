class Validation {
    constructor (test, errorMsg) {
        this.test = test
        this.errorMsg = errorMsg
    }

    validate(value) {
        return this.test(value)
    }
}

class Field {
    constructor (input) {
        this.input = input
    }

    clearErrorMsgs () {
        for (let msg of this.input.querySelector('.errorMsg')) {
            msg.remove
        }
    }

    markValid () {
        this.input.classList.add('input-valid')
        this.input.classList.remove('input-invalid')
    }

    markInvalid () {
        this.input.classList.add('input-invalid')
        this.input.classList.remove('input-valid')
    }

    
}

class Form {
    constructor (name, car, date, numberOfDays, creditCard, cvv, expDate) {
        this.name = name
        this.car = car
        this.date = date
        this.numberOfDays = numberOfDays
        this.creditCard = creditCard
        this.cvv = cvv
        this.expDate = expDate
    }

    addName (name) {
        if (!name) {
            return ""
        } else return name
    }

    validNumberOfDays () {
        let numberOfDays = document.querySelector('#days-field')
        if (numberOfDays >= 1 && numberOfDays < 30) {
            return numberOfDays
        } return ("", 'must be a number')
    }

    validDate () {
        let today = new Date ()
        today.setUTCHours(0, 0, 0, 0)
        this.validDate.setUTCHours(0, 0, 0, 0)

        return validDate >= today
    } 'must be today or in the future'

}

let validDate = document.querySelector('start-date-field')

