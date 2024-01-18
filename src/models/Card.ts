import mongoose from 'mongoose'

export interface Cards extends mongoose.Document {
  name: string
  type: string
  attack: number
  defense: number
  image_url: string
  hp:number
  level:number
  stars:number
  attributes:JSON
}

/* CardSchema will correspond to a collection in your MongoDB database. */
const CardSchema = new mongoose.Schema<Cards>({
  name: {
    /* The name of this Card */
    type: String,
    required: [true, 'Please provide a name for this Card.'],
    maxlength: [120, 'Name cannot be more than 120 characters'],
  },
  image_url: {
    /* Url to card's image */

    required: [true, 'Please provide an image url for this card.'],
    type: String,
  },
  type:{
    type:String
  },
  attack:{
    type:Number
  },
  defense:{
    type:Number
  },
  hp:{
    type:Number
  },
  level:{
    type:Number
  },
  stars:{
    type:Number
  },
  attributes:{
    type:JSON
  }
})

export default mongoose.models.Card || mongoose.model<Cards>('Card', CardSchema)
