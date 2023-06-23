import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const College = () => {
  const { slug } = useParams();
  return (
    <div>
      <h1>College</h1>
      <h1>{slug}</h1>
    </div>
  );
};

export default College;
