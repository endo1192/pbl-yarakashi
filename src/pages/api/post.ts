import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prismaClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {

      const allPost = await prisma.post.findMany()

      res.status(200).json(allPost)
    } catch (error) {
      console.error('Error fetching posts:', error);
      res.status(500).json({ error: 'Failed to fetch posts' })
    }
  } else if (req.method === 'POST'){
    try {
        const { username, title, content } = await req.body;
  
        if (!username || !title || !content) {
          return res.status(400).json({ error: 'Missing required fields' });
        }
  
        const newPost = await prisma.post.create({
          data: {
            username,
            title,
            content,
          },
        });
  
        res.status(201).json(newPost);
      } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ error: 'Failed to create post' });
      }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' })
  }
}
