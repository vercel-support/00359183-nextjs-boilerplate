type Params = Promise<{ searchType: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Page(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const paramsSearchType = params.searchType;
  const searchParamsSearchType = searchParams.searchType;
  return (
    <div>
      <p>params.searchType: {paramsSearchType}</p>
      <p>searchParams.searchType: {searchParamsSearchType}</p>
    </div>
  );
}
