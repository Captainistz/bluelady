import dbConnect from './utils/dbConnect'
import Reserve from '../../models/reserve'
import type { NextApiRequest, NextApiResponse } from 'next'

dbConnect()

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const reserves = await Reserve.find({})
        res.status(200).json({ success: true, data: reserves })
      } catch (e) {
        res.status(400).json({ success: false, data: { message: String(e) } })
      }
      break
    case 'POST':
      try {
        const reserve = await Reserve.create(req.body)
        res.status(201).json({ success: true, data: reserve })
      } catch (e) {
        console.log(e);
        
        res.status(400).json({ success: false, data: { message: String(e) } })
      }
      break
    default:
      res.status(400).json({ success: false, data: { message: 'Invalid method' } })
      break
  }
}
