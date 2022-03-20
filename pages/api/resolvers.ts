import dbConnect from './utils/dbConnect'
import Reserve from '../../models/reserve'

dbConnect()

export const resolvers = {
  Query: {
    reserves: async () => {
      const reserves = await Reserve.find({})
      return reserves
    },
    reserve: async (_parent: any, { phone }) => {
      const reserve = await Reserve.find({ phone })
      return reserve
    },
  },
  Mutation: {
    createReserve: async (_parent: any, { name, phone, date, time }) => {
      try {
        await Reserve.syncIndexes()
        const reserved = await Reserve.create({ name, phone, date, time })
        return reserved
      } catch (e) {
        console.log(e)
      }
    },
    deleteReserve: async (_parent: any, { id }) => {
      const reservedDone = await Reserve.deleteOne({ id })
      return reservedDone
    },
  },
}
