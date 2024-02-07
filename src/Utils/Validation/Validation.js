export const checkFormValidation = (email, password) => {
    // const validateName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    const validateEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const validatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // if(!validateName) return "Enter Full Name"
    if(!validateEmail) return "Email is not valid";
    if(!validatePassword) return "Password is not valid";

    return null;
}