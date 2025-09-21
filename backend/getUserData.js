import User from "../User_Models";

export const getUserData = async (id) => {
    try {
        const user = await User.findById(id).select("-password -verifyOtp -resetOTP -resetOTPExpireAt");
        return user;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw new Error("Could not fetch user data");
    }

};  