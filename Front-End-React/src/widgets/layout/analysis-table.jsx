import React, { useState } from 'react';
import Modal from 'react-modal';
import { ExclamationIcon } from '@heroicons/react/outline';
import { useAuth } from '@/utils/AuthContext';

Modal.setAppElement('#root');

const AnalysisTable = ({ analysisData }) => {
  const [selectedAnalysis, setSelectedAnalysis] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentUser } = useAuth();

  const openModal = (analysis) => {
    setSelectedAnalysis(analysis);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedAnalysis(null);
    setIsModalOpen(false);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Agent Name</th>
            {/* Add more columns as needed */}
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {analysisData.map((analysis) => (
            <tr key={analysis._id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{analysis.date}</td>
              <td className="py-2 px-4 border-b">{analysis.agent_name}</td>
              {/* Add more cells as needed */}
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => openModal(analysis)}
                  className="text-blue-500 hover:underline"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for additional details */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        {selectedAnalysis && (
          <div className="p-4">
            {/* Display additional details here */}
            <div className="flex items-center mb-4">
              <ExclamationIcon className="w-6 h-6 mr-2 text-yellow-500" />
              <h2 className="text-lg font-bold text-gray-800">
                Additional Details
              </h2>
            </div>
            {/* Add more details as needed */}
            <div>
              <strong>Date:</strong> {selectedAnalysis.date}
            </div>
            <div>
              <strong>Agent Name:</strong> {selectedAnalysis.agent_name}
            </div>
            {/* Add more details as needed */}
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AnalysisTable;
