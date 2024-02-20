"use client";
import React, { useState } from "react";

import Link from "next/link";

const Admin = () => {
  const [dashboard, setDashboard] = useState<string | null>(null);
  console.log(dashboard);
  return (
    <div className="flex gap-14">
      <div className="ml-24 mt-24">
        <button onClick={() => setDashboard("services")}>Add service</button>
        {/* <h1>All service</h1>
        <h1>Add testimonial</h1> */}
      </div>
      {dashboard === "services" && <div>services </div>}
    </div>
  );
};

export default Admin;
