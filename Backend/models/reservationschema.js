import mongoose from "mongoose";
import validator from "validator";
const reservationschema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minLength: [3, 'firstname must contain at least 3 characters'],
        maxLength: [40, 'firstname should not contain more than 40 characters']
    },
    lastname: {
        type: String,
        required: true,
        minLength: [3, 'lastname must contain at least 3 characters'],
        maxLength: [40, 'lastname should not contain more than 40 characters']
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, 'provide a valid email']
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, 'phonenumber should be 10 digits long'],
        maxLength: [10, 'phonenumber should be 10 digits long']
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
});
export const reservationmodel = mongoose.model("reservationmodel", reservationschema);