import ErrorHandler from "../error/error.js";
import { reservationmodel } from "../models/reservationschema.js";
export const sendResevation = async (req, res, next) => {
    const { firstname, lastname, email, phone, date, time } = req.body;
    if (!firstname || !lastname || !email || !date || !time || !phone) {
        return next(new ErrorHandler('please fill complete form', 500))
    }
    try {
        await reservationmodel.create({firstname, lastname, email, phone,time,date});
        
        res.status(200).json({
            success: true,
            message: "reservation sent successfully"
        });
    }
    catch (error) {
        console.log(error);
        if (error.name === 'ValidationError') {
            const ValidationError = Object.values(error.errors).map((err) => err.message);
            return next(new ErrorHandler(ValidationError.join(","), 400));
        }
        return next(error)
    }


}