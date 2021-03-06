import React, { useState } from "react";
import { deleteUserByPinAPI } from "../../../api/usersAPI";

const Deleter = () => {
  const [userPin, setUserPin] = useState("");
  const [formStatus, setFormStatus] = useState("");

  const deleteUserHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await deleteUserByPinAPI(userPin);
      //   setUserPin("");
      //   props.form("");
      //   props.formStatusStyle("form__pass");
      //   props.formMessage("User deleted");
    } catch (error) {
      // handle error
      console.log(error);
      //   props.formStatusStyle("form__error");
      //   setFormStatus(styles["Form--Error"]);
      //   formErrors(error, props.formMessage);
    }
  };

  return (
    <div
    // className={`${styles["UserUtils-Container"]} ${formStatus}`}
    >
      <div
      // className={styles["UserUtils-Header"]}
      >
        <div
        // className={styles["UserUtils-Header__title"]}
        >
          <p>Remove Your Spot:</p>
        </div>
        <div
        // className={styles["UserUtils-Header__close"]}
        // onClick={() => {
        //   props.form(false);
        //   props.formMessage("");
        // }}
        >
          {/* <svg
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg> */}
        </div>
      </div>
      <form
        // className={styles["UserUtils-Form"]}
        onSubmit={deleteUserHandler}
      >
        <label className="label__control" htmlFor="seatsInput">
          Updater pin
        </label>
        <input
          name="userPin"
          className="inputs__control"
          type="text"
          value={userPin}
          onChange={(e) => setUserPin(e.target.value)}
        ></input>
        <button className="inputs__button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Deleter;
