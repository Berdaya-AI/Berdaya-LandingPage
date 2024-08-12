"use client";

import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface Btn {
  className: string;
  title: string;
  iconClassName?: string;
  disabled?: boolean;
}

const StylingButton = (props: Btn) => {
  const { className, title, iconClassName } = props;

  return (
    <div className="flex">
      <Button className={`${className}`}>
        <span className="flex md:gap-4">
          <p>{title}</p>
          <ArrowRight className={`${iconClassName}`} />
        </span>
      </Button>
    </div>
  );
};

export default StylingButton;
