import React from "react";
import ReactDOM from "react-dom";

import "./styles/main.scss";

function App() {
  return (
    <div>
      <header className="runspk-header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-auto">
              <a href="/" className="runspk-logo--anchor">
                <img src="./images/main-logo-grey@2x.png" alt="runs.pk" />
              </a>
            </div>
            <div className="col-auto ml-auto">
              <h5 className="m-0">
                <span className="badge badge-danger text-uppercase py-2 px-3">
                  Live
                </span>
              </h5>
            </div>
            <div className="col-auto">
              <select className="form-control">
                <option value="match_1">
                  Kings XI Punjab vs Mumbai Indians
                </option>
                <option value="match_2">
                  Kings XI Punjab vs Mumbai Indians
                </option>
                <option value="match_3">
                  Kings XI Punjab vs Mumbai Indians
                </option>
                <option value="match_4">
                  Kings XI Punjab vs Mumbai Indians
                </option>
              </select>
            </div>
          </div>
        </div>
      </header>
      <main className="bg-light py-md-5" role="main">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="jumbotron m-0 bg-white shadow-sm">
                <div className="row align-items-center justify-content-between">
                  <div className="col">
                    <div className="row align-items-center justify-content-around">
                      <div className="col-auto">
                        <h3 className="runspk-team--title m-0">
                          Kings XI Punjab
                        </h3>
                      </div>
                      <div className="col-auto">
                        <img
                          className="runspk-team--logo"
                          src="./images/main-1200px-kingsxipunjablogosvg@2x.png"
                          alt="Kings XI Punjab"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-auto px-4">
                    <strong className="text-muted">VS</strong>
                  </div>
                  <div className="col">
                    <div className="row align-items-center justify-content-around">
                      <div className="col-auto">
                        <img
                          className="runspk-team--logo"
                          src="./images/main-1200px-mumbaiindianslogosvg@2x.png"
                          alt="Kings XI Punjab"
                        />
                      </div>
                      <div className="col-auto">
                        <h3 className="runspk-team--title m-0">
                          Mumbai Indians
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mt-4">
                    <p className="text-center text-secondary m-0">
                      Kings XI Punjab won the toss and elected to bat first.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-3 mb-4">
                <ul className="runspk-stats--list list-unstyled d-flex justify-content-center align-items-center p-0 mx-0 my-5">
                  <li>
                    <span>Score: 132</span>
                  </li>
                  <li>
                    <span>Overs: 11.4/50</span>
                  </li>
                  <li className="active">
                    <span>Wickets: 3</span>
                  </li>
                  <li>
                    <span>Run rate: 6.7</span>
                  </li>
                  <li>
                    <span>Target: Batting First</span>
                  </li>
                  <li>
                    <span>Req. Run rate: N/A</span>
                  </li>
                </ul>
              </div>
              <div className="mt-3 mb-4">
                <h4 className="mb-4">Kings XI Punjab Batting Stats</h4>
                <div className="table-responsive-md">
                  <table className="runspk-stats--table table table-striped table-bordered text-center">
                    <thead className="thead-dark">
                      <tr>
                        <th className="text-uppercase" scope="col">
                          PLAYER
                        </th>
                        <th className="text-uppercase" scope="col">
                          BALLS FACED
                        </th>
                        <th className="text-uppercase" scope="col">
                          SCORE
                        </th>
                        <th className="text-uppercase" scope="col">
                          STRIKE RATE
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center justify-content-center">
                            <img
                              src="./images/main-photo-1@2x.png"
                              className="runspk-table--playerthumb mr-3"
                              alt=""
                            />
                            KL Rahul
                          </div>
                        </td>
                        <td>23</td>
                        <td>36</td>
                        <td>12</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center justify-content-center">
                            <img
                              src="./images/main-photo-2@2x.png"
                              className="runspk-table--playerthumb mr-3"
                              alt=""
                            />
                            KL Rahul
                          </div>
                        </td>
                        <td>23</td>
                        <td>36</td>
                        <td>12</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center justify-content-center">
                            <img
                              src="./images/main-photo-3@2x.png"
                              className="runspk-table--playerthumb mr-3"
                              alt=""
                            />
                            KL Rahul
                          </div>
                        </td>
                        <td>23</td>
                        <td>36</td>
                        <td>12</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
