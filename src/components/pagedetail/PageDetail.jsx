import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import axios from "axios";
import Moment from "react-moment";
import { Container } from "react-bootstrap";
import { BASE_URL } from "../../constants/Api";

function PageDetail() {
  const [page, setPage] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { id } = useParams();

  const url = BASE_URL + "wp/v2/pages/" + id;

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setPage(response.data);
        setLoading(false);
      })
      .catch(function (err) {
        setError(err);
      });
  }, [url]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container >
      <div className="page-detail">
        <h1>{page.title.rendered}</h1>
        <h3> <Moment format="DD MMMM YYYY">{page.date}</Moment> </h3>
        <div dangerouslySetInnerHTML={{ __html: page.excerpt.rendered }} />
      </div>
    </Container>
  );

}

export default PageDetail;