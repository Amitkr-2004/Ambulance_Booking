const {z}=require('zod');

const UserSignupSchema = z.object({
    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be of at least 3 characters"})
    .max(255,{message:"Name must be of at most 255 characters"}),

    phone:z
    .string({required_error:"Enter your Contact number"})
    .trim()
    .min(10,{message:"Contact number must be of at least 10 digits"})
    .max(20,{message:"Contact number must be of at most 20 digits"}),

    email: z
    .string({required_error: "Email is required"})
    .trim()
    .email({message: "Invalid email address"})
    .endsWith("@gmail.com", "Email must end with @gmail.com")
    .min(3, {message: "Email must be at least of 3 characters"})
    .max(255,{message:"email must not have more than 255 chars."}),
    
    password: z
        .string({ required_error: "Password is required" })
        .min(8, { message: "Password must be at least 8 characters long" }) // Consistent minimum length
        .max(1024, { message: "Password must not be greater than 1024 characters" })
        .refine((value) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value), {
        message: "Password must contain at least one special character",
        })
        .refine((value) => /[A-Z]/.test(value), {
        message: "Password must contain at least one uppercase letter",
        }),

    city: z
    .string({required_error:"Enter City"})
    .trim()
})

const UserLoginSchema = z.object({
    email: z
    .string({required_error: "Email is required"})
    .trim()
    .email({message: "Invalid email address"})
    .endsWith("@gmail.com", "Email must end with @gmail.com")
    .min(3, {message: "Email must be at least of 3 characters"})
    .max(255,{message:"email must not have more than 255 chars."}),

    password: z
        .string({ required_error: "Password is required" })
        .min(8, { message: "Password must be at least 8 characters long" }) // Consistent minimum length
        .max(1024, { message: "Password must not be greater than 1024 characters" })
        .refine((value) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value), {
        message: "Password must contain at least one special character",
        })
        .refine((value) => /[A-Z]/.test(value), {
        message: "Password must contain at least one uppercase letter",
        }),
})

const DriverSignupSchema = z.object({
    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be of at least 3 characters"})
    .max(255,{message:"Name must be of at most 255 characters"}),

    phone:z
    .string({required_error:"Enter your Contact number"})
    .trim()
    .min(10,{message:"Contact number must be of at least 10 digits"})
    .max(20,{message:"Contact number must be of at most 20 digits"}),

    email: z
    .string({required_error: "Email is required"})
    .trim()
    .email({message: "Invalid email address"})
    .endsWith("@gmail.com", "Email must end with @gmail.com")
    .min(3, {message: "Email must be at least of 3 characters"})
    .max(255,{message:"email must not have more than 255 chars."}),

    
    password: z
    .string({ required_error: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters long" }) // Consistent minimum length
    .max(1024, { message: "Password must not be greater than 1024 characters" })
    .refine((value) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value), {
        message: "Password must contain at least one special character",
    })
    .refine((value) => /[A-Z]/.test(value), {
        message: "Password must contain at least one uppercase letter",
    }),
    
    
    city: z
    .string({required_error:"Enter City"})
    .trim(),

    vehicleNo: z
    .string({required_error: "Vehicle No is required"})
    .min(9, {message: "Vehicle No. must be at least of 9 characters"})
    .max(12,{message:"Vehicle No. must not have more than 12 chars."})
})

const DriverLoginSchema = z.object({
    email: z
    .string({required_error: "Email is required"})
    .trim()
    .email({message: "Invalid email address"})
    .endsWith("@gmail.com", "Email must end with @gmail.com")
    .min(3, {message: "Email must be at least of 3 characters"})
    .max(255,{message:"email must not have more than 255 chars."}),

    password: z
        .string({ required_error: "Password is required" })
        .min(8, { message: "Password must be at least 8 characters long" }) // Consistent minimum length
        .max(1024, { message: "Password must not be greater than 1024 characters" })
        .refine((value) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value), {
        message: "Password must contain at least one special character",
        })
        .refine((value) => /[A-Z]/.test(value), {
        message: "Password must contain at least one uppercase letter",
        }),
})

const contactSchema = z.object({
    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be of at least 3 characters"})
    .max(255,{message:"Name must be of at most 255 characters"}),

    email: z
    .string({required_error: "Email is required"})
    .trim()
    .email({message: "Invalid email address"})
    .endsWith("@gmail.com", "Email must end with @gmail.com")
    .min(3, {message: "Email must be at least of 3 characters"})
    .max(255,{message:"email must not have more than 255 chars."}),

    message:z
    .string({required_error:"Enter the message"})
    .trim()
    .min(20,{message:"Message must be of at least 20 characters"})
    .max(1000,{message:"Message must be of at most 1000 characters"}),
})


module.exports = {UserSignupSchema,UserLoginSchema,DriverSignupSchema,DriverLoginSchema,contactSchema};