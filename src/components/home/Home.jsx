import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { BASE_URL } from "../../constants/Api";

const url = BASE_URL + "wp/v2/pages/";
console.log(url);

function Home() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setPages(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <Container>
      <div className="wordpress">
        <h1>Wordpress sites</h1>
        <ul>
          {pages.map((page) => (
            <li key={page.id}>
              <Link to={`page/${page.id}`}> Link to {page.title.rendered} </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default Home;