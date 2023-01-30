import React, {useState} from 'react'
import { Modal, Button } from 'react-bootstrap'

const EditModal = () => {

  const [selectedRowData, setSelectedRowData] = useState({});
const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <h2>Edit Data</h2>
      <form>
        <input type="text" defaultValue={selectedRowData.startTime} />
        <input type="text" defaultValue={selectedRowData.endTime} />
        <input type="text" defaultValue={selectedRowData.clientName} />
        <input type="text" defaultValue={selectedRowData.service} />
        <input type="text" defaultValue={selectedRowData.price} />
        <button type="submit">Save</button>
      </form>
    </Modal>
  );
}

export default EditModal;