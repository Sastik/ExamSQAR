import { Button } from "antd";
import React, { useState } from "react";

const AddQuestion = ({
  disabled,
  onClick,
}: {
  disabled: any;
  onClick: any;
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const modalStyles: React.CSSProperties = {
    display: modalVisible ? "flex" : "none",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.774)",
  };

  const modalContentStyles: React.CSSProperties = {
    position: "relative",
    backgroundColor: "#dbd9d9",
    margin: "auto",
    border: "1px solid #888",
    width: "80%",
    maxWidth: "500px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    animationName: "animatetop",
    animationDuration: "0.4s",
  };

  const modalHeaderStyles: React.CSSProperties = {
    padding: "2px 16px",
    backgroundColor: "#5cb85c",
    color: "white",
  };

  const modalBodyStyles: React.CSSProperties = {
    padding: "16px 22px",
  };

  const closeStyles: React.CSSProperties = {
    color: "#e6e4e4",
    float: "right",
    fontSize: "28px",
    cursor: "pointer",
  };

  const addQuestion: React.CSSProperties = {
    display: "flex",
    paddingTop: "7px",
    flexDirection: "column" as "column",
    gap: "10px",
    backgroundColor: "white",
  };

  const instructBtnStyles: React.CSSProperties = {
    padding: "3px",
    cursor: "pointer",
    backgroundColor: "transparent",
    color: "#0ea5e9",
    fontWeight: "500",
    fontSize: "medium",
    border: "none",
  };

  const handleModalToggle = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <div style={addQuestion}>
      <button
        id="instruct_Btn"
        style={instructBtnStyles}
        onClick={handleModalToggle}
      >
        Instructions for add question format
      </button>
      <div id="myModal" style={modalStyles}>
        <div style={modalContentStyles}>
          <div style={modalHeaderStyles}>
            <span style={closeStyles} onClick={handleModalToggle}>
              &times;
            </span>
            <h2>Instructions for add question format</h2>
          </div>
          <div style={modalBodyStyles}>
            <ul>
              <li>
                Click on the "Create/Edit Exam" option from the dashboard.
              </li>
              <li>
                Fill in the required details such as title, description, time
                window, and duration for the exam.
              </li>
              <li>
                Once the exam details are filled, proceed to add questions.
              </li>
              <li>
                For each question, specify the following:
                <ul>
                  <li>
                    The question text in the provided text area. You can use
                    Markdown for formatting.
                  </li>
                  <li>The points allocated to the question.</li>
                  <li>
                    The maximum number of attempts allowed for the question.
                  </li>
                  <li>
                    The options for the question, along with indicating the
                    correct answer(s).
                  </li>
                </ul>
              </li>
              <br />
              <li>
                Save the question to make it available to students for
                participation.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Button disabled={disabled} onClick={onClick} id="start-button" block>
        Add Question
      </Button>
    </div>
  );
};

export default AddQuestion;
