import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../../data/pick_words.json';
import { stringify } from 'querystring';

type WordsData = {
  words: string[];
}

type Data = {
  beg: string
  final: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    var date: Date = new Date();
    date.toLocaleString('en-US', {
      timeZone: 'America/New_York',
    });
    var day = date.getDay();
    var month = date.getMonth();
    var year = date.getFullYear();
    var firstIndex = day + (31*month) + (365*year);
    var secondIndex = 2*firstIndex % 2300;
    firstIndex = firstIndex % 2300;
    var firstWord : string = data[firstIndex];
    var secondWord : string = data[secondIndex];
    res.status(200).json({ beg: firstWord, final: secondWord
})
  }
  