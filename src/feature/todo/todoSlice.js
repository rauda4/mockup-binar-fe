import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import axios from 'axios';

// read all todo
export const getTodos = createAsyncThunk('todo', async () => {
  const response = await axios.get(
    'https://mockup-binar-be-production.up.railway.app/todo',
  );
  return response.data.payload;
});

// read todo based user id
export const getTodoById = createAsyncThunk('todo/userid', async () => {
  const UserId = localStorage.getItem('userId');
  const response = await axios.get(
    `https://mockup-binar-be-production.up.railway.app/todo/${UserId}`,
  );
  return response.data.data;
});

// create todo baser user id
export const addTodo = createAsyncThunk(
  'todo/add',
  async ({ todo, keterangan, user_id }) => {
    const response = await axios.post(
      `https://mockup-binar-be-production.up.railway.app/todo/add`,
      { todo, keterangan, user_id },
    );
    return response.data;
  },
);

export const updateTodo = createAsyncThunk(
  'todo/update/',
  async ({ id, todo, keterangan }) => {
    const UserId = localStorage.getItem('userId');
    const response = await axios.put(
      `https://mockup-binar-be-production.up.railway.app/todo/${UserId}/${id}`,
      { todo, keterangan, id },
    );
    return response.data;
  },
);

// delete todo baser user id and id todo
export const deleteTodo = createAsyncThunk('todo/delete', async (id) => {
  const UserId = localStorage.getItem('userId');
  await axios.delete(
    `https://mockup-binar-be-production.up.railway.app/todo/${UserId}/${id}`,
  );
  return id;
});

const todoEntity = createEntityAdapter({
  selectId: (diamond) => diamond.id,
});

const todoSlice = createSlice({
  name: 'todo',
  initialState: todoEntity.getInitialState(),

  extraReducers: (builder) => {
    builder
      .addCase(getTodos.fulfilled, (state, action) => {
        todoEntity.setAll(state, action.payload);
      })
      .addCase(getTodoById.fulfilled, (state, action) => {
        todoEntity.setAll(state, action.payload);
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        todoEntity.addOne(state, action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        todoEntity.removeOne(state, action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        todoEntity.updateOne(state, action.payload);
      });
  },
});

export const todoSelector = todoEntity.getSelectors((state) => state.todo);
export default todoSlice.reducer;
