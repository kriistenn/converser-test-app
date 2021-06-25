export const GETED_DATA = 'GETED_DATA';
export const LOADER_DATA = 'LOADER_DATA';
export const ELECT_ITEM = 'ELECT_ITEM';
export const LEFT_ITEM = 'LEFT_ITEM';
export const RIGHT_ITEM = 'RIGHT_ITEM';


export const setData = data => ({
    type: GETED_DATA,
    payload: data
  });
  
  export const loaderData = () => ({
    type: LOADER_DATA
  });
  
  export const electItem = item => ({
    type: ELECT_ITEM,
    payload: item
  });
  
  export const selectLeft = elem => ({
    type: LEFT_ITEM,
    payload: elem
  });
  
  export const selectRight = elem => ({
    type: RIGHT_ITEM,
    payload: elem
  });
  