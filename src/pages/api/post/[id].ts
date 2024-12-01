import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prismaClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query; // 動的ルートの id を取得

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ error: "Invalid ID parameter" }); // ID が無効な場合のエラーハンドリング
  }

  try {
    const post = await prisma.post.findUnique({
      where: {
        id: parseInt(id, 10), // ID を数値に変換
      },
    });

    if (!post) {
      return res.status(404).json({ error: "Post not found" }); // データが見つからない場合
    }

    return res.status(200).json(post); // データを返す
  } catch (error) {
    console.error("Error fetching post:", error);
    return res.status(500).json({ error: "Internal Server Error" }); // サーバーエラー
  }
}
