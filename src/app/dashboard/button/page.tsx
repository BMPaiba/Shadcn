'use client'
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-5 gap2">
      <Button>Default</Button>
      <Button variant='destructive'>Destructive</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
      <Button variant="outline">outline</Button>
      <Button variant="secondary">secondary</Button>
    </div>
  );
};

export default page;
