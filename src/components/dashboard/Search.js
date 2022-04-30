import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";

const Search = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h6" className="mb-4"><b>Recent Searches</b></CardTitle>
         <hr></hr>
        <CardTitle tag="h6"><b>UX Design</b></CardTitle>
        <hr></hr>
        <CardTitle tag="h6"><b>Marketing</b></CardTitle>
        <hr></hr>
        <CardTitle tag="h6"><b>Expansion</b></CardTitle>
        <hr></hr>
        <CardTitle tag="h6"><b>Technology</b></CardTitle>

      </CardBody>
    </Card>
  );
};

export default Search;
