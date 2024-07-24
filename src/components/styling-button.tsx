"use client";

import React from "react";
import { Button } from "./ui/button";

interface Btn {
  className: string;
  title: string;
  icon: string | null;
}

const StylingButton = (props: Btn) => {
  const { className, title, icon } = props;

  return (
    <div className="flex">
      <Button className={`${className}`}>
        <span className="flex gap-4">
          <p>{title}</p>
          <p className="my-auto">{icon}</p>
        </span>
      </Button>
    </div>
  );
};

export default StylingButton;
