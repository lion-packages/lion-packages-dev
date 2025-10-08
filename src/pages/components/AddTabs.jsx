import { useEffect, useState } from "react";
import { Button, Col, Container, Form, ListGroup, Offcanvas, Row } from "react-bootstrap";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Content from "../../Tools/Content";
import SelectVersion from "./SelectVersion";

export default function AddTabs() {
  const { item_version, tab, library = null } = useParams();
  const [show, setShow] = useState(false);
  const [filter_search, setFilter_search] = useState("");
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getContent = () => {
    let content;

    if (null === library) {
      content = Content().framework.versions[item_version].docs;
    } else {
      content = Content().library[library].versions[item_version];
    }

    return content;
  };

  const ListItems = () => {
    return (
      <ListGroup as={'ol'} numbered>
        {Object.entries(getContent()).map(([tabName, tabObject]) => (
            <ListGroup.Item
                as="li"
                variant={"dark"}
                className={"d-flex justify-content-between align-items-start border-0"}
                key={tabName}
            >
                <div className="ms-2 me-auto w-100">
                    <div className="fw-bold mb-2">{tabObject.name}</div>

                    <div className="d-flex flex-column">
                        {Object.entries(tabObject.list).map(([tabMethod, tabMethodObject]) => (
                            <span
                                key={tabMethod}
                                role={'button'}
                                className={'text-lion-orange mb-1 p-0'}
                                onClick={() => {
                                    setShow(false);

                                    scrollToTop();

                                    navigate(
                                        library === null
                                            ? `/docs/framework/${item_version}/${tabName}/${tabMethod}`
                                            : `/docs/library/${library}/${item_version}/${tabName}/${tabMethod}`
                                    );
                                }}
                            >{tabMethodObject.name}</span>
                        ))}
                    </div>
                </div>
            </ListGroup.Item>
        ))}
      </ListGroup>
    );
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [tab]);

  return (
    <Container fluid className="my-4 text-white">
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={3} xxl={3}>
          <div className="d-xl-none">
            <Button variant="orange" onClick={() => setShow(true)}>
                <i className="bi bi-list text-light"></i>
            </Button>

            <hr />

            <Offcanvas
              placement="start"
              className="bg-lion-dark text-white"
              show={show}
              onHide={() => setShow(false)}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Available documents</Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <SelectVersion />

                <div className="mb-3">
                  <Form.Control
                    type="search"
                    className="form-control-dark"
                    placeholder="Search..."
                    value={filter_search}
                    onChange={(e) => setFilter_search(e.target.value)}
                  />
                </div>

                <ListItems />
              </Offcanvas.Body>
            </Offcanvas>
          </div>

          <div className={"vh-100 d-none d-xl-block overflow-auto"}>
            <div className="bg-dark-logo py-3">
              <SelectVersion />
            </div>

              <ListItems />
          </div>
        </Col>

        <Col xs={12} sm={12} md={12} lg={12} xl={9} xxl={9}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}
