import React from 'react';
import { format } from 'date-fns';

interface Request {
  stakeholder: string;
  department: string;
  requestType: string;
  description: string;
  deadline: string;
  status: string;
  date: string;
}

interface RequestListProps {
  requests: Request[];
  onUpdateStatus: (index: number, status: string) => void;
}

export default function RequestList({ requests, onUpdateStatus }: RequestListProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="mt-8">
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Stakeholder</th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Department</th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Type</th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description</th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Deadline</th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {requests.map((request, index) => (
              <tr key={index}>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{request.stakeholder}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{request.department}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{request.requestType}</td>
                <td className="px-3 py-4 text-sm text-gray-500">{request.description}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {format(new Date(request.deadline), 'MMM dd, yyyy')}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusColor(request.status)}`}>
                    {request.status}
                  </span>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  <select
                    className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    value={request.status}
                    onChange={(e) => onUpdateStatus(index, e.target.value)}
                  >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}