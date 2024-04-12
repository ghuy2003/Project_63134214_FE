import CardItem from "@components/CardItem/CardItem";
import PriceRangeInput from "@components/PriceRangeInput/PriceRangeInput";
import React, { useEffect, useState } from "react";
import fruitsData from "../../../data/data";
import useShop from "@api/useShop";

const ShopList = () => {
  // const [data, setData] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [pageSize, setpageSize] = useState(10);
  // const [totalPages, settotalPages] = useState(0);
  // const { getAllProduct } = useShop();

  // useEffect(async () => {
  //   setData([...fruitsData]);
  //   const res = await getAllProduct({
  //     pageIndex: currentPage,
  //     pageSize: pageSize,
  //   });
  //   if (res.success) {
  //     setData(res.data.data.items);
  //     settotalPages(res.data.data.totalCount);
  //   }
  // }, []);

  // Test
  const [data, setData] = useState([]);
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setData([...fruitsData]);
  }, []);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  console.log(data, fruitsData);

  return (
    <>
      <div class="container-fluid fruite py-5">
        <div class="container py-5">
          <h1 class="mb-4">Fresh fruits shop</h1>
          <div class="row g-4">
            <div class="col-lg-12">
              <div class="row g-4">
                <div class="col-xl-3">
                  <div class="input-group w-100 mx-auto d-flex">
                    <input
                      type="search"
                      class="form-control p-3"
                      placeholder="keywords"
                      aria-describedby="search-icon-1"
                    />
                    <span id="search-icon-1" class="input-group-text p-3">
                      <i class="fa fa-search"></i>
                    </span>
                  </div>
                </div>
                <div class="col-6"></div>
                <div class="col-xl-3">
                  <div class="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                    <label for="fruits">Default Sorting:</label>
                    <select
                      id="fruits"
                      name="fruitlist"
                      class="border-0 form-select-sm bg-light me-3"
                      form="fruitform"
                    >
                      <option value="volvo">Nothing</option>
                      <option value="saab">Popularity</option>
                      <option value="opel">Organic</option>
                      <option value="audi">Fantastic</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row g-4">
                <div class="col-lg-3">
                  <div class="row g-4">
                    <div class="col-lg-12">
                      <div class="mb-3">
                        <h4>Categories</h4>
                        <ul class="list-unstyled fruite-categorie">
                          <li>
                            <div class="d-flex justify-content-between fruite-name">
                              <div>
                                <i class="fas fa-apple-alt me-2"></i>Apples
                              </div>
                              <span>(3)</span>
                            </div>
                          </li>
                          <li>
                            <div class="d-flex justify-content-between fruite-name">
                              <div>
                                <i class="fas fa-apple-alt me-2"></i>Oranges
                              </div>
                              <span>(5)</span>
                            </div>
                          </li>
                          <li>
                            <div class="d-flex justify-content-between fruite-name">
                              <div>
                                <i class="fas fa-apple-alt me-2"></i>Strawbery
                              </div>
                              <span>(2)</span>
                            </div>
                          </li>
                          <li>
                            <div class="d-flex justify-content-between fruite-name">
                              <div>
                                <i class="fas fa-apple-alt me-2"></i>Banana
                              </div>
                              <span>(8)</span>
                            </div>
                          </li>
                          <li>
                            <div class="d-flex justify-content-between fruite-name">
                              <div>
                                <i class="fas fa-apple-alt me-2"></i>Pumpkin
                              </div>
                              <span>(5)</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <PriceRangeInput />
                    </div>
                    <div class="col-lg-12">
                      <div class="mb-3">
                        <h4>Additional</h4>
                        <div class="mb-2">
                          <input
                            type="radio"
                            class="me-2"
                            id="Categories-1"
                            name="Categories-1"
                            value="Beverages"
                          />
                          <label for="Categories-1"> Organic</label>
                        </div>
                        <div class="mb-2">
                          <input
                            type="radio"
                            class="me-2"
                            id="Categories-2"
                            name="Categories-1"
                            value="Beverages"
                          />
                          <label for="Categories-2"> Fresh</label>
                        </div>
                        <div class="mb-2">
                          <input
                            type="radio"
                            class="me-2"
                            id="Categories-3"
                            name="Categories-1"
                            value="Beverages"
                          />
                          <label for="Categories-3"> Sales</label>
                        </div>
                        <div class="mb-2">
                          <input
                            type="radio"
                            class="me-2"
                            id="Categories-4"
                            name="Categories-1"
                            value="Beverages"
                          />
                          <label for="Categories-4"> Discount</label>
                        </div>
                        <div class="mb-2">
                          <input
                            type="radio"
                            class="me-2"
                            id="Categories-5"
                            name="Categories-1"
                            value="Beverages"
                          />
                          <label for="Categories-5"> Expired</label>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <h4 class="mb-3">Featured products</h4>
                      <div class="d-flex align-items-center justify-content-start">
                        <div
                          class="rounded me-4"
                          style={{ width: "100px", height: "100px" }}
                        >
                          <img
                            src="img/featur-1.jpg"
                            class="img-fluid rounded"
                            alt=""
                          />
                        </div>
                        <div>
                          <h6 class="mb-2">Big Banana</h6>
                          <div class="d-flex mb-2">
                            <i class="fa fa-star text-secondary"></i>
                            <i class="fa fa-star text-secondary"></i>
                            <i class="fa fa-star text-secondary"></i>
                            <i class="fa fa-star text-secondary"></i>
                            <i class="fa fa-star"></i>
                          </div>
                          <div class="d-flex mb-2">
                            <h5 class="fw-bold me-2">2.99 $</h5>
                            <h5 class="text-danger text-decoration-line-through">
                              4.11 $
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center justify-content-start">
                        <div
                          class="rounded me-4"
                          style={{ width: "100px", height: "100px" }}
                        >
                          <img
                            src="img/featur-2.jpg"
                            class="img-fluid rounded"
                            alt=""
                          />
                        </div>
                        <div>
                          <h6 class="mb-2">Big Banana</h6>
                          <div class="d-flex mb-2">
                            <i class="fa fa-star text-secondary"></i>
                            <i class="fa fa-star text-secondary"></i>
                            <i class="fa fa-star text-secondary"></i>
                            <i class="fa fa-star text-secondary"></i>
                            <i class="fa fa-star"></i>
                          </div>
                          <div class="d-flex mb-2">
                            <h5 class="fw-bold me-2">2.99 $</h5>
                            <h5 class="text-danger text-decoration-line-through">
                              4.11 $
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center justify-content-start">
                        <div
                          class="rounded me-4"
                          style={{ width: "100px", height: "100px" }}
                        >
                          <img
                            src="img/featur-3.jpg"
                            class="img-fluid rounded"
                            alt=""
                          />
                        </div>
                        <div>
                          <h6 class="mb-2">Big Banana</h6>
                          <div class="d-flex mb-2">
                            <i class="fa fa-star text-secondary"></i>
                            <i class="fa fa-star text-secondary"></i>
                            <i class="fa fa-star text-secondary"></i>
                            <i class="fa fa-star text-secondary"></i>
                            <i class="fa fa-star"></i>
                          </div>
                          <div class="d-flex mb-2">
                            <h5 class="fw-bold me-2">2.99 $</h5>
                            <h5 class="text-danger text-decoration-line-through">
                              4.11 $
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex justify-content-center my-4">
                        <div class="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100">
                          Vew More
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="position-relative">
                        <img
                          src="img/banner-fruits.jpg"
                          class="img-fluid w-100 rounded"
                          alt=""
                        />
                        <div
                          class="position-absolute"
                          style={{
                            top: "50%",
                            right: "10px",
                            transform: "translateY(-50%)",
                          }}
                        >
                          <h3 class="text-secondary fw-bold">
                            Fresh <br /> Fruits <br /> Banner
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-9">
                  <div class="row g-4 justify-content-center">
                    {data.map((fruit) => {
                      return (
                        <CardItem
                          key={fruit.id}
                          id={fruit.id}
                          imgSrc={fruit.imgSrc}
                          name={fruit.productName}
                          description={fruit.productDescription}
                          price={fruit.prodcutPrice}
                        />
                      );
                    })}

                    {/* <div className="col-12">
                      <div className="pagination d-flex justify-content-center mt-5">
                        <div
                          className="rounded"
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                        >
                          «
                        </div>
                        {Array.from({ length: totalPages }, (_, index) => (
                          <div
                            key={index}
                            className={
                              currentPage === index + 1
                                ? "active rounded"
                                : "rounded"
                            }
                            onClick={() => handlePageChange(index + 1)}
                          >
                            {index + 1}
                          </div>
                        ))}
                        <div
                          className="rounded"
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPages}
                        >
                          »
                        </div>
                      </div>
                    </div> */}

                    <div className="col-12">
                      <div className="pagination d-flex justify-content-center mt-5">
                        <a
                          href="#"
                          className="rounded"
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                        >
                          «
                        </a>
                        {Array.from({ length: totalPages }, (_, index) => (
                          <a
                            key={index}
                            href="#"
                            className={
                              currentPage === index + 1
                                ? "active rounded"
                                : "rounded"
                            }
                            onClick={() => handlePageChange(index + 1)}
                          >
                            {index + 1}
                          </a>
                        ))}
                        <a
                          href="#"
                          className="rounded"
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPages}
                        >
                          »
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopList;
