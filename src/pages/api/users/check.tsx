import { NextApiRequest, NextApiResponse } from 'next'
import Card, {Cards} from '../../../models/Card'
// const MONGODB_URI = process.env.MONGODB_URI!
import dbConnect from '../../../lib/dbConnect'
import clientPromise from '../../../lib/mongodb'
import { MongoClient } from 'mongodb'

const MONGODB_URI='mongodb+srv://techzasha:ridYVCRZnC5FUDr1@dharti.ctgvhra.mongodb.net/?retryWrites=true&w=majority'

async function listDatabases(client: MongoClient){
  const db = client.db('Grimace')
  const coll = db.collection('Users')
  const items = coll.find()
  // console.log(items)
  return items
};


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req
  await dbConnect()
  await clientPromise
  switch (method) {
    case 'GET':
      var opts = {
        dbName: 'Grimace'
      }
      try {
        
    const clt = new MongoClient(MONGODB_URI)
    const huntCollection = clt.db("Grimace").collection("Users")
    const crd = await huntCollection.find({}).toArray()
    
    res.status(200).json({ success: true, data: crd })
} catch (error) {
    res.status(400).json({ success: false })
}
break
case 'POST':
    try {
        const clt = new MongoClient(MONGODB_URI)
        const huntCollection = clt.db("Grimace").collection("Users")
        const crd = await huntCollection.findOne(req.body)
        
       if (!crd) {
           res.status(201).json({ success: false })
        } else {
            res.status(201).json({ success: true, data: crd })
       }

      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
