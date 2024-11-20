import React, { useState } from 'react';

interface RequestFormProps {
  onSubmit: (request: any) => void;
}

export default function RequestForm({ onSubmit }: RequestFormProps) {
  const [formData, setFormData] = useState({
    stakeholder: '',
    department: '',
    requestType: '',
    description: '',
    deadline: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...formData, status: 'pending', date: new Date().toISOString() });
    setFormData({
      stakeholder: '',
      department: '',
      requestType: '',
      description: '',
      deadline: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Stakeholder Name</label>
        <input
          type="text"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={formData.stakeholder}
          onChange={(e) => setFormData({ ...formData, stakeholder: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Department</label>
        <input
          type="text"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={formData.department}
          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Request Type</label>
        <select
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={formData.requestType}
          onChange={(e) => setFormData({ ...formData, requestType: e.target.value })}
        >
          <option value="">Select type</option>
          <option value="design">Design</option>
          <option value="content">Content</option>
          <option value="social">Social Media</option>
          <option value="campaign">Campaign</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          rows={4}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Deadline</label>
        <input
          type="date"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={formData.deadline}
          onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
        />
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit Request
      </button>
    </form>
  );
}