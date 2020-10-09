import React, { fragment, Component, Fragment } from "react";
import { Row, Col, Card, CardBody, Input, Label } from "reactstrap";
import "./body.styles.scss";

import store from "../../../../global/store";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrData: [],
      objDetail: {},
      category: "Name ",
    };
  }

  handleSearch = async (e) => {
    const { value } = e.target;
    if (value.length > 2) {
      try {
        let result = await store.actions.getAllMovies();
        console.log(result.data.results);
        this.setState({
          arrData: result.data.results,
        });
      } catch (err) {
        this.setState({
          arrData: [],
        });
      }
    } else {
      this.setState({
        arrData: [],
      });
    }
  };

  handleDetailMovie = (e) => {
    let data = this.state.arrData.find(
      (key) => String(key.episode_id) === e.target.id
    );
    console.log(data);
    if (data !== undefined) {
      this.setState({
        objDetail: data,
      });
    }
  };

  render() {
    console.log(this.state.objDetail);
    return (
      <Fragment>
        <div className="main-body">
          <div className="right-side">
            <CardBody>
              <div className="">
                <Row>
                  <CardBody>
                    {Object.keys(this.state.objDetail).length > 0 && (
                      <div className="cover-data">
                        <Col xs="12">
                          <Row>
                            <Col> Description </Col>
                          </Row>
                          <Row>
                            <Col xs="2" className="detail-title">
                              Title
                            </Col>
                            <Col xs="10" id="title">
                              {this.state.objDetail.title}
                            </Col>
                          </Row>
                          <Row>
                            <Col xs="2" className="detail-title">
                              Directore
                            </Col>
                            <Col xs="10" id="directore">
                              {this.state.objDetail.director}
                            </Col>
                          </Row>
                          <Row>
                            <Col xs="2" className="detail-title">
                              Last Edite
                            </Col>
                            <Col xs="10" id="edited">
                              {this.state.objDetail.edited !== undefined
                                ? this.state.objDetail.edited.slice(0, 10)
                                : this.state.objDetail.edited}
                            </Col>
                          </Row>
                          <Row>
                            <Col xs="2" className="detail-title">
                              Created
                            </Col>
                            <Col xs="10" id="created">
                              {this.state.objDetail.created !== undefined
                                ? this.state.objDetail.created.slice(0, 10)
                                : this.state.objDetail.created}
                            </Col>
                          </Row>
                          <Row>
                            <Col xs="2" className="detail-title">
                              Episode
                            </Col>
                            <Col xs="10" id="episode_id">
                              {this.state.objDetail.episode_id}
                            </Col>
                          </Row>
                          <Row>
                            <Col xs="2" className="detail-title">
                              Description
                            </Col>
                            <Col xs="10" id="opening">
                              {this.state.objDetail.opening_crawl}
                            </Col>
                          </Row>
                        </Col>
                      </div>
                    )}
                  </CardBody>
                </Row>
              </div>
            </CardBody>
          </div>
          <div className="left-side">
            <CardBody>
              <div className="">
                <Row>
                  <Col>
                    <Input
                      type="text"
                      name="search"
                      placeholder="Search..."
                      onChange={(e) => this.handleSearch(e)}
                    ></Input>
                  </Col>
                </Row>
                <Row>
                  <CardBody className="list-data">
                    <Col xs="12">
                      {this.state.arrData.map((data, index) => (
                        <Row
                          key={index}
                          onClick={(e) => this.handleDetailMovie(e)}
                          className="row-of-list"
                        >
                          <Col xs="3" className="title" id={data.episode_id}>
                            {this.state.category + " " + data.episode_id}
                          </Col>

                          <Col xs="9" className="title" id={data.episode_id}>
                            {data.title}
                          </Col>
                        </Row>
                      ))}
                    </Col>
                  </CardBody>
                </Row>
              </div>
            </CardBody>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Body;
