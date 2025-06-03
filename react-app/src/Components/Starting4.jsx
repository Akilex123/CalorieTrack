import React from "react";
import { Link } from "react-router-dom";

function Starting4() {
  return (
    <div>
      Ovde treba da napravis ono sto se drzi odredjeno tj dugme za komitment
      Idemo sad dalje
      <Link to="/starting5">
        <button className="border">Privremeno</button>
      </Link>
    </div>
  );
}

export default Starting4;
