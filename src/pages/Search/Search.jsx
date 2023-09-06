import React, { useEffect } from "react";
import { Layout, ListProducts } from "../../components";
import useQueryParams from "../../Hooks/useQuery";
import { SearchHooks } from "../../Features";
import { Oval } from "react-loader-spinner";

const Search = () => {
  const query = useQueryParams();
  const { useSearch } = SearchHooks;
  const { GetSearch, SearchData, SearchLoading, SearchSuccess } = useSearch(
    query.get("name")
  );

  useEffect(() => {
    GetSearch();
  }, []);

  return (
    <Layout>
      <h2 className="tx-center">All we found about {query.get("name")}</h2>
      <div className="d-flex j-center">
        {SearchLoading && <Oval color="black" width={50} height={50} />}
      </div>
      {!SearchLoading && SearchSuccess && (
        <ListProducts products={SearchData?.data.products} grid={3} center />
      )}
      {!SearchData?.data.products.length && !SearchLoading && (
        <p className="tx-center m-5">No results found</p>
      )}
    </Layout>
  );
};

export default Search;
