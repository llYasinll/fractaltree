var len = 150;
var branch;
var tree = [];
var count = 0;
var leaves = [];

function setup() {
    createCanvas(600, 600);
    var a = createVector(width / 2, height);
    var b = createVector(width / 2, height - len);
    branch = new Branch(a, b);
    tree[0] = branch;
}


function draw() {
    background(51);
    for (var i = 0; i < tree.length; i++) {
        tree[i].show();
    }
    if (count == 6) {
        for (var i = 0; i < leaves.length; i++) {
            fill(255, 0, 100, 100);
            noStroke();
            ellipse(leaves[i].x, leaves[i].y, 8, 8);
        }
    }
}

function keyPressed() {
    if (key == ' ' && count < 6) {
        for (var i = tree.length - 1; i >= 0; i--) {
            if (!tree[i].finished && count < 6) {
                tree.push(tree[i].branchA());
                tree.push(tree[i].branchB());
            }
            tree[i].finished = true;
        }
        count++;

        if (count === 6) {
            for (var i = 0; i < tree.length; i++) {
                if (!tree[i].finished) {
                    var leaf = tree[i].end.copy();
                    leaves.push(leaf);
                }
            }
        }

    }
}
