'use client';

import API from '@/api/index.api';
import Page from '@/components/Page';
import { Til } from '@/type/Til.type';
import { useQuery } from '@tanstack/react-query';
import PopularTilsListItem from '../PopularTilsListItem';

function PopularTils() {
  const returnValueOfUseQuery = useQuery({
    queryKey: ['tils', { isList: true, type: 'popular' }],
    queryFn: API.til.getTils,
    refetchOnWindowFocus: true,
  });

  const { data: tils, isLoading } = returnValueOfUseQuery;

  if (isLoading) return <div className='mx-auto'>리스트를 불러오는 중...</div>;

  return (
    <Page>
      <div className='grid grid-cols-4 gap-10 '>
        {tils?.map((til: Til) => (
          <PopularTilsListItem key={til.id} til={til} />
        ))}
      </div>
    </Page>
  );
}

export default PopularTils;
