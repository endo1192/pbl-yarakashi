import Link from 'next/link';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../../components/ui/card"
import { BData } from "../../types/types"

interface BBDataProps {
    bbData: BData;
}


const Ccard = ({bbData}: BBDataProps) => {
    if (!bbData) {
        return <div>No data available</div>; // bbDataがない場合の処理
      }

  const { id, title, content, createdAt, username } = bbData;

  return (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{username}</CardDescription>
        </CardHeader>
        <CardContent>
          {content}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href={`/bbs-posts/${id}`} className="text-blue-500">Read</Link>
        </CardFooter>
      </Card>
          
  );
}

export default Ccard;