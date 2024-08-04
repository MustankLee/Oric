import React from "react";
import { BsArrowUpSquareFill } from "react-icons/bs";
import "./project.css";
import { CgCheckR } from "react-icons/cg";
import Pro_1 from "../../Assets/project-3.1.jpg";
import Pro_2 from "../../Assets/project-3.2.jpg";
import Pro_3 from "../../Assets/project-3.3.jpg";
import Pro_4 from "../../Assets/project-3.4.jpg";
import Pro_5 from "../../Assets/project-2.1.png";
import Pro_6 from "../../Assets/project-2.2.png";
import Pro_7 from "../../Assets/ERD.png";
import Pro_8 from "../../Assets/project-1.png";
import Pro_9 from "../../Assets/project-1.2.png";
import Pro_10 from "../../Assets/project-1.3.png";

export default function Projects() {
  return (
    <div>
      <section id="top-pr">
        <h2 className="font-black">Projects</h2>
      </section>
      <a
        href="#top-pr"
        className="absolute top-1/2 right-2 text-4xl rounded-md text-yellow-400 bg-black anim z-20"
      >
        <BsArrowUpSquareFill />
      </a>
      <div className="bg-blue-100 drop-shadow-md rounded-md p-3 mt-5 mb-10">
        <div className="flex gap-4">
          <div>
            <img src={Pro_1} alt="" className="w-screen rounded-md" />
          </div>
          <div>
            <img src={Pro_2} alt="" className="w-screen rounded-md" />
          </div>
        </div>
        <div className="h-4"></div>
        <div className="flex gap-4">
          <div>
            <img src={Pro_3} alt="" className="w-screen rounded-md" />
          </div>
          <div>
            <img src={Pro_4} alt="" className="w-screen rounded-md" />
          </div>
        </div>
        <div className="text-black">
          <h3 className="font-semibold mt-2">
            Recycle Hops 2
          </h3>
          <p className="text-justify">
            Recycle Hops 2 is an intuitive application designed for sellers to 
            efficiently manage and publish their products. This platform empowers users 
            to easily add new products and remove items as needed. W
            ith a user-friendly interface, 
            Recycle Hops 2 simplifies product management, allowing sellers to keep their 
            inventory current and accessible. Whether adding new entries, 
            the application ensures a seamless experience for maintaining a dynamic 
            and organized product catalog.
          </p>
          <div className="my-3 flex gap-5 max-md:block">
            <div className="w-1/4 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Technology</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                HTML
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                CSS
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                JavaScript
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                PHP
              </li>
            </div>
            <div className="w-1/4 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Framework</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Bootstrap 5
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Laravel
              </li>
            </div>
            <div className="w-1/4 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Local Web Server</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                XAMPP
              </li>
            </div>
            <div className="w-1/4 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Action</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Load Data
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Delete Data
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Insert Data
              </li>
            </div>
          </div>
        </div>
        <a href="https://github.com/MustankLee/GSLC_2440057363_RICO_SUSANTO_Feature_Blade_Website_Programming" className="w-full flex justify-end cursor-pointer">
          <p className="p-2 rounded-md btn-shdow font-semibold bg-white">
             View Code
          </p>
        </a>
      </div>

      {/* 2 */}
      <div className="bg-blue-100 drop-shadow-md rounded-md p-3 my-10">
        <div className="flex gap-4">
          <div>
            <img src={Pro_5} alt="" className="w-screen rounded-md" />
          </div>
          <div>
            <img src={Pro_6} alt="" className="w-screen rounded-md" />
          </div>
        </div>
        <div className="text-black">
          <h3 className="font-semibold mt-2">
            Recycle Hops 1
          </h3>
          <p className="text-justify">
            Recycle Hops 1 is a website with e-commerce theme that selling about recycle
            product, the website allows user load data.
          </p>
          <div className="my-3 flex gap-5 max-md:block">
            <div className="w-1/4 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Technology</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                HTML
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                CSS
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                JavaScript
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                PHP
              </li>
            </div>
            <div className="w-1/4 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Framework</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Bootstrap 5
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Laravel
              </li>
            </div>
            <div className="w-1/4 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Local Web Server</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                XAMPP
              </li>
            </div>
            <div className="w-1/4 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Action</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Load Data
              </li>
            </div>
          </div>
        </div>
        <a href="https://github.com/MustankLee/WebsiteView_2" className="w-full flex justify-end cursor-pointer">
          <p className="p-2 rounded-md btn-shdow font-semibold bg-white">
             View Code
          </p>
        </a>
      </div>

      {/* 3 */}
      <div className="bg-blue-100 drop-shadow-md rounded-md p-3 my-10">
        <div className="flex gap-4">
          <img src={Pro_7} alt="" className="w-screen rounded-md" />
        </div>
        <div className="text-black">
          <h3 className="font-semibold mt-2">Design ERD</h3>
          <p className="text-justify">
            Design of the ERD based on the problem of cloth company which must
            be considered about relationships between entities and how does it
            integrates using SQL.
          </p>
          <div className="my-3 flex gap-5 max-md:block">
            <div className="w-1/2 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Technology</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                SQL
              </li>
            </div>
            <div className="w-1/2 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Action</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                DDL
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                DML
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Subquery
              </li>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Alias Subquery
              </li>
            </div>
          </div>
        </div>
        <a href="https://gitfront.io/r/MustankLee/XBxMHcWtHiv7/SQL-Simulation/" className="w-full flex justify-end cursor-pointer">
          <p className="p-2 rounded-md btn-shdow font-semibold bg-white">
             View Code
          </p>
        </a>
      </div>

      {/* 4 */}
      <div className="bg-blue-100 drop-shadow-md rounded-md p-3 my-10">
        <div className="flex gap-4 relative justify-between">
          <img src={Pro_8} alt="" className="w-1/4 rounded-md" />
          <img src={Pro_9} alt="" className="w-1/4 rounded-md" />
          <img src={Pro_10} alt="" className="w-1/4 rounded-md" />
        </div>
        <div className="text-black">
          <h3 className="font-semibold mt-2">Fork & Spoon</h3>
          <p className="text-justify">
            The user interface and user experience of the restaurant ordering application have been meticulously crafted using Figma, a web-based design tool. This design caters to two distinct user groups: customers and restaurant owners. For an enhanced experience, you are invited to explore the interface and functionality by clicking the button below.
          </p>
          <div className="my-3 flex gap-5 max-md:block">
            <div className="w-1/2 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Technology</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                Figma
              </li>
            </div>
            <div className="w-1/2 bg-white shdow p-2 rounded-md text-black my-6 max-md:w-full">
              <h3 className="font-semibold">Specification</h3>
              <li className="flex font-semibold items-center">
                <CgCheckR className="mr-2 bg-yellow-400 rounded-sm" />
                100+ frames & wiring animation
              </li>
            </div>
          </div>
        </div>
        <a href="https://www.figma.com/proto/8eH0ed8VuhHAsxwW1qAHtR/Savebackup?node-id=14%3A1480&starting-point-node-id=14%3A1480" className="w-full flex justify-end cursor-pointer">
          <p className="p-2 rounded-md btn-shdow font-semibold bg-white">
            Try it out
          </p>
        </a>
      </div>
    </div>
  );
}
