import { Modal } from "@mantine/core";

export function AddProductModal({ isModalOpen, setIsModalOpen }: any) {
  return (
    <Modal
      opened={isModalOpen}
      onClose={() => {
        setIsModalOpen(false);
      }}
      title="Create new product"
    >
      <div className="my-4 mx-4">this is modal</div>
    </Modal>
  );
}
