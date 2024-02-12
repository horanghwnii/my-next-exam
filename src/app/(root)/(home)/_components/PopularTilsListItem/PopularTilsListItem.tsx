import { Til } from '@/type/Til.type';
import Link from 'next/link';

interface PopularTilsListItemProps {
  til: Til;
}

// til 데이터 형식 : userId, id, title, body

function PopularTilsListItem({ til }: PopularTilsListItemProps) {
  return (
    <Link href={`/tils/${til.id}`}>
      <li className='flex flex-col gap-1 p-3 h-52 rounded-md shadow-lg drop-shadow-lg overflow-x-auto'>
        <div className='h-7 overflow-hidden text-ellipsis border-b'>
          <h2 className='font-bold truncate'>{til.title}</h2>
        </div>
        <div className='flex-grow overflow-hidden text-ellipsis'>
          <p className='truncate'>{til.body}</p>
        </div>
        <span className='border-t truncate'>
          {/* {til.author?.name ? til.author?.name : '바보멍충'} */}
          {til.userId ? til.userId : '바보몽총'}
        </span>
      </li>
    </Link>
  );
}

export default PopularTilsListItem;
