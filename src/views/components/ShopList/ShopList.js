import CardItem from "@components/CardItem/CardItem";
import PriceRangeInput from "@components/PriceRangeInput/PriceRangeInput";
import React, { useEffect, useState } from "react";
import fruitsData from "../../../data/data";
import useProduct from "@api/useProduct";
import { toast } from "react-toastify";
import useBranch from "@api/useBranch";

const ShopList = () => {
  const [dataProduct, setData] = useState([]);
  const [branchProduct, setBranch] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setpageSize] = useState(10);
  const [totalPages, settotalPages] = useState(0);
  const { getAll } = useProduct();
  const { getBranch } = useBranch();
  const fetchProduct = async () => {
    const {success,data} = await getAll({
      pageIndex: currentPage,
      pageSize: pageSize,
    });
    if(success && data.status != 'Error') {
      setData(data.data.items)

      settotalPages(10);
    } else {
      toast.error(data.message)
    }
  }

  const fetchBranch = async () => {
    const {success,data} = await getBranch({
      BranchName: "",
    });
    if(success && data.status != 'Error') {
      setBranch(data.data.items)
    } else {
      toast.error(data.message)
    }
  }

  useEffect(() => {
    fetchProduct();
    fetchBranch()
  }, []);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
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
                          {
                            branchProduct.map((items,key) => {
                              return (
                              <li key={items.id}>
                                <div class="d-flex justify-content-between fruite-name">
                                  <div>
                                    <i class="fas fa-apple-alt me-2"></i>{items.branchName}
                                  </div>
                                  <span>({items.CountProduct})</span>
                                </div> 
                              </li>
                              )
                            })
                          }
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <PriceRangeInput />
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
                    {dataProduct.map((fruit,index) => {

                      console.log(fruit);
                      return (
                        <CardItem
                          key={fruit.id}
                          id={fruit.id}
                          imgSrc={fruit.productMaterial}
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
