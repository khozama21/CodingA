const initState={
    projects:[
        {id:'1',title:'portfolio',technology:"HTML",brief:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium placeat eos a perferendis quidem, cum est consectetur accusamus asperiores voluptas eveniet assumenda omnis aliquam ab porro ex nesciunt voluptates at?"},
        {id:'2',title:"Quiz Website",technology:"Javascript",brief:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium placeat eos a perferendis quidem, cum est consectetur accusamus asperiores voluptas eveniet assumenda omnis aliquam ab porro ex nesciunt voluptates at?"},
        {id:'3',title:'E-Commerce',technology:"php",brief:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium placeat eos a perferendis quidem, cum est consectetur accusamus asperiores voluptas eveniet assumenda omnis aliquam ab porro ex nesciunt voluptates at?"},

    ]
}

const projectReducer=(state=initState,action)=>{
    switch (action.type) {
        case 'CREATE_PROJECT':
          console.log('create project', action.project);
      }
return state
}
export default projectReducer