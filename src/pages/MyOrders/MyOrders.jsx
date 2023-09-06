import React, { useEffect } from "react";
import styled from "styled-components";
import { Layout, Accordion } from "../../components";
import { OrderHooks } from "../../Features";
import { Oval } from "react-loader-spinner";

const Container = styled.div`
  padding: 20px;
`;

const Order = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
`;

const OrderNumber = styled.h2`
  margin: 0;
`;

const OrderStatus = styled.p`
  margin: 10px 0;
`;

const OrderTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ccc;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const ItemImage = styled.img`
  max-width: 50px;
  max-height: 50px;
`;

const TotalAmount = styled.p`
  font-weight: bold;
  margin-top: 10px;
`;

const MyOrdersPage = () => {
  const { useGetOrders } = OrderHooks;
  const { AllData, AllLoading, AllSuccess, GetAll } = useGetOrders();

  useEffect(() => {
    GetAll();
  }, []);

  return (
    <Layout>
      <Container>
        <h1>My Orders</h1>
        {AllLoading && <Oval color="black" width={100} height={100} />}
        {!AllLoading && AllSuccess && (
          <>
            {AllData?.data?.map((order, index) => (
              <Order key={index}>
                <OrderNumber>Order #{order.id}</OrderNumber>
                <OrderStatus>Status: {order.status}</OrderStatus>
                <Accordion title={"Order products"}>
                  <OrderTable>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Name</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.order_items.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <ItemImage
                              src={item.product.images[0].image_url}
                              alt="Item"
                            />
                          </td>
                          <td>{item.quantity}</td>
                          <td>{item.product.name}</td>
                          <td>{item.total_price} GBP</td>
                        </tr>
                      ))}
                    </tbody>
                  </OrderTable>
                </Accordion>
                <TotalAmount>Total Amount: {order.total} GBP</TotalAmount>
              </Order>
            ))}
          </>
        )}
        {AllSuccess && !AllData?.data?.length && <p>You have no orders yet</p>}
      </Container>
    </Layout>
  );
};

export default MyOrdersPage;
