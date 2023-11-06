export const validateCredentials = (email, password) => {
    const email = /^[w-.]+@([w-]+.)+[w-]{2,4}$/.test(email);
    const pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!email) return  "email is not valid";

    if(!password) return "password is not valid";

    return null;
}