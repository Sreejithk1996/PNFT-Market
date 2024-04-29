import {object, string} from "yup"

export const loginSchema = object({
    email:string().email("not an email").required("Email is required"),
    password: string().required("Password is required")
})