export const checkValidData = (email, password) => {


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    
    if(!emailRegex) return "Email ID is not valid";
    if(!passwordRegex) return "Password must be of atleast 8 characters, one uppercase letter, one lowercase letter, and one number";

    return null;

}