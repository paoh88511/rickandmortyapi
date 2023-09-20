import { useEffect, useState } from "react";
import { Character, BASE_URL, PageInfo } from "./url";
import Pagination from "./Pagination";

export default function Card() {
  const [character, setCharacter] = useState<Character[]>([]);
  const [pageInfo, setPageInfo] = useState<PageInfo | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  //fetch data
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`${BASE_URL}?page=${currentPage}`);
        if (!res.ok) {
          throw new Error(`Error fetching data. Status: ${res.status}`);
        }
        const data = await res.json();
        setCharacter(data.results);
        setPageInfo({
          count: data.info.count,
          pages: data.info.pages,
          next: data.info.next,
          prev: data.info.prev,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [currentPage]);

  const handlePrev = () => {
    if (pageInfo?.prev) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (pageInfo?.next) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div>
        <div className="container">
          <h1>Assesment</h1>
          <div className="card-list">
            {character.map((item, index) => {
              return (
                <div key={index} className="card">
                  {/* get data then map name and image data to the page */}
                  <img src={item.image} alt={item.name}></img>
                  <div className="name">{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Pagination
        pageInfo={pageInfo}
        currentPage={currentPage}
        handlePrev={handlePrev}
        handleNext={handleNext}
        handleClick={handleClick}
      />
    </div>
  );
}
