import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/custom-ui/theme-toggle-button";
import React from "react";

const page = () => {
  return (
    <div className="p-4">
      <ModeToggle />
      <Button>testad</Button>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default page;
