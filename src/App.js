function App() {
  return (
    <>
    <div className="container-fluid">
      <div className="row ac-header">
        <div className="col-md-10 offset-md-1 p-0">
          <nav className="navbar navbar-light navbar-expand-sm">
            <a className="navbar-brand" href="#">
              <img
                src="img/logo.png"
                width="60"
                height="60"
                className="d-inline-block mr-3"
                alt=""
                loading="lazy"
              />
              Ant Colony
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsingNavbar3"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
              <ul className="navbar-nav w-100 justify-content-center text-nowrap">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Create CV</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">My drafts</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Instructions</a>
                </li>
              </ul>
              <ul className="nav navbar-nav ml-auto justify-content-end">
                <li className="nav-item">
                  <button className="btn btn-light ac-logout" href="#">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="col-sm-12">
          <div className="row my-5">
            <div className="col-md-12 justify-content-center">
              <div className="row">
                <button className="btn btn-outline-primary ac-w-18 btn-mobile">
                  Exit preview
                </button>
              </div>
              <div className="row mt-2">
                <button className="btn btn-dark mr-2 ac-w-18 btn-mobile">
                  Print CV
                </button>
                <button className="btn btn-dark mr-2 ac-w-18">Download PDF</button>
                <button className="btn btn-dark mr-2 ac-w-18">Send Link</button>

                <button className="btn btn-primary ml-auto ac-w-18">
                  Save version
                </button>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-12 justify-content-center">
              <div className="row">
                <h1>
                  Add Name<span className="font-weight-lighter"> Surname</span>
                </h1>
                <button
                  className="btn btn-light ac-w-25 ml-auto ac-addposition font-weight-bold"
                >
                  Add Position
                </button>
              </div>
              <div className="row">
                <span className="font-weight-light">Add your Email here</span>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-12 justify-content-center">
              <div className="row">
                <h2 className="font-weight-lighter display-4">
                  Add a qoute aboute the Resume owner which summs up
                  goals/strenghts
                </h2>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-12 justify-content-center">
              <div className="row">
                <div className="col-md-4 pr-md-5 d-flex flex-column">
                  <div className="row mt-3 position-relative">
                    <img
                      className="img-fluid w-100 rounded"
                      src="https://via.placeholder.com/300x300?"
                      alt=""
                    />

                    <button className="btn btn-dark position-absolute ac-addphoto">
                      Add Photo
                    </button>
                  </div>
                 
                  <div className="row mt-5 list-group">
                    <h2>Personal info</h2>
                    <h6 className="mb-0">Born</h6>
                    <p>August 1, 1991</p>
                    <p className="mb-0">Birth place</p>
                    <p>Sarajevo, Bosnia and Herzegovina</p>
                  </div>
                  
                  <div className="row mt-5">
                    <h2>Experience</h2>
                  </div>

                  <div className="row mt-2 ac-line flex-column">
                    <p className="d-block">6 Years</p>
                    <p>
                      <span className="d-block text-muted">Position</span>
                      <span className="d-block font-weight-bold"
                        >UI/UX Designer</span
                      >
                    </p>
                  </div>
                  <div className="row mt-2 ac-line flex-column">
                    <p className="d-block">2 Years</p>
                    <p>
                      <span className="d-block text-muted">Position</span>
                      <span className="d-block font-weight-bold"
                        >Frontend developer</span
                      >
                    </p>
                  </div>
                 
                  <div className="row mt-5">
                    <h2>Language Skills</h2>
                  </div>

                  <div className="row mt-2 ac-line">
                    <p>
                      <span className="d-block font-weight-bold">English</span>
                      <span className="d-block font-weight-bold"
                        >Native speaker</span
                      >
                    </p>
                  </div>
                  <div className="row mt-2 ac-line">
                    <p>
                      <span className="d-block font-weight-bold">German</span>
                      <span className="d-block font-weight-bold"
                        >Native speaker</span
                      >
                    </p>
                  </div>
                 
                  <div className="row mt-5">
                    <h2>Job Skills</h2>
                  </div>

                  <div className="row mt-2 d-flex flex-column">
                    <div className="font-weight-bold">CSS3</div>
                    <div className="d-flex">
                      <div className="text-muted">6/10</div>
                      <div
                        className="d-flex w-100 ml-5 my-auto justify-content-around"
                      >
                        <div
                          className="ac-circle-skill ac-active-circle-skill"
                        ></div>
                        <div
                          className="ac-circle-skill ac-active-circle-skill"
                        ></div>
                        <div
                          className="ac-circle-skill ac-active-circle-skill"
                        ></div>
                        <div
                          className="ac-circle-skill ac-active-circle-skill"
                        ></div>
                        <div
                          className="ac-circle-skill ac-active-circle-skill"
                        ></div>
                        <div
                          className="ac-circle-skill ac-active-circle-skill"
                        ></div>
                        <div className="ac-circle-skill"></div>
                        <div className="ac-circle-skill"></div>
                        <div className="ac-circle-skill"></div>
                        <div className="ac-circle-skill"></div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2 d-flex flex-column">
                    <div className="font-weight-bold">NodeJs</div>
                    <div className="d-flex">
                      <div className="text-muted">6/10</div>
                      <div
                        className="d-flex w-100 ml-5 my-auto justify-content-around"
                      >
                        <div
                          className="ac-circle-skill ac-active-circle-skill"
                        ></div>
                        <div
                          className="ac-circle-skill ac-active-circle-skill"
                        ></div>
                        <div
                          className="ac-circle-skill ac-active-circle-skill"
                        ></div>
                        <div
                          className="ac-circle-skill ac-active-circle-skill"
                        ></div>
                        <div
                          className="ac-circle-skill ac-active-circle-skill"
                        ></div>
                        <div
                          className="ac-circle-skill ac-active-circle-skill"
                        ></div>
                        <div className="ac-circle-skill"></div>
                        <div className="ac-circle-skill"></div>
                        <div className="ac-circle-skill"></div>
                        <div className="ac-circle-skill"></div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2 d-flex flex-column">
                    <div className="font-weight-bold">HTML</div>
                    <div className="d-flex">
                      <div className="text-muted">6/10</div>
                      <div
                        className="d-flex w-100 ml-5 my-auto justify-content-around"
                      >
                        <div
                          className="ac-circle-skill ac-active-circle-skill"
                        ></div>
                        <div
                          className="ac-circle-skill ac-active-circle-skill"
                        ></div>
                        <div
                          className="ac-circle-skill ac-active-circle-skill"
                        ></div>
                        <div
                          className="ac-circle-skill ac-active-circle-skill"
                        ></div>
                        <div
                          className="ac-circle-skill ac-active-circle-skill"
                        ></div>
                        <div
                          className="ac-circle-skill ac-active-circle-skill"
                        ></div>
                        <div className="ac-circle-skill"></div>
                        <div className="ac-circle-skill"></div>
                        <div className="ac-circle-skill"></div>
                        <div className="ac-circle-skill"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="row mt-5 d-flex flex-column">
                    <h2>Education</h2>
                    <ul className="timeline mt-3 ml-2">
                      <li className="event">
                        <p>
                          <span className="d-block text-muted">
                            College/School</span
                          >
                          <span className="d-block vertical-line"></span>
                          <span className="d-block">
                            Academy of fine arts Sarajevo
                          </span>
                        </p>

                        <p>
                          <span className="d-block text-muted">Degree</span>
                          <span className="d-block">Master of Arts</span>
                        </p>
                        <p>
                          <span className="d-block text-muted">From - To</span>
                          <span className="d-block">2013 - 2014</span>
                        </p>
                      </li>

                      <li className="event">
                        <p>
                          <span className="d-block text-muted">
                            College/School</span
                          >
                          <span className="d-block vertical-line"></span>
                          <span className="d-block"
                            >Academy of fine arts Sarajevo</span
                          >
                        </p>

                        <p>
                          <span className="d-block text-muted">Degree</span>
                          <span className="d-block">Bachelor</span>
                        </p>
                        <p>
                          <span className="d-block text-muted">From - To</span>
                          <span className="d-block">2013 - 2014</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="row mt-5">
                    <h2>My Traits</h2>
                  </div>
                  <div className="row mt-2 mb-5">
                    <button className="btn btn-light mr-2">Fast</button>
                    <button className="btn btn-light mr-2">Team Player</button>
                  </div>
                
                </div>
                <div
                  className="col-md-8 ac-column d-flex flex-column pl-md-5 p-3 mt-sm-5 mt-md-0 d-sm-block"
                >
                  <div className="row mt-md-5 mt-sm-5">
                    <h2>Biography</h2>
                    <p className="mt-3">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Excepturi neque molestias qui maiores et consectetur odit,
                      recusandae est soluta rem suscipit doloribus ratione
                      officia culpa magni molestiae, asperiores consequuntur
                      possimus laboriosam maxime doloremque praesentium quae ex?
                      Accusamus tempora facere quod eveniet beatae et deleniti
                      molestiae laudantium pariatur doloremque, delectus
                      aspernatur ipsa dolores expedita libero cumque atque
                      laborum tempore, itaque hic voluptatibus quo. Ea itaque
                      quidem dignissimos odit ipsam neque quis, hic modi error
                    </p>
                  </div>
                  <div className="row mt-5">
                    <h2>Experiences / Projects</h2>
                  </div>
                  <div className="row d-flex flex-column mt-5">
                    <div className="text-muted">Ant Colony</div>
                    <div>
                      <h3 className="mb-0">UI/UX designer</h3>
                    </div>
                    <div className="row justify-content-end w-100 ml-0">
                      <span className="mb-3">2001 - 2020</span>
                    </div>
                    <div>
                      <p className="pr-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloremque quos vero, cumque veritatis fuga excepturi
                        atque, vel delectus et at, optio perspiciatis id hic.
                        Impedit, atque assumenda. Praesentium sint laboriosam ut
                        laborum natus pariatur dolorem!
                      </p>
                    </div>
                  </div>
                  <div className="row d-flex flex-column mt-5">
                    <div className="text-muted">Ant Colony</div>
                    <div>
                      <h3 className="mb-0">UI/UX designer</h3>
                    </div>
                    <div className="row justify-content-end w-100 ml-0">
                      <span className="mb-3">2001 - 2020</span>
                    </div>
                    <div>
                      <p className="pr-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quidem fugiat atque quod pariatur harum sed a,
                        deleniti illum impedit, odit placeat minus aliquam quis
                        maiores, adipisci numquam iusto alias nihil? Dolor
                        reprehenderit est voluptatum quam facere rerum odit
                        repellendus, molestias saepe minus quibusdam alias,
                        assumenda aut suscipit nostrum esse veniam molestiae
                        ducimus sequi veritatis natus ut. Saepe quas quod nam,
                        reiciendis eum cupiditate pariatur, hic tempore, aperiam
                        voluptatem atque nemo assumenda ipsa qui voluptas
                        ratione.
                      </p>
                    </div>
                  </div>
                  <div className="row d-flex flex-column mt-5">
                    <div className="text-muted">Ant Colony</div>
                    <div>
                      <h3 className="mb-0">UI/UX designer</h3>
                    </div>
                    <div className="row justify-content-end w-100 ml-0">
                      <span className="mb-3">2001 - 2020</span>
                    </div>
                    <div>
                      <p className="pr-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Distinctio facere qui minus cupiditate soluta,
                        architecto quibusdam veritatis non quidem expedita quia
                        itaque reprehenderit, illum placeat hic enim iusto nisi
                        nulla, ad amet aliquid recusandae maiores!
                      </p>
                    </div>
                  </div>
                  <div className="row d-flex flex-column mt-5">
                    <div className="text-muted">Ant Colony</div>
                    <div>
                      <h3 className="mb-0">UI/UX designer</h3>
                    </div>
                    <div className="row justify-content-end w-100 ml-0">
                      <span className="mb-3">2001 - 2020</span>
                    </div>
                    <div>
                      <p className="pr-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quidem fugiat atque quod pariatur harum sed a,
                        deleniti illum impedit, odit placeat minus aliquam quis
                        maiores, adipisci numquam iusto alias nihil? Dolor
                        reprehenderit est voluptatum quam facere rerum odit
                        repellendus, molestias saepe minus quibusdam alias,
                        assumenda aut suscipit nostrum esse veniam molestiae
                        ducimus sequi veritatis natus ut. Saepe quas quod nam,
                        reiciendis eum cupiditate pariatur, hic tempore, aperiam
                        voluptatem atque nemo assumenda ipsa qui voluptas
                        ratione.
                      </p>
                    </div>
                  </div>
                  <div className="row d-flex flex-column mt-5">
                    <div className="text-muted">Ant Colony</div>
                    <div>
                      <h3 className="mb-0">UI/UX designer</h3>
                    </div>
                    <div className="row justify-content-end w-100 ml-0">
                      <span className="mb-3">2001 - 2020</span>
                    </div>
                    <div>
                      <p className="pr-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Distinctio facere qui minus cupiditate soluta,
                        architecto quibusdam veritatis non quidem expedita quia
                        itaque reprehenderit, illum placeat hic enim iusto nisi
                        nulla, ad amet aliquid recusandae maiores!
                      </p>
                    </div>
                  </div>
                  <div className="row d-flex flex-column mt-5">
                    <div className="text-muted">Ant Colony</div>
                    <div>
                      <h3 className="mb-0">UI/UX designer</h3>
                    </div>
                    <div className="row justify-content-end w-100 ml-0">
                      <span className="mb-3">2001 - 2020</span>
                    </div>
                    <div>
                      <p className="pr-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quidem fugiat atque quod pariatur harum sed a,
                        deleniti illum impedit, odit placeat minus aliquam quis
                        maiores, adipisci numquam iusto alias nihil? Dolor
                        reprehenderit est voluptatum quam facere rerum odit
                        repellendus, molestias saepe minus quibusdam alias,
                        assumenda aut suscipit nostrum esse veniam molestiae
                        ducimus sequi veritatis natus ut. Saepe quas quod nam,
                        reiciendis eum cupiditate pariatur, hic tempore, aperiam
                        voluptatem atque nemo assumenda ipsa qui voluptas
                        ratione.
                      </p>
                    </div>
                  </div>
                  <div className="row d-flex flex-column mt-5">
                    <div className="text-muted">Ant Colony</div>
                    <div>
                      <h3 className="mb-0">UI/UX designer</h3>
                    </div>
                    <div className="row justify-content-end w-100 ml-0">
                      <span className="mb-3">2001 - 2020</span>
                    </div>
                    <div>
                      <p className="pr-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Distinctio facere qui minus cupiditate soluta,
                        architecto quibusdam veritatis non quidem expedita quia
                        itaque reprehenderit, illum placeat hic enim iusto nisi
                        nulla, ad amet aliquid recusandae maiores!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-md-12 justify-content-center">
              <div className="row">
                <button className="btn btn-outline-primary ac-w-18">
                  Exit preview
                </button>
              </div>
              <div className="row mt-2">
                <button className="btn btn-dark mr-2 ac-w-18">Print CV</button>
                <button className="btn btn-dark mr-2 ac-w-18">Download PDF</button>
                <button className="btn btn-dark mr-2 ac-w-18">Send Link</button>

                <button className="btn btn-primary ml-auto ac-w-18">
                  Save version
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;