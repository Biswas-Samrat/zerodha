import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Order = () => {
  const [allOrder, setAllOrder] = useState([]);

  useEffect(() => {
    axios.get("https://zerodha-b0oq.onrender.com/allOrder").then((res) => {
      console.log(res.data);
      setAllOrder(res.data);
    });
  }, []);

  return (
    <>
      <h3 className="title">Holdings ({allOrder.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
          </tr>

          {allOrder.map((stock, index) => (
            <tr key={index}>
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
              <td>{stock.price}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default Order;


// const Orders = () => {
//   return (
//     <div className="orders">
//       <div className="no-orders">
//         <p>You haven't placed any orders today</p>

//         <Link to={"/"} className="btn">
//           Get started
//         </Link>
//       </div>
//     </div>
//   );
// };

