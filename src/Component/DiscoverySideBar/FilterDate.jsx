import React, { FunctionComponent } from "react";
import { useSearchParams } from "react-router-dom";

// interface FilterByDateProps {}

const FilterDate= () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterDate = (e) => {
    if (e.target.name === "from") {
      searchParams.set("from", e.target.value);
      setSearchParams(searchParams);
    } else {
      searchParams.set("to", e.target.value);
      setSearchParams(searchParams);
    }
  };

  return (
    <div className="flex flex-col gap-3 pr-4 pb-6">
        <h3 className="text-2xl text-fontactive" >Release Date</h3>
      <div className="flex justify-between items-center  ">
        <span className="text-fontnormal" >From</span>
        <input
          type="date"
          id="from"
          name="from"
          className="outline-none bg-dark-lighten-2 px-3 py-1 rounded-md bg-fontnormal text-fontactive "
          onChange={handleFilterDate}
          value={searchParams.get("from") || "2002-11-04"}
        />
      </div>
      <div className="flex justify-between items-center">
      <span className="text-fontnormal" >To</span>

        <input
          type="date"
          id="to"
          name="to"
          className="outline-none bg-dark-lighten-2 px-3 py-1 rounded-md bg-fontnormal text-fontactive "
          onChange={handleFilterDate}
          value={searchParams.get("to") || "2023-07-28"}
        />
      </div>
    </div>
  );
};

export default FilterDate;
