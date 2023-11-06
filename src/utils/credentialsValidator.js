export const validateCredentials = (email, password, name="") => {
    console.log(name);
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPassValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    let isNameValid;
    if(name) isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

    if(name && !isNameValid) return "Name is not valid";
    if (!isEmailValid) return "Email is not valid";
    if (!isPassValid) return "Password is not valid";

    return null;
}