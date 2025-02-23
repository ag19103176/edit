import React, { useEffect, useState } from "react";
import editIcon from "../../assets/edit.png";
import deleteIcon from "../../assets/delete.png";
import editRed from "../../assets/editRed.png";
import deleteRed from "../../assets/deleteRed.png";
import "./card.css";

const ChartActions = ({
  d,
  handleEdit,
  handleEditCount,
  setShowModal,
  handleDelete,
}) => {
  const [popUp, setPopup] = useState(false);
  const [isEditHovered, setIsEditHovered] = useState(false);
  const [isEditSelected, setIsEditSelected] = useState(false);
  const [isDeleteHovered, setIsDeleteHovered] = useState(false);
  const [isDeleteSelected, setIsDeleteSelected] = useState(false);
  const [icon, setIcon] = useState();

  const handlePopUp = () => {
    setPopup(true);
  };
  useEffect(() => {
    if (setShowModal && !isEditSelected) {
      setIcon(editIcon);
    } else {
      if (isEditSelected && setShowModal) setIcon(editRed);
      else if (isEditHovered) setIcon(editRed);
      else setIcon(editIcon);
    }
  }, [popUp, isEditHovered, isEditSelected, isDeleteHovered, setShowModal]);

  const hidePopUp = () => {
    setPopup(false);
    setIsEditHovered(false);
    setIsEditSelected(false);
    setIsDeleteHovered(false);
    setIsDeleteSelected(false);
  };

  const handleEditClick = () => {
    setIsEditSelected(true);
    setIsEditHovered(false); // Reset hover state
    setIsDeleteSelected(false); // Deselect delete
    handleEdit(d);
  };

  const handleEditCountClick = () => {
    setIsEditSelected(true);
    setIsEditHovered(false); // Reset hover state
    setIsDeleteSelected(false); // Deselect delete
    handleEditCount(d);
  };

  const handleDeleteClick = () => {
    setIsDeleteSelected(true);
    setIsDeleteHovered(false); // Reset hover state
    setIsEditSelected(false); // Deselect edit
    handlePopUp();
  };

  return (
    <>
      {popUp && (
        <div className="delete-popup">
          <div className="popup-content">
            <h3 className="dash">Delete Dashlet</h3>
            <hr className="separator" />
            <p>Are You Sure You Wanna Delete This Dashlet?</p>
            <div className="button-group">
              <button className="cancel" onClick={hidePopUp}>
                Cancel
              </button>
              <button className="dlt" onClick={() => handleDelete(d._id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      <div
        onClick={d.chartBasic === "1" ? handleEditClick : handleEditCountClick}
        onMouseEnter={() => setIsEditHovered(true)}
        onMouseLeave={() => setIsEditHovered(false)}
      >
        <img src={icon} alt="Edit Icon" className="source-icon" />
      </div>
      <div
        onClick={handleDeleteClick}
        onMouseEnter={() => setIsDeleteHovered(true)}
        onMouseLeave={() => setIsDeleteHovered(false)}
      >
        <img
          src={
            isDeleteSelected
              ? deleteRed
              : isDeleteHovered
              ? deleteRed
              : deleteIcon
          }
          alt="Delete Icon"
          className="source-icon"
        />
      </div>
    </>
  );
};

export default ChartActions;
