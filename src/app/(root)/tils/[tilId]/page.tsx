'use client';

import API from '@/api/index.api';
import Page from '@/components/Page';
import { useQuery } from '@tanstack/react-query';

function TilDetailPage(props: { params: { tilId: string } }) {
  const tilId = props.params.tilId;
  const returnValueOfUseQuery = useQuery({
    queryKey: ['til', { isList: false, id: tilId }],
    queryFn: () => API.til.getTil(tilId),
  });

  const { data: til } = returnValueOfUseQuery;

  return <Page>{til?.title}</Page>;
}

export default TilDetailPage;
