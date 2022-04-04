import dbConnect from './utils/dbConnect'
import Reserve from '../../models/reserve'
import Cocktails from '../../models/cocktails'
import { nanoid } from 'nanoid'

dbConnect()

export const resolvers = {
  Query: {
    reserves: async () => {
      try {
        const reserves = await Reserve.find({})
        return reserves
      } catch (e) {
        console.log(String(e))
      }
    },
    reserveBySlug: async (_parent: any, { slug }) => {
      try {
        const reserve = await Reserve.findOne({ slug })
        return reserve
      } catch (e) {
        console.log(String(e))
      }
    },
    reserveByPhone: async (_parent: any, { phone }) => {
      try {
        const reserve = await Reserve.findOne({ phone })
        console.log(reserve)

        return reserve
      } catch (e) {
        console.log(String(e))
      }
    },
  },
  Mutation: {
    createReserve: async (_parent: any, { name, phone, date, time }) => {
      try {
        await Reserve.syncIndexes()
        const slug = nanoid(5)
        const reserved = await Reserve.create({ name, phone, date, time, slug })
        return reserved
      } catch (e) {
        console.log(e)
      }
    },
    deleteReserve: async (_parent: any, { slug }) => {
      try {
        const reservedDone = await Reserve.deleteOne({ slug })
        return reservedDone['deletedCount'] == 1
      } catch (e) {
        console.log(e)
        return false
      }
    },
    editDateTime: async (_parent: any, { date, time, slug }) => {
      try {
        await Reserve.syncIndexes()
        const reserved = await Reserve.findOne({ slug })
        reserved.date = date
        reserved.time = time
        const doc = await reserved.save()
        return doc == reserved
      } catch (e) {
        console.log(String(e))
        return false
      }
    },
    createCocktail: async (_parent: any, { cocktailInput }) => {
      try {
        await Cocktails.syncIndexes()
        const cocktailsDone = await Cocktails.create(cocktailInput)
        return cocktailsDone
      } catch (e) {
        console.log(String(e))
      }
    },
  },
}
