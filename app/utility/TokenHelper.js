import jwt from "jsonwebtoken";

export const EncodeToken = (email, user_id) => {
    try {
        let KEY = "123-ABC-XYZ";
        let EXPIRE = { expiresIn: "24h" };
        let PAYLOAD = { email: email, user_id: user_id };

        return jwt.sign(PAYLOAD, KEY, EXPIRE);
    } catch (error) {
        console.error("Token Encoding Error:", error);
        return null;  // Return `null` in case of an error
    }
};


export const DecodeToken=(token)=>{
    try {
        let KEY="123-ABC-XYZ"; // same as encoding key
        return jwt.verify(token,KEY)
    }
    catch (e) {
        return null
    }
}