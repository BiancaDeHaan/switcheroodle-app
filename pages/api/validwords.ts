import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs';
import data from '../../data/words.json';
import { stringify } from 'querystring';


type WordsData = {
  words: string[];
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<WordsData>
  ) {
    res.status(200).json({ words : data })
  }
  