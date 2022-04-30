import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";


const Topics = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5" className="mb-4"><b>Topics to follow</b></CardTitle>
        
        <CardTitle tag="h6"><b>UX Design</b></CardTitle>
        <CardSubtitle tag="h6">Design</CardSubtitle>
        <hr></hr>
        <CardTitle tag="h6"><b>Technology</b></CardTitle>
        <CardSubtitle tag="h6">All about Technology</CardSubtitle>
        <hr></hr>
        <CardTitle tag="h6"><b>Pytho</b></CardTitle>
        <CardSubtitle tag="h6">Computer Programming</CardSubtitle>
        <hr></hr>
        <CardTitle tag="h6"><b>Expansion</b></CardTitle>
        <CardSubtitle tag="h6">Topic</CardSubtitle>
        <hr></hr>
        <CardTitle tag="h6"><b>Legal</b></CardTitle>
        <CardSubtitle tag="h6">Topic</CardSubtitle>
        <hr></hr>
        <CardTitle tag="h6"><b>New Hire</b></CardTitle>
        <CardSubtitle tag="h6">Topic</CardSubtitle>
      </CardBody>
    </Card>
  );
};

export default Topics;
