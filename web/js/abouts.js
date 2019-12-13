function move(nth, tnode) {
    var fnode = tnode.parentNode
    for (var i = 0; i < fnode.children.length; i++) {
        fnode.children[i].children[0].style.background = "white";
        fnode.children[i].children[0].style.color = "black";
    }
    tnode.children[0].style.background = "#39a3da";
    tnode.children[0].style.color = "white";
    var node = document.getElementById("zpnr");
    for (var i = 0; i < node.children.length; i++) {
        node.children[i].style.display = "none";
    }
    node.children[nth].style.display = "inline";
}

function node_show(nth, node) {

    var fnode = node.parentNode
    for (var i = 0; i < fnode.children.length; i++) {
        fnode.children[i].children[0].style.background = "white";
        fnode.children[i].children[0].style.color = "black";
    }
    node.children[0].style.background = "#39a3da";
    node.children[0].style.color = "white";

    var node_p = document.getElementById("list_tab");

    for (var i = 0; i < node_p.children.length; i++) {
        node_p.children[i].style.display = "none";
    }
    node_p.children[nth].style.display = "block";
}