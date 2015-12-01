function textNodesUnder(el){
  var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()) a.push(n);
  return a;
}

var elements = document.getElementsByClassName('js-invisibles');

for (i = 0; i < elements.length; i++) {
  var textNodes = textNodesUnder(elements[i]);
  textNodes.forEach(function(node, index, textNodes) {
    var text = node.textContent;
    text = text.replace(/ /g,'<span class="space"> </span>');
    var newNode = document.createElement('span');
    newNode.className = 'invisibles';
    newNode.innerHTML = text;
    node.parentNode.replaceChild(newNode, node);
  });
}
