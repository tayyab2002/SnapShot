import React, { useState } from "react";
import Allpictures from "./components/PicturesData/AllData";
import Shots from "./Shots";
import Nav from "./components/Navber/Nav";
import Title from "./components/Title";
const SnapShot = () => {
  const [shots, setShots] = useState(Allpictures);
  const [see , setSearch] = useState('');
  const filterItem=(ctgry)=>{
    if(ctgry==='All'){
      setShots(Allpictures);
      return;
    }else{
      const updateN = Allpictures.filter((getPicData)=>{
        return getPicData.category === ctgry;
      });
      setShots(updateN);
    }
  }
  const picSearch = (e)=>{
    e.preventDefault();
    const searchPic = Allpictures.filter((getPicData)=>{
      return getPicData.category === see;
    });
    setShots(searchPic);
    setSearch();
  }
  return (
    <div style={style}>
      <Nav filterItem={filterItem} setSearch={setSearch} see={see} picSearch={picSearch} />
      <Title />
      <Shots shots={shots} />
    </div>
  );
};
let style = {
  backgroundImage: "linear-gradient(to bottom, orange ,rgb(30, 24, 204))",
};

export default SnapShot;
