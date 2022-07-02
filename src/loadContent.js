
function loadContent(){
    var container = document.querySelector('#container');
    var sidebar = document.createElement('div');
    var header = document.createElement('div');
    var content = document.createElement('div');

    sidebar.setAttribute('id','sidebar');
    header.setAttribute('id','header');
    content.setAttribute('id','content');

    container.appendChild(header);
    container.appendChild(sidebar);
    container.appendChild(content);

    return container;
}

export default loadContent;