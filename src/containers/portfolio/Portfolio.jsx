import React, { useState } from "react";
import PageHeaderContent from "../../components/pageContainer/pageContainer";
import { BsInfoCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import imageOne from "../../images/e-commerce-app.png";
import imageTwo from "../../images/e-learning-app.png";
import imageThree from "../../images/movie-31322.gif";
import imageFour from "../../images/todoapp.png";
import imageFive from "../../images/e-commerse.gif";

import "./style.scss";

const portfolioData = [
  {
    id: 2,
    name: "Buybusy Application",
    image: imageOne,
    link: "https://github.com/mdishaalam1898/buybusy",
    link2:"https://e-commerce-web-4fed57.netlify.app"
  },
  {
    id: 2,
    name: "E-Learning-Application",
    image: imageTwo,
    link: "https://github.com/mdishaalam1898/E-Learning-App",
    link2:"https://e-learning-app-ac586c.netlify.app",
  },
  {
    id: 4,
    name: "Seat-Booking-App",
    image: imageThree,
    link: "https://github.com/mdishaalam1898/Seat-Booking-App",
    link2:"https://seat-booking-app-47e7e2.netlify.app"
  },
  {
    id: 5,
    name: "Todo App",
    image: imageFour,
    link: "https://github.com/mdishaalam1898/TODO-APP-Uing-Redux",
    link2:"https://todo-app-c66a28.netlify.app/"
  },
  {
    id: 6,
    name: "E-Commerce Website",
    image: imageFive,
    link: "https://github.com/mdishaalam1898/E-Commerce-Website",
    link2:"https://cerulean-starship-14e1d2.netlify.app"
  },
];
const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
];
const Portfolio = () => {
  const [filterValue, setFilterValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);
  function handleFilter(currentId) {
    setFilterValue(currentId);
  }
  function handleHover(index) {
    setHoveredValue(index);
  }
  console.log(filterValue);
  const filteredItem =
    filterValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filterValue);
  console.log(filteredItem);
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filterValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItem.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cartItem ${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>
                      <Link to={item.link} className="visit">Details</Link>
                    </button>
                    <button>
                      <Link to={item.link2} className="visit">Go Live to Website</Link>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
