import React, { useState, useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

const AddLessons = () => {
  let [titleLesson, setTitleLesson] = useState("");
  let [street, setStreet] = useState("");
  let [postalCode, setPostalCode] = useState("");
  let [city, setCity] = useState("");
  let [description, setDescription] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    console.log(titleLesson, street, postalCode, city, description);
  }
  return (
    <Form onSubmit={(e) => onSubmit(e)} className="form-addLessons">
      <Form.Group className="mb-3">
        <Form.Label>Titre du cours</Form.Label>
        <Form.Control
          type="email"
          placeholder="Tapez le type de cours"
          onChange={(e) => setTitleLesson(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Adresse</Form.Label>
        <Form.Control
          type="text"
          placeholder="Tapez votre rue"
          onChange={(e) => setStreet(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Code postal</Form.Label>
        <Form.Control
          type="number"
          placeholder="Tapez votre code postale"
          onChange={(e) => setPostalCode(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Ville</Form.Label>
        <Form.Control
          type="text"
          placeholder="Tapez votre ville"
          required
          onChange={(e) => setCity(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description du cours</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Tapez la description de votre cours"
          style={{ height: "100px" }}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="f-left">
        Envoyer
      </Button>
    </Form>
  );
};

export default AddLessons;
