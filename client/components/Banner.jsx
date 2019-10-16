import React from "react";

export default function Banner(props) {

  const style = {
    backgroundImage: 'url("' + props.bannerImage + '")'
  };
  
  return (
    <>
      <section className="bannerContainer" id={props.sectionName} style={style}>
        <div className='w-100 h-100' style={{backgroundColor:'rgb(0,0,0,0.3)'}}>
          <div className="bannerContent" id={props.sectionName + "ContentContainer"}>
            <h1 id={props.sectionName + "Content"}
            >{props.content}
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
