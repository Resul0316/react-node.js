import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Toastify = () => {
    const notify = () => toast("registered !");
  return (
    <div>
        <button onClick={notify}>Notify !</button>
        <ToastContainer />
    </div>
  )
}

export default Toastify