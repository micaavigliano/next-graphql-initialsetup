import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import Image from "next/image";

async function loadData() {
  const { data } = await getClient().query({
    query: gql`
      query {
        characters(page: 1) {
          results {
            id
            name
            image
          }
        }
      }
    `,
  });
  console.log(data.characters.results);
  return data.characters.results;
}

async function Homepage() {
  const characters = await loadData();
  return (
    <div className="grid grid-cols-3">
      {characters?.map((character: any) => (
        <div key={character.key}>
          <h2> {character.name}</h2>
          <Image
            src={character.image}
            alt={character.name}
            width={100}
            height={100}
          />
        </div>
      ))}
    </div>
  );
}

export default Homepage;
