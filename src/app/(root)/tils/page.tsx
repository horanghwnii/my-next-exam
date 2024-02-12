import Page from '@/components/Page';

function TilsListPage({
  searchParams: { type },
}: {
  searchParams: { type: 'trending' | 'latest' };
}) {
  return <Page>띨 목록 페이지</Page>;
}

export default TilsListPage;
