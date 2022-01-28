import React from "react";
import CollectionCard from "./CollectionCard";

const PunkList = ({ punkListData }) => {
  return (
    <div className="punklist">
      {punkListData.map((punk) => (
        <div>
          <CollectionCard
            key={punk.token_id}
            id={punk.toekn_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_original_url}
          />
        </div>
      ))}
    </div>
  );
};

export default PunkList;
