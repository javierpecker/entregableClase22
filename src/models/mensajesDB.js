import mongoose from 'mongoose'


const schemaMensaje = new mongoose.Schema({
    
    createdAt: { type: String ,required: true},
    mail: { type: String, required: true },
    mensaje: { type: String, required: true }
  });

const URL = 'mmongodb://localhost:27017/ecommerce';

class mensajesDB {
    constructor() {
        mongoose.connect(URL);
        this.mensajes = mongoose.model('mensajes', schemaMensaje);
    }


    async init() {
        console.log("esto lo hice al pedo")
    };

    async get(){
        return this.mensajes.find();
      }


    async create(data) {
        
        const newMsj = new this.mensajes(data);
        console.log("esta es la data que viene", newMsj)
        await newMsj.save();

        return newMsj;
    }

}





export const dbConnection = new mensajesDB();