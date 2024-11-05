import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/utils/axios";
import { axiosErrorCatch } from "@/utils/axiosErrorCatch";
import { Column, List, TaskFormValues, TaskRow } from "@/types/spaces";

// Fetch Space and transform it into tasks and lists
export const getSpace = createAsyncThunk(
  "space/getSpace",
  async (spaceId: string, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`/space/${spaceId}`);

      // Populate lists (columns)
      const cols: Column[] = data.data.lists.map((list: List) => ({
        id: list._id,
        title: list.name,
        color: list.color,
        task: list.tasks,
      }));

      // Extract tasks from lists and transform them
      const taskRows: TaskRow[] = data.data.lists.flatMap((list: List) =>
        list.tasks.map((task) => ({
          ...task,
          id: task._id,
          priority: task.priority,
          dueDate: task.dueDate,
          description: task.description,
          column: list._id,
        }))
      );

      const space = {
        _id: data.data._id,
        name: data.data.name,
        description: data.data.description,
      };

      return { lists: cols, tasks: taskRows, space };
    } catch (error) {
      const errorMsg = axiosErrorCatch(error);
      return rejectWithValue(errorMsg);
    }
  }
);

export const createList = createAsyncThunk<
  { newList: Column },
  {
    spaceId: string;
    listData: { name: string; color?: string };
    onSuccess: () => void;
  },
  { rejectValue: string }
>(
  "tasks/createList",
  async ({ spaceId, listData, onSuccess }, { rejectWithValue }) => {
    try {
      if (!listData.color) listData.color = "#03a9f4";
      const { data } = await axiosInstance.post(
        `/space/${spaceId}/lists`,
        listData
      );
      onSuccess();
      const newList = {
        id: data.data._id,
        title: listData.name,
        color: listData.color || "#03a9f4",
      };
      return { newList };
    } catch (error) {
      return rejectWithValue(axiosErrorCatch(error));
    }
  }
);

export const deleteList = createAsyncThunk(
  "tasks/deleteList",
  async (
    {
      spaceId,
      listId,
      onSuccess,
    }: { spaceId: string; listId: string; onSuccess: () => void },
    { rejectWithValue }
  ) => {
    try {
      await axiosInstance.delete(`/space/${spaceId}/lists/${listId}`);
      onSuccess();
      return { spaceId, listId };
    } catch (error) {
      return rejectWithValue(axiosErrorCatch(error));
    }
  }
);

export const updateList = createAsyncThunk(
  "tasks/updateList",
  async (
    {
      spaceId,
      listId,
      listData,
      onSuccess,
      onError,
    }: {
      spaceId: string;
      listId: string;
      listData: { name?: string; color?: string };
      onSuccess: () => void;
      onError: (error: string) => void;
    },
    { rejectWithValue }
  ) => {
    try {
      await axiosInstance.put(`/space/${spaceId}/lists/${listId}`, listData);
      onSuccess();
      return { listId, listData };
    } catch (error) {
      onError(axiosErrorCatch(error));
      return rejectWithValue(axiosErrorCatch(error));
    }
  }
);

export const createTask = createAsyncThunk<
  { task: TaskRow },
  {
    spaceId: string;
    listId: string;
    taskData: TaskFormValues;
    onSuccess: () => void;
  },
  { rejectValue: string }
>(
  "tasks/createTask",
  async ({ spaceId, listId, taskData, onSuccess }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        `/space/${spaceId}/lists/${listId}/tasks`,
        taskData
      );
      onSuccess();
      const resData = data.data;
      return { task: { ...resData, id: resData._id, column: listId } };
    } catch (error) {
      return rejectWithValue(axiosErrorCatch(error));
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (
    {
      spaceId,
      listId,
      taskId,
      onSuccess,
      onError,
    }: {
      spaceId: string;
      listId: string;
      taskId: string;
      onSuccess: () => void;
      onError: (error: string) => void;
    },
    { rejectWithValue }
  ) => {
    try {
      await axiosInstance.delete(
        `/space/${spaceId}/lists/${listId}/tasks/${taskId}`
      );
      onSuccess();
      return { taskId };
    } catch (error) {
      onError(axiosErrorCatch(error));
      return rejectWithValue(axiosErrorCatch(error));
    }
  }
);

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async (
    {
      spaceId,
      listId,
      taskId,
      taskData,
      onSuccess,
      onError,
    }: {
      spaceId: string;
      listId: string;
      taskId: string;
      taskData: TaskFormValues;
      onSuccess: () => void;
      onError: (error: string) => void;
    },
    { rejectWithValue }
  ) => {
    try {
      await axiosInstance.put(
        `/space/${spaceId}/lists/${listId}/tasks/${taskId}`,
        taskData
      );
      if (taskData.status) {
        await axiosInstance.patch(
          `/space/${spaceId}/lists/${listId}/tasks/${taskId}`,
          { targetListId: taskData.status }
        );
      }
      onSuccess();
      return { taskId, taskData, status: taskData.status };
    } catch (error) {
      onError(axiosErrorCatch(error));
      return rejectWithValue(axiosErrorCatch(error));
    }
  }
);

export const moveTask = createAsyncThunk(
  "tasks/moveTask",
  async (
    {
      spaceId,
      listId,
      taskId,
      targetListId,
      onSuccess,
      onError,
    }: {
      spaceId: string;
      listId: string;
      taskId: string;
      targetListId: string;
      onSuccess: () => void;
      onError: (error: string) => void;
    },
    { rejectWithValue }
  ) => {
    try {
      await axiosInstance.patch(
        `/space/${spaceId}/lists/${listId}/tasks/${taskId}`,
        { targetListId }
      );
      onSuccess();
      return { taskId, targetListId };
    } catch (error) {
      onError(axiosErrorCatch(error));
      return rejectWithValue(axiosErrorCatch(error));
    }
  }
);
