import {
    districts,
    nationality,
   
   
  } from './store'
  
  
  
  export const state = () => ({
    districts,
   
    nationality,
  
    
   
  
  })
  
  export const mutations = {
 
   
    setNationality(state, nationality) {
      state.nationality = nationality
    },
    setGender(state, gender) {
      state.gender = gender
    },
   
  
  }
  
  export const getters = {
  

    districts: (state) => {
      return state.districts
    },
  
  }
  
  