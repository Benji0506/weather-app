import React, { useState } from "react";
import "./info-button.css";

function InfoButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    if (e.target.className === "modal-overlay") {
      closeModal();
    }
  };

  return (
    <>
      <button onClick={openModal}>Info</button>
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleChange}>
          <div className="modal-content">
            <p>
              <b>
                This project was built for the Product Manager Accelerator
                Program
              </b>
              <br />
              <br />
              The Product Manager Accelerator Program is designed to support PM
              professionals through every stage of their career. From students
              looking for entry-level jobs to Directors looking to take on a
              leadership role, PM Accelerator Program has helped over hundreds
              of students fulfill their career aspirations.
              <br />
              <br />
              Product Manager Accelerator community are ambitious and committed.
              Through their program they have learnt, honed and developed new PM
              and leadership skills, giving them a strong foundation for their
              future endeavours.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default InfoButton;
