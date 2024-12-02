import Ccard from "./Ccard"
import { BData } from "../../types/types"

  
interface BDataProps {
    bCardList: BData[];
}

const CardList = ({bCardList}: BDataProps) => {

  if (!bCardList || !Array.isArray(bCardList)) {
    return <div>データが存在しません。</div>;
  }
  
  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
        {bCardList.map((BData: BData) => (
            <Ccard key={BData.id} bbData={BData} />
        ))}
    </div>
          
  );
}

export default CardList;