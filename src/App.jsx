import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./App.css";

export default function App() {
  return (
    <div className="app-bg">
      <Container className="text-center text-white py-5">
        <Row className="mb-5 text-center hero">
          <Col>
            <h1 className="fw-bold name fade-in">JUAN FONSECA</h1>
            <p className="subtitle fade-in-delay">
              Estudiante de Ingeniería en Computación
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="pb-5 px-4 px-md-5">
        <h3 className="projects-title fade-in">PROYECTOS</h3>
        <Row className="g-4 mb-5">
          <Col md={6}>
            <Card className="project-card">
              <a href="https://frabjous-pegasus-891fab.netlify.app/" target="_blank" rel="noreferrer">
                <div className="img-container">
                  <img src="/airbnb.png" alt="project" />
                </div>
              </a>
              <Card.Body>
                <Card.Title>Estimador de Precios Airbnb</Card.Title>
                <Card.Text>
                  Modelo de machine learning para estimar precios, comparando Regresión Lineal y Random Forest.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="project-card">
              <a href="https://quiet-cheesecake-9b2e60.netlify.app/" target="_blank" rel="noreferrer">
                <div className="img-container">
                  <img src="/acc.png" alt="project" />
                </div>
              </a>
              <Card.Body>
                <Card.Title>Análisis de Datos de Tránsito</Card.Title>
                <Card.Text>
                  Análisis y visualización de datos utilizando Python, SQL y Power BI para identificar patrones.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="g-4 mb-5">
          <Col md={6}>
            <Card className="project-card">
              <a href="https://thriving-queijadas-7ed85d.netlify.app/" target="_blank" rel="noreferrer">
                <div className="img-container">
                  <img src="/delitos.png" alt="project" />
                </div>
              </a>
              <Card.Body>
                <Card.Title>Procesamiento de Datos de Delitos</Card.Title>
                <Card.Text>
                  Limpieza de datos, modelado predictivo básico y visualización de resultados utilizando Python y Power BI.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="project-card">
              <a href="https://2025-proyecto-grupo-09-0421f8.pages.fing.edu.uy/" target="_blank" rel="noreferrer">
                <div className="img-container">
                  <img src="/maleza.png" alt="project" />
                </div>
              </a>
              <Card.Body>
                <Card.Title>Proyecto de Visión por Computadora</Card.Title>
                <Card.Text>
                  Aplicación de técnicas básicas de procesamiento de imágenes en equipo.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5 align-items-center">
          <Col md={6} className="text-start">
            <a href="/Resume_Juan_Fonseca.pdf" download>
              <Button variant="light">
                Descargar CV
              </Button>
            </a>
          </Col>
          <Col md={6} className="text-end">
            <a
              href="https://github.com/juanfonseca09"
              target="_blank"
              rel="noreferrer"
              className="icon-link"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/jafv2022/"
              target="_blank"
              rel="noreferrer"
              className="icon-link ms-3"
            >
              <FaLinkedin size={28} />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}