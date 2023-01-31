import React from "react";

const Grid = ({ images }) => {
  const length = Object.keys(images).length;
  if (length === 1)
    return images.map((val, index) => {
      return (
        <div className="grid columns-1 w-full" key={index}>
          <img
            src={val}
            alt="Post image"
            className="max-h-[600px] h-full w-full"
          />
        </div>
      );
    });
  else if (length === 2)
    return (
      <div className="grid gap-1 grid-cols-2 grid-rows-1">
        {images.map((val, index) => {
          return (
            <div className="row-span-2 col-span-1 " key={index}>
              <img src={val} alt="Post image" className="h-full w-full" />
            </div>
          );
        })}
      </div>
    );
  else if (length === 3)
    return (
      <div className="grid gap-1 grid-cols-3 grid-rows-2">
        {images.map((val, index) => {
          if (index === 0)
            return (
              <div className="col-span-2 row-span-2" key={index}>
                <img
                  src={images[0]}
                  alt="Post image"
                  className="h-full w-full"
                />
              </div>
            );
          else
            return (
              <div className="col-span-1 row-span-1" key={index}>
                <img src={val} alt="Post image" className="h-full w-full" />
              </div>
            );
        })}
      </div>
    );
  else if (length === 4)
    return (
      <div className="grid gap-1 grid-cols-3 grid-rows-3 h-[500px]">
        {images.map((val, index) => {
          if (index < 1)
            return (
              <div className="col-span-2 row-span-3" key={index}>
                <img
                  src={images[0]}
                  alt="Post image"
                  className="h-full w-full"
                />
              </div>
            );
          else
            return (
              <div className="col-span-1 row-span-1" key={index}>
                <img src={val} alt="Post image" className="h-full w-full" />
              </div>
            );
        })}
      </div>
    );
  else if (length === 5)
    return (
      <div className="grid gap-1 grid-cols-6 grid-rows-5 h-[500px]">
        {images.map((val, index) => {
          if (index < 2)
            return (
              <div className="col-span-3 row-span-3" key={index}>
                <img
                  src={images[0]}
                  alt="Post image"
                  className="h-full w-full"
                />
              </div>
            );
          else
            return (
              <div className="col-span-2 row-span-2" key={index}>
                <img src={val} alt="Post image" className="h-full w-full" />
              </div>
            );
        })}
      </div>
    );
  else if (length >= 5) {
    return (
      <div className="grid gap-1 grid-cols-6 grid-rows-5 h-[500px]">
        {images.slice(0, 5).map((val, index) => {
          if (index < 2)
            return (
              <div className="col-span-3 row-span-3" key={index}>
                <img
                  src={images[0]}
                  alt="Post image"
                  className="h-full w-full"
                />
              </div>
            );
          else if (index < 4)
            return (
              <div className="col-span-2 row-span-2" key={index}>
                <img src={val} alt="Post image" className="h-full w-full" />
              </div>
            );
          else {
            return (
              <div className="col-span-2 row-span-2 relative" key={index}>
                <img src={val} alt="Post image" className="h-full w-full" />
                <div className="bg-[#44495026] absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <p className="text-3xl text-white text-center font-bold">
                    +{length - 4}
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
};

export default Grid;
