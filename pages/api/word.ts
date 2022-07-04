import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  beg: string
  final: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    res.status(200).json({ beg: 'bitch', final: 'simps'
})
  }
  