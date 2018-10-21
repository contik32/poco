var sb = [10, 15, 25, 40, 60, 80,
          100, 150, 200, 300, 400, 500, 600, 800,
          1000, 1500, 2000, 3000, 4000, 5000, 6000, 8000,
          10000, 15000, 20000, 25000, 30000];
var ante = [3, 4, 6, 10, 15, 20,
            25, 25, 25, 50, 50, 60, 75, 75,
            100, 150, 200, 300, 400, 600, 800,
            1000, 1500, 2000, 2500, 3000];
var level = 0;

function update_random() {
  $("#random").text(Math.floor(Math.random() * 100) + 1);
  var t = setTimeout(update_random, 5000);
}

function inc_level() {
  level += 1;
  $("#level").text(level);
  $("#blinds").text(sb[level-1] + " / " + sb[level-1]*2);
  $("#ante").text(ante[level-1]);
  recalc_run_stacks();
}

function recalc_run_stacks() {
  for (var i = 1; i <= 10; i++) {
    var blinds = sb[level-1] * 3;
    var antes = ante[level-1] * parseInt($("#num-players").val());
    $("#stack-" + i).text((blinds + antes) * i);
  }
}

function on_dom_loaded() {
  $("#init_page").hide();
  $("#main_page").show();
  update_random();
  inc_level();
  recalc_run_stacks();
  $("#dec-players").click(recalc_run_stacks);
  $("#inc-players").click(recalc_run_stacks);
}

$(on_dom_loaded);
