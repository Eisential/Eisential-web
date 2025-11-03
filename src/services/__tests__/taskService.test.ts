import { createTask, updateTask, deleteTask, getAllTasks, moveTaskToQuadrant, completeTask, uncompleteTask } from '../taskService';
import { api } from '@/src/lib/api';

// Mock del api
jest.mock('@/src/lib/api', () => ({
  api: {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    patch: jest.fn(),
    delete: jest.fn(),
  },
}));

describe('TaskService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllTasks', () => {
    it('should fetch all tasks successfully', async () => {
      const mockTasks = [
        { id: '1', title: 'Task 1', quadrant: 'B' },
        { id: '2', title: 'Task 2', quadrant: 'Q1' },
      ];
      
      (api.get as jest.Mock).mockResolvedValue(mockTasks);

      const result = await getAllTasks();

      expect(api.get).toHaveBeenCalledWith('/api/task');
      expect(result).toEqual(mockTasks);
    });

    it('should handle errors when fetching tasks', async () => {
      (api.get as jest.Mock).mockRejectedValue(new Error('Network error'));

      await expect(getAllTasks()).rejects.toThrow('Network error');
    });
  });

  describe('createTask', () => {
    it('should create a new task successfully', async () => {
      const newTask = {
        title: 'New Task',
        description: 'Description',
        categoryId: 'cat-1',
        dueDate: '2025-11-10',
        quadrant: 'B' as const,
        position: 0,
      };
      
      const mockResponse = { id: '123', ...newTask };
      (api.post as jest.Mock).mockResolvedValue(mockResponse);

      const result = await createTask(newTask);

      expect(api.post).toHaveBeenCalledWith('/api/task', newTask);
      expect(result).toEqual(mockResponse);
    });
  });

  describe('updateTask', () => {
    it('should update a task successfully', async () => {
      const taskId = '123';
      const updates = { title: 'Updated Title' };
      const mockResponse = { id: taskId, ...updates };

      (api.patch as jest.Mock).mockResolvedValue(mockResponse);

      const result = await updateTask(taskId, updates);

      expect(api.patch).toHaveBeenCalledWith(`/api/task/${taskId}`, updates);
      expect(result).toEqual(mockResponse);
    });
  });

  describe('deleteTask', () => {
    it('should delete a task successfully', async () => {
      const taskId = '123';
      (api.delete as jest.Mock).mockResolvedValue(undefined);

      await deleteTask(taskId);

      expect(api.delete).toHaveBeenCalledWith(`/api/task/${taskId}`);
    });
  });

  describe('moveTaskToQuadrant', () => {
    it('should move a task to a new quadrant', async () => {
      const taskId = '123';
      const quadrant = 'Q1' as const;
      const mockResponse = { id: taskId, quadrant };

      (api.patch as jest.Mock).mockResolvedValue(mockResponse);

      const result = await moveTaskToQuadrant(taskId, quadrant);

      expect(api.patch).toHaveBeenCalledWith(`/api/task/${taskId}`, { quadrant });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('completeTask', () => {
    it('should mark a task as complete', async () => {
      const taskId = '123';
      const mockResponse = { id: taskId, completed: true };

      (api.patch as jest.Mock).mockResolvedValue(mockResponse);

      const result = await completeTask(taskId);

      expect(api.patch).toHaveBeenCalledWith(
        `/api/task/${taskId}`, 
        expect.objectContaining({ 
          completed: true,
          completedAt: expect.any(String)
        })
      );
      expect(result).toEqual(mockResponse);
    });
  });

  describe('uncompleteTask', () => {
    it('should mark a task as incomplete', async () => {
      const taskId = '123';
      const mockResponse = { id: taskId, completed: false };

      (api.patch as jest.Mock).mockResolvedValue(mockResponse);

      const result = await uncompleteTask(taskId);

      expect(api.patch).toHaveBeenCalledWith(`/api/task/${taskId}`, { completed: false });
      expect(result).toEqual(mockResponse);
    });
  });
});
