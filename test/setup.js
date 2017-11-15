const init = () =>{
  const container = document.createElement('div');
  container.id = 'toc-container';
  document.body.appendChild(container);
};

export function teardown(el){
  while (el.firstChild){
    el.removeChild(el.firstChild);
  }
}

init();
