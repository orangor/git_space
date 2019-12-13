

function set_opacity(node, num) {

    node.style.opacity = num
};

function node_show(node) {
    node.style.display = "inline";
};

function node_hide(node) {
    node.style.display = "none";
};


function skate_top(node) {
    var dis = -305;
    node.style.top = dis + "px";
};

function skate_bottom(node) {
    var dis = 0;
    node.style.top = dis + "px";
};

function touch_cloud_item(nth, node) {

    var pos = [-340, -870, -1500, -2240]
    var index = 4;
    var text = document.getElementById("text_nav");
    var nav = document.getElementById("cloud_nav");
    for (var i = 0; i < nav.children.length; i++) {
        if ((i % index) != 0 && i < (nth - 1) * index) {
            nav.children[i].style.background = "#65d1cc";
        } else if ((i % index) != 0) {
            nav.children[i].style.background = "#132a65";
        } else if (i / index == nth - 1) {
            nav.children[i].style.transform = "scale(1.12,1.12)";
        } else {
            nav.children[i].style.transform = "scale(1,1)";
        }
    }
    for (var i = 0; i < text.children.length; i++) {
        if (i == nth) {
            text.children[i].style.transform = "scale(1,1)";
        } else {

            text.children[i].style.transform = "scale(0.81,0.81)";
        }

    }

    text.style.left = pos[nth - 1] + "px";
};

function skate_project(node, dis) {
    var skate_node = document.getElementById("skate_project")
    skate_node.style.left = dis + "px";

    var node_parent = node.parentNode;
    for (var i = 0; i < node_parent.children.length; i++) {
        node_parent.children[i].style.background = "#cccccc"
    }
    node.style.background = "#7ecafc";
}
function skate_project2(dis) {
    let index = 1350
    var skate_node = document.getElementById("skate_project");
    var pos = Number(skate_node.style.left.substring(0, skate_node.style.left.length - 2)) + dis * index
    console.log(pos);
    if (pos <= 0 && pos >= -index * (skate_node.children.length - 1)) {
        skate_node.style.left = pos + "px";
        var touch_clubNode = document.getElementById("touch_club")
        for (var i = 0; i < touch_clubNode.children.length; i++) {
            touch_clubNode.children[i].style.background = "#cccccc";
        }
        console.log();
        touch_clubNode.children[Math.abs(pos / index)].style.background = "#7ecafc";
    }
}
var x = 430 / 530;
var y = 280;
var h1 = x * y;
var h2 = h1 * 1050 / 990
console.log("h1:", h1, "x:", x)
