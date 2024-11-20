import React, { useState } from 'react';
import RequestForm from './components/RequestForm';
import RequestList from './components/RequestList';

function App() {
  const [requests, setRequests] = useState([]);

  const handleNewRequest = (request) => {
    setRequests([...requests, request]);
  };

  const handleUpdateStatus = (index, status) => {
    const updatedRequests = [...requests];
    updatedRequests[index] = { ...updatedRequests[index], status };
    setRequests(updatedRequests);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              Brand & Marketing Request Manager
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
                <RequestForm onSubmit={handleNewRequest} />
                <RequestList 
                  requests={requests} 
                  onUpdateStatus={handleUpdateStatus}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;