import { createUserWithAccount, getUserByEmail } from "@/utils/user";  
import bcrypt from 'bcryptjs'; 
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
    try {
        const { name, email, password } = await req.json();

        
        const existingUser = await getUserByEmail(email);
        if (existingUser) {
            return NextResponse.json({
                message: "Email is already in use.",
            }, { status: 400 });
        }

         
        const hashedPassword = await bcrypt.hash(password, 10);  

      
        const newUser = await createUserWithAccount({
            name,
            email,
            password: hashedPassword,  
        });

        return NextResponse.json({
            message: "User created",
            data: {
                ...newUser
            }
        }, { status: 201 })

    } catch (err) {
        return NextResponse.json({
            message: "Error",
            err
        }, { status: 500 });
    }
}