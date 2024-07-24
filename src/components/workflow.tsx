import React from "react";

const Workflow = () => {
  return (
    <section id="product" className="w-full h-full">
      <div className="container w-full h-full">
        <div className="flex justify-center w-full">
          <img
            src="/workflow.png"
            className="h-full object-contain hidden md:block"
            alt=""
          />
          <img
            src="/workflow_vertical.png"
            className="h-full object-contain block md:hidden"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Workflow;
