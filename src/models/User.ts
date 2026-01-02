import mongoose, {Document, Model, Schema } from "mongoose";

export interface IUser extends mongoose.Document {
    clerkId: string;
    email: string;
    firtName: string;
    lastName:string;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema : mongoose.Schema<IUser> = new Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    email: {
        type: String,
        required: true, 
        unique: true,
        index: true,
    },
    firtName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: false,
    },
}, {
    timestamps: true,
})

const User : Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
export default User;