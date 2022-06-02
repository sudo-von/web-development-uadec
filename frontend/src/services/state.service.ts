import client from 'src/helpers/private-axios-helper';

export interface State {
  id: string;
  Description: string;
}

export interface StatePayload {
  Description: string;
}

export interface UpdateStatePayload {
  id: string;
  Description: string;
}

const getStates = async (): Promise<State[]> => {
  const request = await client.get<State[]>('/api/state-list');
  return request.data;
};

const getStateByID = async (stateId: string): Promise<State> => {
  const request = await client.get<State>(`/api/state-detail/${stateId}/`);
  return request.data;
};

const postState = async (statePayload: StatePayload): Promise<void> => {
  await client.post<StatePayload[]>('/api/state-create/', statePayload);
};

const deleteState = async (stateId: string): Promise<void> => {
  await client.delete(`/api/state-delete/${stateId}/`);
};

const updateState = async (statePayload: UpdateStatePayload): Promise<void> => {
  await client.patch<UpdateStatePayload>(
    `/api/state-update/${statePayload.id}/`,
    statePayload,
  );
};

export { getStates, getStateByID, postState, deleteState, updateState };
