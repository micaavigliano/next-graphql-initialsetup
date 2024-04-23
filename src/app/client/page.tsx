"use client";
import { useSuspenseQuery, gql } from "@apollo/client";

const query = gql`
  query {
    characters(page: 1) {
      results {
        id
        name
        image
      }
    }
  }
`;

const ClientPage = () => {
  const data = useSuspenseQuery(query);
  console.log(data);
  return <div>client page</div>;
};

export default ClientPage;
