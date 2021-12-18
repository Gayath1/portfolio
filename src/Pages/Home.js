import React from 'react'
import {Link} from "react-router-dom";

const Home =() => {

    return(
        <div className="max-w-screen mx-auto" >
            <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 ">
                <div className="bg-neutral-800 px-6">
                    <p className="text-left text-white text-4xl font-semibold p-8 sm:text-8xl drop-shadow-sm font-['Roboto']">
                        Hi There,I'm
                    </p>
                    <p className="text-left text-amber-400 text-6xl sm:text-[5vw] font-bold p-8 underline decoration-amber-400 font-['Roboto']">
                        Gayath Chandula
                    </p>
                    <p className="text-left text-white text-4xl font-semibold p-8 sm:text-7xl font-['Roboto']">
                        Full Stack developer
                    </p>
                    <p className="text-left text-white text-2xl font-semibold p-10 sm:text-3xl font-['Roboto']">
                        I am passionate about solving<br/>
                        business problems through<br/>
                        human-centered design.<br/>
                        Curious by nature and<br/>
                        business-minded.<br/>
                    </p>
                    <div className=" text-4xl font-semibold p-10 sm:text-5xl">
                        <a href="https://github.com/Gayath1">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             width="30" height="30"
                             viewBox="0 0 24 24"
                             className="fill-amber-400 mt-3 mb-3 hover:scale-150 transition duration-700 ease-in-out"
                        ><path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.014467 17.065322 19.313017 13.21875 19.898438 L 13.21875 14.384766 L 15.546875 14.384766 L 15.912109 12.019531 L 13.21875 12.019531 L 13.21875 10.726562 C 13.21875 9.7435625 13.538984 8.8710938 14.458984 8.8710938 L 15.935547 8.8710938 L 15.935547 6.8066406 C 15.675547 6.7716406 15.126844 6.6953125 14.089844 6.6953125 C 11.923844 6.6953125 10.654297 7.8393125 10.654297 10.445312 L 10.654297 12.019531 L 8.4277344 12.019531 L 8.4277344 14.384766 L 10.654297 14.384766 L 10.654297 19.878906 C 6.8702905 19.240845 4 15.970237 4 12 C 4 7.5698774 7.5698774 4 12 4 z"></path></svg>
                        </a>
                        <a href="https://github.com/Gayath1">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             width="30" height="30"
                             viewBox="0 0 24 24"
                             className="fill-amber-400 mt-3 mb-3 hover:scale-150 transition duration-700 ease-in-out"><path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path></svg>
                        </a>
                        <a href="https://github.com/Gayath1">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             width="30" height="30"
                             viewBox="0 0 24 24"
                             className="fill-amber-400 mt-3 mb-3 hover:scale-150 transition duration-700 ease-in-out"><path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path></svg>
                        </a>
                        </div>

                </div>
                <div className="bg-amber-400">
                    <div className="flex items-center justify-center">
                        <img  className="w-50  h-75 " src="https://uploads-ssl.webflow.com/5f4bcd5217865e26e2333f3d/5f4be2b54e4456e2c6fe4c48_decefb5663321cb9a11906a178bdfbfe-sticker.png" alt="img"/>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className=" bg-violet-800 text-white bottom-1 hover:bg-violet-700 px-8  py-2.5 rounded font-bold text-lg text-center hover:scale-90 transition duration-700 ease-in-out ">Reach me Out</button>
                    </div>

                </div>
            </div>
            <h1 className="bg-amber-400 text-Black text-4xl font-semibold p-8 sm:text-6xl text-center font-['Roboto']">
                MY WORKS
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 ">
                <div className="bg-neutral-800 px-6 pt-10 pb-20">
                    <div className="divide-y">
                        <h1 className="text-white text-lg font-semibold p-8 sm:text-5xl  font-['Roboto']
">
                            1. Milk.lk
                        </h1>
                        <p className="text-white text-left text-sm font-semibold p-8 sm:text-2xl font-['Roboto']">Dairy product e commerce Web application<br/>
                            using React and Node</p>
                    </div>
                    <div className="flex items-left justify-left">
                        <a href="https://github.com/Gayath1/milk.lk_MERN">
                        <button className=" bg-violet-800 text-white bottom-1 hover:bg-violet-700 ml-8 px-8  py-2.5 rounded font-bold text-lg text-center hover:scale-90 transition duration-700 ease-in-out ">Project</button>
                        </a>
                        </div>

                </div>
                <div className="bg-amber-400 p-10 pb-20">
                    <img className=" w-50 pt-20" src='https://uploads-ssl.webflow.com/5f4bcd5217865e26e2333f3d/601bc13e440868c53690bbd7_monitor_1%20-%20downscaled%20BR.png' alt="image" />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="bg-neutral-800 px-6 pt-10  pb-20">
                    <div className="divide-y">
                    <h1 className="text-white text-lg font-semibold p-8 sm:text-5xl font-['Roboto']
">
                        2. Hela Clothings
                    </h1>
                    <p className="text-white text-left text-sm font-semibold p-8 sm:text-2xl font-['Roboto']">Dairy product e commerce Web application<br/>
                        using React and Node</p>
                    </div>
                    <div className="flex items-left justify-left">
                        <a href="https://github.com/Gayath1/simple_ecom_React">
                        <button className=" bg-violet-800 text-white bottom-1 hover:bg-violet-700 ml-8 px-8  py-2.5 rounded font-bold text-lg text-center hover:scale-90 transition duration-700 ease-in-out ">Project</button>
                        </a>
                    </div>
                </div>

                <div className="bg-amber-400 p-10  pb-20">
                    <img className=" w-50 pt-20" src='https://uploads-ssl.webflow.com/5f4bcd5217865e26e2333f3d/601bc13e440868c53690bbd7_monitor_1%20-%20downscaled%20BR.png' alt="image" />
                </div>

            </div>
        </div>
    )
}

export default Home;