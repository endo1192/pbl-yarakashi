import Ccard from "./Ccard"
import { BData } from "../../types/types"

  
interface BDataProps {
    bCardList: BData[];
}

const CardList = ({bCardList}: BDataProps) => {
  
  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
        {bCardList.map((BData: BData) => (
            <Ccard key={BData.id} bbData={BData} />
        ))}
    </div>
          
  );
}

export default CardList;