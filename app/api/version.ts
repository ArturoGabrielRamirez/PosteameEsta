import { NextApiRequest, NextApiResponse } from 'next'
import { version } from '../../package.json'

type Data = {
  version: string
}

export default function handler({ req, res }: { req: NextApiRequest, res: NextApiResponse<Data> }) {
  res.status(200).json({ version })
}