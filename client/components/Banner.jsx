import React from "react";

export default function Banner(props) {

  const style = {
    backgroundImage: 'url("' + props.bannerImage + '")',
    overflow: 'auto'
  };

  return (
    <>
      <section className="container-fluid bannerContainer" id={props.sectionName} style={style}>
        <div className='w-100 h-100' style={{ backgroundColor: 'rgb(0,0,0,0.3)' }}>
          <div className="bannerContent" id={props.sectionName + "Content"}>
            <h1 className='bannerHeader' id={props.sectionName + "Header"}
            >{props.content}
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
