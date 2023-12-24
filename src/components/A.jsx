import { Button, Modal } from "antd";
import React, { useState } from "react";
import useCounter from "../hooks/useCounter";
import useBoolean from "../hooks/useBoolean";

const A = () => {
  const { result, setFalse, setTrue, setToggle, setValue } = useBoolean();
  const {
    result: isOpen,
    setFalse: closeModal,
    setTrue: openModal,
  } = useBoolean();

  const acceptFunc = () => {
    alert("Ok");
    closeModal();
  };
  return (
    <div>
      <h1>{JSON.stringify(result)}</h1>
      <Button type="primary" onClick={setTrue}>
        Set True
      </Button>
      <Button type="primary" danger onClick={setFalse}>
        Set false
      </Button>
      <Button type="primary" onClick={setToggle}>
        Set Toggle
      </Button>
      <Button type="primary" danger onClick={() => setValue(true)}>
        Set Value
      </Button>

      {/* ======== MODAL ========= */}
      <div
        style={{
          marginTop: "10px",
        }}
      >
        <Modal
          title="My Modal"
          open={isOpen}
          onCancel={closeModal}
          onOk={acceptFunc}
        >
          <h1>Content Modal</h1>
        </Modal>
        <Button type="primary" size="large" onClick={openModal}>
          show modal
        </Button>
      </div>
    </div>
  );
};

export default A;
