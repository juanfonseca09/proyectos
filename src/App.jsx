import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./App.css";

export default function App() {
  return (
    <div className="app-bg">
      <Container className="text-center text-white py-5">
        <h1 className="fw-bold">JUAN FONSECA</h1>
        <p>Estudiante de Ingeniería en Computación</p>
      </Container>
      <Container className="pb-5 px-4 px-md-5">
        <h2 className="text-white mb-5">PROYECTOS</h2>
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
                  Análisis de datos con Python y SQL, incluyendo limpieza y detección de patrones temporales.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="g-4">
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
                  Limpieza de datos y modelado predictivo básico usando series temporales.
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
      </Container>
    </div>
  );
}