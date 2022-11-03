import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import categoriesList from "../../../pages/categories-list";

//importing firebase
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

//firebase config
const firebaseConfig = {
  apiKey: "AIzaSyACyiB2f-Sl8fbez4sjwBxJwn-eGadnXcg",
  authDomain: "auth-44578.firebaseapp.com",
  projectId: "auth-44578",
  storageBucket: "auth-44578.appspot.com",
  messagingSenderId: "595971213871",
  appId: "1:595971213871:web:432717a56846feb84a14da",
  measurementId: "G-BJWWD8H4BX",
};
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

// const categories = [
//   {
//     links: "/categories-list",
//     src: "images/icons/piggy-bank.png",
//     title: "Business",
//     courses: "20 Courses",
//   },
// ];

const CategoriesListCategories2 = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await database.collection("categories").get();
        const categories = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategories(categories);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section id="categories-2" className="wide-70 categories-section division">
      <div className="container">
        <div className="row">
          {categories.map((item, i) => (
            <div key={i} className="col-sm-6 col-lg-3 col-xl-2">
              <Link href={item.links}>
                <a>
                  <div className="c2-box text-center">
                    {/* Icon */}
                    <img
                      className="img-70"
                      src={item.src}
                      alt="category-icon"
                    />
                    {/* Text */}
                    <h5 className="h5-sm">{item.title}</h5>
                    <p>{item.courses}</p>
                  </div>
                </a>
              </Link>
            </div>
          ))}

          {/* CATEGORIE BOX #1 */}
          <div className="col-sm-6 col-lg-3 col-xl-2">
            <Link href="/category-details">
              <a>
                <div className="c2-box text-center">
                  {/* Icon */}
                  <img
                    className="img-70"
                    src="images/icons/browser-3.png"
                    alt="category-icon"
                  />
                  {/* Text */}
                  <h5 className="h5-sm">Development</h5>
                  <p>36 Courses</p>
                </div>
              </a>
            </Link>
          </div>
          {/* END CATEGORIE BOX #1 */}
          {/* CATEGORIE BOX #2 */}
          <div className="col-sm-6 col-lg-3 col-xl-2">
            <Link href="/category-details">
              <a>
                <div className="c2-box text-center">
                  {/* Icon */}
                  <img
                    className="img-70"
                    src="images/icons/piggy-bank.png"
                    alt="category-icon"
                  />
                  {/* Text */}
                  <h5 className="h5-sm">Finance</h5>
                  <p>28 Courses</p>
                </div>
              </a>
            </Link>
          </div>
          {/* END CATEGORIE BOX #2 */}
          {/* CATEGORIE BOX #3 */}
          <div className="col-sm-6 col-lg-3 col-xl-2">
            <Link href="/category-details">
              <a>
                <div className="c2-box text-center">
                  {/* Icon */}
                  <img
                    className="img-70"
                    src="images/icons/microchip.png"
                    alt="category-icon"
                  />
                  {/* Text */}
                  <h5 className="h5-sm">IT &amp; Software</h5>
                  <p>54 Courses</p>
                </div>
              </a>
            </Link>
          </div>
          {/* END CATEGORIE BOX #3 */}
          {/* CATEGORIE BOX #4 */}
          <div className="col-sm-6 col-lg-3 col-xl-2">
            <Link href="/category-details">
              <a>
                <div className="c2-box text-center">
                  {/* Icon */}
                  <img
                    className="img-70"
                    src="images/icons/network.png"
                    alt="category-icon"
                  />
                  {/* Text */}
                  <h5 className="h5-sm">Networking</h5>
                  <p>59 Courses</p>
                </div>
              </a>
            </Link>
          </div>
          {/* END CATEGORIE BOX #4 */}
          {/* CATEGORIE BOX #5 */}
          <div className="col-sm-6 col-lg-3 col-xl-2">
            <Link href="/category-details">
              <a>
                <div className="c2-box text-center">
                  {/* Icon */}
                  <img
                    className="img-70"
                    src="images/icons/lab.png"
                    alt="category-icon"
                  />
                  {/* Text */}
                  <h5 className="h5-sm">Sciences</h5>
                  <p>78 Courses</p>
                </div>
              </a>
            </Link>
          </div>
          {/* END CATEGORIE BOX #5 */}
          {/* CATEGORIE BOX #6 */}
          <div className="col-sm-6 col-lg-3 col-xl-2">
            <Link href="/category-details">
              <a>
                <div className="c2-box text-center">
                  {/* Icon */}
                  <img
                    className="img-70"
                    src="images/icons/cash.png"
                    alt="category-icon"
                  />
                  {/* Text */}
                  <h5 className="h5-sm">Marketing</h5>
                  <p>68 Courses</p>
                </div>
              </a>
            </Link>
          </div>
          {/* END CATEGORIE BOX #6 */}
          {/* CATEGORIE BOX #7 */}
          <div className="col-sm-6 col-lg-3 col-xl-2">
            <Link href="/category-details">
              <a>
                <div className="c2-box text-center">
                  {/* Icon */}
                  <img
                    className="img-70"
                    src="images/icons/encyclopedia.png"
                    alt="category-icon"
                  />
                  {/* Text */}
                  <h5 className="h5-sm">Languages</h5>
                  <p>103 Courses</p>
                </div>
              </a>
            </Link>
          </div>
          {/* END CATEGORIE BOX #7 */}
          {/* CATEGORIE BOX #8 */}
          <div className="col-sm-6 col-lg-3 col-xl-2">
            <Link href="/category-details">
              <a>
                <div className="c2-box text-center">
                  {/* Icon */}
                  <img
                    className="img-70"
                    src="images/icons/trophy.png"
                    alt="category-icon"
                  />
                  {/* Text */}
                  <h5 className="h5-sm">Health &amp; Fitness</h5>
                  <p>62 Courses</p>
                </div>
              </a>
            </Link>
          </div>
          {/* END CATEGORIE BOX #8 */}
          {/* CATEGORIE BOX #9 */}
          <div className="col-sm-6 col-lg-3 col-xl-2">
            <Link href="/category-details">
              <a>
                <div className="c2-box text-center">
                  {/* Icon */}
                  <img
                    className="img-70"
                    src="images/icons/palette.png"
                    alt="category-icon"
                  />
                  {/* Text */}
                  <h5 className="h5-sm">Design &amp; Arts</h5>
                  <p>78 Courses</p>
                </div>
              </a>
            </Link>
          </div>
          {/* END CATEGORIE BOX #9 */}
          {/* CATEGORIE BOX #10 */}
          <div className="col-sm-6 col-lg-3 col-xl-2">
            <Link href="/category-details">
              <a>
                <div className="c2-box text-center">
                  {/* Icon */}
                  <img
                    className="img-70"
                    src="images/icons/settings-1.png"
                    alt="category-icon"
                  />
                  {/* Text */}
                  <h5 className="h5-sm">Engineering</h5>
                  <p>39 Courses</p>
                </div>
              </a>
            </Link>
          </div>
          {/* END CATEGORIE BOX #10 */}
          {/* CATEGORIE BOX #11 */}
          <div className="col-sm-6 col-lg-3 col-xl-2">
            <Link href="/category-details">
              <a>
                <div className="c2-box text-center">
                  {/* Icon */}
                  <img
                    className="img-70"
                    src="images/icons/photo.png"
                    alt="category-icon"
                  />
                  {/* Text */}
                  <h5 className="h5-sm">Photography</h5>
                  <p>35 Courses</p>
                </div>
              </a>
            </Link>
          </div>
          {/* END CATEGORIE BOX #11 */}
          {/* CATEGORIE BOX #12 */}
          <div className="col-sm-6 col-lg-3 col-xl-2">
            <Link href="/category-details">
              <a>
                <div className="c2-box text-center">
                  {/* Icon */}
                  <img
                    className="img-70"
                    src="images/icons/education.png"
                    alt="category-icon"
                  />
                  {/* Text */}
                  <h5 className="h5-sm">Life Science</h5>
                  <p>37 Courses</p>
                </div>
              </a>
            </Link>
          </div>
          {/* END CATEGORIE BOX #12 */}
          {/* CATEGORIE BOX #13 */}
          <div className="col-sm-6 col-lg-3 col-xl-2">
            <Link href="/category-details">
              <a>
                <div className="c2-box text-center">
                  {/* Icon */}
                  <img
                    className="img-70"
                    src="images/icons/calculator-1.png"
                    alt="category-icon"
                  />
                  {/* Text */}
                  <h5 className="h5-sm">Mathematics</h5>
                  <p>94 Courses</p>
                </div>
              </a>
            </Link>
          </div>
          {/* END CATEGORIE BOX #13 */}
          {/* CATEGORIE BOX #14 */}
          <div className="col-sm-6 col-lg-3 col-xl-2">
            <Link href="/category-details">
              <a>
                <div className="c2-box text-center">
                  {/* Icon */}
                  <img
                    className="img-70"
                    src="images/icons/abc-1.png"
                    alt="category-icon"
                  />
                  {/* Text */}
                  <h5 className="h5-sm">Teaching</h5>
                  <p>80 Courses</p>
                </div>
              </a>
            </Link>
          </div>
          {/* END CATEGORIE BOX #14 */}
          {/* CATEGORIE BOX #15 */}
          <div className="col-sm-6 col-lg-3 col-xl-2">
            <Link href="/category-details">
              <a>
                <div className="c2-box text-center">
                  {/* Icon */}
                  <img
                    className="img-70"
                    src="images/icons/headphone.png"
                    alt="category-icon"
                  />
                  {/* Text */}
                  <h5 className="h5-sm">Music</h5>
                  <p>148 Courses</p>
                </div>
              </a>
            </Link>
          </div>
          {/* END CATEGORIE BOX #15 */}
          {/* CATEGORIE BOX #16 */}
          <div className="col-sm-6 col-lg-3 col-xl-2">
            <Link href="/category-details">
              <a>
                <div className="c2-box text-center">
                  {/* Icon */}
                  <img
                    className="img-70"
                    src="images/icons/paper.png"
                    alt="category-icon"
                  />
                  {/* Text */}
                  <h5 className="h5-sm">Journalism</h5>
                  <p>136 Courses</p>
                </div>
              </a>
            </Link>
          </div>
          {/* END CATEGORIE BOX #16 */}
          {/* CATEGORIE BOX #17 */}
          <div className="col-sm-6 col-lg-3 col-xl-2">
            <Link href="/category-details">
              <a>
                <div className="c2-box text-center">
                  {/* Icon */}
                  <img
                    className="img-70"
                    src="images/icons/money.png"
                    alt="category-icon"
                  />
                  {/* Text */}
                  <h5 className="h5-sm">Skilled Trades</h5>
                  <p>59 Courses</p>
                </div>
              </a>
            </Link>
          </div>
          {/* END CATEGORIE BOX #17 */}
          {/* CATEGORIE BOX #18 */}
          <div className="col-sm-6 col-lg-3 col-xl-2">
            <Link href="/category-details">
              <a>
                <div className="c2-box text-center">
                  {/* Icon */}
                  <img
                    className="img-70"
                    src="images/icons/school-1.png"
                    alt="category-icon"
                  />
                  {/* Text */}
                  <h5 className="h5-sm">Real Estate</h5>
                  <p>63 Courses</p>
                </div>
              </a>
            </Link>
          </div>
          {/* END CATEGORIE BOX #18 */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default CategoriesListCategories2;
