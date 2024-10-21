import React, { useState } from 'react';
import { ArrowLeft, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';

const UploadInventoryItemsPage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [updateExisting, setUpdateExisting] = useState('replace');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Implement file upload logic
    console.log('File to upload:', selectedFile);
    console.log('Update existing inventory:', updateExisting);
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="flex items-center mb-6">
        <Link to="/inventory" className="text-indigo-600 hover:text-indigo-900 mr-4">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-3xl font-semibold text-gray-900">Inventory Items Upload</h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700">
            Upload Inventory File
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">
                CSV file up to 10MB
              </p>
            </div>
          </div>
          {selectedFile && (
            <p className="mt-2 text-sm text-gray-500">
              Selected file: {selectedFile.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="update-existing" className="block text-sm font-medium text-gray-700">
            Update Existing Inventory
          </label>
          <select
            id="update-existing"
            name="update-existing"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            value={updateExisting}
            onChange={(e) => setUpdateExisting(e.target.value)}
          >
            <option value="replace">Replace Quantity with Update</option>
            <option value="adjust">Adjust Quantity with Update</option>
            <option value="skip">Skip Update</option>
          </select>
        </div>

        <div className="flex justify-between">
          <Link
            to="/inventory"
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Back to Inventory Items
          </Link>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Upload Items
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadInventoryItemsPage;