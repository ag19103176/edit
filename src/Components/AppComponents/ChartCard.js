import React from "react";
import "./card.css";
import ChartTypeLabel from "./ChartTypeLabel";
import ChartActions from "./ChartActions";
import ChartDisplay from "./ChartDisplay";
import "../Graph/toggle.css";

const ChartCard = ({
  d,
  handleEdit,
  handleEditCount,
  setShowModal,
  handleDelete,
}) => {
  return (
    <>
      <div className="black">
        <div className="Btn">
          <ChartTypeLabel d={d} />
          <ChartActions
            d={d}
            handleEdit={handleEdit}
            setShowModal={setShowModal}
            handleEditCount={handleEditCount}
            handleDelete={handleDelete}
          />
        </div>
      </div>
      <ChartDisplay d={d} />
    </>
  );
};

export default ChartCard;
