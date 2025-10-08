import { Col, Container, Row } from "react-bootstrap";
import Content from "@tools/Content";
import CardLink from "./components/CardLink";

const libraries = Content().library;

function LibraryContent() {
  return (
      <Container>
          <div className="py-4 text-light">
              <Row>
                  {Object.keys(libraries).map((library, index) => {
                      const version = Object.keys(libraries[library].versions).shift();

                      return (
                          <Col
                              xs={12}
                              sm={12}
                              md={6}
                              lg={6}
                              xl={4}
                              className={'mb-3'}
                              key={index}
                          >
                              <CardLink
                                  title={`lion/${library}`}
                                  description={libraries[library].description}
                                  uri={`/docs/library/${library}/${version}/getting-started/about-as`}
                                  support={libraries[library].support}
                                  textColor={{
                                      title: 'title-card-link-2',
                                      description: 'text-light',
                                  }}
                              />
                          </Col>
                      );
                  })}
              </Row>
          </div>
      </Container>
  );
}

export default LibraryContent;
