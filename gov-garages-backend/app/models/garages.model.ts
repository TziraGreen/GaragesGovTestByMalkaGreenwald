import mongoose, { Mongoose } from "mongoose";
import { model, Schema, Model, Document } from "mongoose";

// Declare garage type
interface GarageDocument extends Document {
  _id: number;
  mispar_mosah: number;
  shem_mosah: string;
  cod_sug_mosah: number;
  sug_mosah: string;
  ktovet: string;
  yishuv: string;
  telephone: string;
  mikud: number;
  cod_miktzoa: number;
  miktzoa: string;
  menahel_miktzoa: string;
  rasham_havarot: number;
  TESTIME: string;
}

export interface GarageModel extends Model<GarageDocument> {}

// Define garage schema
const garageSchema: Schema<GarageDocument> = new Schema<GarageDocument>(
  {
    _id: Number,
    mispar_mosah: Number,
    shem_mosah: String,
    cod_sug_mosah: Number,
    sug_mosah: String,
    ktovet: String,
    yishuv: String,
    telephone: String,
    mikud: Number,
    cod_miktzoa: Number,
    miktzoa: String,
    menahel_miktzoa: String,
    rasham_havarot: Number,
    TESTIME: String,
  },
  { timestamps: true }
);

export const Garage: GarageModel = model<GarageDocument, GarageModel>(
  "garage",
  garageSchema
);

// Export a function to initialize the garages model
export function initializeGarages(mongooseInstance: Mongoose): GarageModel {
  return Garage;
}

export interface Db {
  mongoose: Mongoose;
  url: string;
  garages: GarageModel;
}

// import mongoose,{Mongoose} from 'mongoose';
// // import bycrypt from "bcryptjs";
// // import jwt from "jsonwebtoken";
// import crypto from 'crypto';
// import { model, Schema, Model, Document } from 'mongoose';

// //declare garaga type
// interface GaragaDocument extends Document {
//   title: string;
//   description: string;
//   published: boolean;
// }

// interface GaragaModel extends Model<GaragaDocument> {}

// // define garaga schema
// const garagaSchema: Schema<GaragaDocument> = new Schema<GaragaDocument>(
//   {
//     title: String,
//     description: String,
//     published: Boolean,
//   },
//   { timestamps: true }
// );



// export const Garage: GaragaModel = model<GaragaDocument, GaragaModel>("garage", garagaSchema);

// // export interface DbConfig {
// //   url: string;
// //   // Add other properties as needed
// // }

// export interface Db {
//   mongoose: Mongoose;
//   url: string;
//   garages: any; // Adjust the type based on your model
// }

// export const User:Model<IUser> = model("User", UserSchema);

//declare point type
// export interface IPoint extends Document {
//     type:string;
//     coordinates:string;
// }
// //generate point schema
// const Point:Schema= new Schema({
//     type: {
//         type: String,
//         enum: ['Point'],
//         required: true
//     },
//     coordinates: {
//         type: [Number],
//         required: true
//     }
// });
//declare user type
// export interface IUser extends Document {
//     getResetPasswordToken():string;
//     getSignedToken():string;
//     resetPasswordToken: string|undefined;
//     resetPasswordExpire: string|undefined;
//     matchPassword(password: string): boolean | PromiseLike<boolean>;
//     username:string;
//     password:string;
//     email:string;
//     profile: {
//         firstName: String,
//         lastName: String,
//         avatar: String,
//         bio: String,
//         phone: String,
//         gender: String,
//         address: {
//             street1: String,
//             street2: String,
//             city: String,
//             state: String,
//             country: String,
//             zip: String,
//             location: {
//                 type: IPoint,
//                 required: false
//             }
//         },
//         active:true
//     }

// }
// define user schema
// const UserSchema: Schema = new Schema({
//     username: {
//         type: String,
//         lowercase: true,
//         unique: true,
//         required: [true, "Can't be blank"],
//         index: true
//     },
//     password: {
//         type: String,
//         required: true,
//         select: false,
//         minlength:  [8, "Please use minimum of 8 characters"],
//     },
//     email: {
//         type: String,
//         lowercase: true,
//         required: [true, "Can't be blank"],
//         match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please use a valid address'],
//         unique:true,
//         index:true
//     },
//     profile: {
//         firstName: String,
//         lastName: String,
//         avatar: String,
//         bio: String,
//         phone: String,
//         gender: String,
//         address: {
//             street1: String,
//             street2: String,
//             city: String,
//             state: String,
//             country: String,
//             zip: String,
//             location: {
//                 type: Point,
//                 required: false
//             }
//         },
//         required:false
//     },
//     resetPasswordToken: String,
//     resetPasswordExpire: String,

//     active: { type: Boolean, default: true }
// });

// UserSchema.pre<IUser>("save", async function (next: any) {
//     if (!this.isModified('password')) {
//         return next();
//     }
//     const salt = await bycrypt.genSalt(10);
//     this.password = bycrypt.hashSync(this.password, 10);
//     next();
// });

// UserSchema.methods.matchPassword= async function (password:string) {
//     return await bycrypt.compare(password,this.password)
// }
// UserSchema.methods.getSignedToken= function (password:string) {
//     return jwt.sign({id:this._id},process.env.JWT_SECRET!,{
//         expiresIn:process.env.JWT_EXPIRE
//     })
// }
// UserSchema.methods.getResetPasswordToken= function () {
//     const resetToken= crypto.randomBytes(20).toString('hex');
//     this.resetPasswordToken= crypto.
//     createHash('sha256')
//     .update(resetToken)
//     .digest('hex');
//     this.resetPasswordExpire = Date.now() + 10*(60*1000)
//     return resetToken

// }

// export const User:Model<IUser> = model("User", UserSchema);
