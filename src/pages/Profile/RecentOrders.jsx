import React, { useEffect } from "react";
import { PurchaseHistory, PurchaseCard } from "./ProfileStyle";
import { OrderHooks } from "../../Features";
import moment from "moment";
import { Oval } from "react-loader-spinner";
import { Paper } from "@mui/material";
const RecentOrders = () => {
  const { useGetOrders } = OrderHooks;
  const { GetRecent, RecentData, RecentLoading, RecentSuccess } =
    useGetOrders();

  useEffect(() => {
    GetRecent();
  }, []);

  return (
    <PurchaseHistory className="f-1">
      <Paper sx={{ bgcolor: "white", padding: "1rem" }} elevation={2}>
        <h3 style={{ padding: 0, margin: 0 }}>Recent Orders</h3>
        {RecentLoading && (
          <div className="d-flex j-center a-center">
            <Oval color="black" width={100} height={100} />{" "}
          </div>
        )}
        {RecentSuccess && !RecentLoading && (
          <>
            {RecentData?.data?.orders?.map((order) => (
              <PurchaseCard key={order.id}>
                <p>
                  Date:{" "}
                  {moment.utc(order.created_at).format("YYYY-MM-DD hh:mm a")}
                </p>
                <p>Product: {order.product_names}</p>
                <p>Amount: {order.total} GBP</p>
              </PurchaseCard>
            ))}
          </>
        )}
        {RecentSuccess && !RecentData?.data?.orders?.length && (
          <p>You have no orders yet</p>
        )}
      </Paper>
    </PurchaseHistory>
  );
};

export default RecentOrders;
