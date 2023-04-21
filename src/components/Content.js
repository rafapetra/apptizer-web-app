import React from "react";
import db from './../firebase.js';
import { collection, addDoc } from "firebase/firestore";

function Content() {

  const handleAddingNewTicketToList = async (newTicketData) => {
    await addDoc(collection(db, "tickets"), newTicketData);
    setFormVisibleOnPage(false);
  }

    return (
            <h2>Content</h2>
        
    )
}

export default Content();