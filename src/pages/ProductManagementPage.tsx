import React, { useState } from 'react';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';
import EditProductModal from '../components/EditProductModal';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  staticDocument: string;
  proofFile: string;
  thumbnailImage: string;
}

const ProductManagementPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Product A', category: 'Electronics', price: 99.99, stock: 50, staticDocument: '', proofFile: '', thumbnailImage: '' },
    { id: 2, name: 'Product B', category: 'Clothing', price: 49.99, stock: 100, staticDocument: '', proofFile: '', thumbnailImage: '' },
    { id: 3, name: 'Product C', category: 'Home & Garden', price: 29.99, stock: 75, staticDocument: '', proofFile: '', thumbnailImage: '' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleAddProduct = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  const handleEditProduct = (id: number) => {
    const productToEdit = products.find(product => product.id === id);
    if (productToEdit) {
      setEditingProduct(productToEdit);
      setIsModalOpen(true);
    }
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleSaveProduct = (savedProduct: Product) => {
    if (savedProduct.id === 0) {
      // Add new product
      const newProduct = { ...savedProduct, id: Date.now() };
      setProducts([...products, newProduct]);
    } else {
      // Update existing product
      setProducts(products.map(product => 
        product.id === savedProduct.id ? savedProduct : product
      ));
    }
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-900">Product Management</h1>
        <button
          onClick={handleAddProduct}
          className="flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <PlusCircle className="h-5 w-5 mr-2" />
          Add Product
        </button>
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stock
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${product.price.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.stock}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleEditProduct(product.id)}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    <Edit className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <EditProductModal
          product={editingProduct}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveProduct}
        />
      )}
    </div>
  );
};

export default ProductManagementPage;