import mongoose, { ConnectionOptions } from "mongoose"

function connect(): Promise<typeof mongoose> {
  const mongoUri: string = 'mongodb+srv://ColMed:proyectoWebINF3241@colegiomedico.ps3vp.mongodb.net/pecc19'
  
  const options: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
  
  return mongoose.connect(mongoUri);
}
export default { connect };