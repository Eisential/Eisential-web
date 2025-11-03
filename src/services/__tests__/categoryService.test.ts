import { createCategory, deleteCategory, getAllCategories } from '../categoryService';
import { api } from '@/src/lib/api';

jest.mock('@/src/lib/api', () => ({
  api: {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    patch: jest.fn(),
    delete: jest.fn(),
  },
}));

describe('CategoryService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllCategories', () => {
    it('should fetch all categories successfully', async () => {
      const mockCategories = [
        { id: '1', name: 'Work', color: '#FF0000' },
        { id: '2', name: 'Personal', color: '#00FF00' },
      ];
      
      (api.get as jest.Mock).mockResolvedValue(mockCategories);

      const result = await getAllCategories();

      expect(api.get).toHaveBeenCalledWith('/api/category');
      expect(result).toEqual(mockCategories);
    });

    it('should handle errors when fetching categories', async () => {
      (api.get as jest.Mock).mockRejectedValue(new Error('Network error'));

      await expect(getAllCategories()).rejects.toThrow('Network error');
    });
  });

  describe('createCategory', () => {
    it('should create a new category successfully', async () => {
      const newCategory = {
        name: 'New Category',
        color: '#0000FF',
      };
      
      const mockResponse = { id: '123', ...newCategory };
      (api.post as jest.Mock).mockResolvedValue(mockResponse);

      const result = await createCategory(newCategory);

      expect(api.post).toHaveBeenCalledWith('/api/category', newCategory);
      expect(result).toEqual(mockResponse);
    });
  });

  describe('deleteCategory', () => {
    it('should delete a category successfully', async () => {
      const categoryId = '123';
      (api.delete as jest.Mock).mockResolvedValue(undefined);

      await deleteCategory(categoryId);

      expect(api.delete).toHaveBeenCalledWith(`/api/category/${categoryId}`);
    });
  });
});
