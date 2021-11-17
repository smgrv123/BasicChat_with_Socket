import { makeAutoObservable } from "mobx";

class Store {
  data= [
    {
      id: 0,
      name: 'test2',
      age: 31,
      height: 6.0,
      country: 'India',
      education: 'Masters degree',
      job: 'Design Leader',
      status: 'unknown',
      state: 'Delhi',
    },
    {
      id: 1,
      name: 'test3',
      age: 31,
      height: 6.0,
      country: 'India',
      education: 'Masters degree',
      job: 'Design Leader',
      status: 'unknown',
      state: 'Delhi',
    },
    {
      id: 2,
      name: 'test4',
      age: 31,
      height: 6.0,
      country: 'India',
      education: 'Masters degree',
      job: 'Design Leader',
      status: 'unknown',
      state: 'Delhi',
    },
    {
      id: 3,
      name: 'test5',
      age: 31,
      height: 6.0,
      country: 'India',
      education: 'Masters degree',
      job: 'Design Leader',
      status: 'unknown',
      state: 'Delhi',
    },
    {
      id: 4,
      name: 'test5',
      age: 31,
      height: 6.0,
      country: 'India',
      education: 'Masters degree',
      job: 'Design Leader',
      status: 'unknown',
      state: 'Delhi',
    },
    {
      id: 5,
      name: 'test6',
      age: 31,
      height: 6.0,
      country: 'India',
      education: 'Masters degree',
      job: 'Design Leader',
      status: 'unknown',
      state: 'Delhi',
    },
    {
      id: 6,
      name: 'test1',
      age: 31,
      height: 6.0,
      country: 'India',
      education: 'Masters degree',
      job: 'Design Leader',
      status: 'unknown',
      state: 'Delhi',
    },
  ];
  id=''
  
  constructor() {
    makeAutoObservable(this);
  }

  setId(id){
    this.id=id
  }
}

export default new Store();