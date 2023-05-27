import React from "react";

const OrderStatus = () => {
  return (
    <div className="order-status">
      <div className="d-flex gap-3">
        <h1 className="title-large-semibold mb-16 me-auto">Status Order</h1>
        <button type="button" className="btn btn-dark">
          Dark
        </button>
        <button type="button" className="btn btn-dark">
          Dark
        </button>
      </div>
      {/* Temporary Table */}
      <table className="table">
        <thead className="rounded-top">
          <tr className="body-medium-semibold">
            <th className="p-3">Kode Transaksi</th>
            <th className="p-3">Event</th>
            <th className="p-3">Status</th>
            <th className="p-3">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="body-medium-regular p-3">ABCD1234E5F6</td>
            <td className="body-medium-regular p-3">Tari Kecak</td>
            <td className="body-medium-semibold p-3">Dipesan</td>
            <td className="body-medium-semibold p-3">Rp120.000</td>
          </tr>
          <tr>
            <td className="body-medium-regular p-3">ABCD1234E5F6</td>
            <td className="body-medium-regular p-3">Tari Kecak</td>
            <td className="body-medium-semibold p-3">Sukses</td>
            <td className="body-medium-semibold p-3">Rp120.000</td>
          </tr>
          <tr>
            <td className="body-medium-regular p-3">ABCD1234E5F6</td>
            <td className="body-medium-regular p-3">Tari Kecak</td>
            <td className="body-medium-semibold p-3">Dipesan</td>
            <td className="body-medium-semibold p-3">Rp120.000</td>
          </tr>
          <tr>
            <td className="body-medium-regular p-3">ABCD1234E5F6</td>
            <td className="body-medium-regular p-3">Tari Kecak</td>
            <td className="body-medium-semibold p-3">Dibatalkan</td>
            <td className="body-medium-semibold p-3">Rp120.000</td>
          </tr>
          <tr>
            <td className="body-medium-regular p-3">ABCD1234E5F6</td>
            <td className="body-medium-regular p-3">Tari Kecak</td>
            <td className="body-medium-semibold p-3">Dipesan</td>
            <td className="body-medium-semibold p-3">Rp120.000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderStatus;
