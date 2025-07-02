import { Outlet } from "react-router";
import Sidebar from "../../components/Sidebar";
import useStore from "../../store";
import { Drawer, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function Dashboard() {
  const [opened, { open, close }] = useDisclosure(false);

  const cart = useStore((state) => state.cart);

  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className="main-content flex-1 border-gray-500 w-2xs p-3">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button onClick={open}>Show cart</Button>
        <Drawer
          offset={8}
          radius="md"
          opened={opened}
          onClose={close}
          title="Cart"
          position="right"
        >
          <h1>this is part of the drawer</h1>

          <div>
            {cart?.map((item) => {
              return (
                <div>
                  <div className="text-2xl">{item.name}</div>
                  <div className="">{item.price}</div>
                </div>
              );
            })}
          </div>
        </Drawer>
        <Outlet />
      </div>
    </div>
  );
}
