var structures = [
  {
    "name": "Sit-n-Go",
    "sb":   [10, 15, 25, 40, 60, 80,
             100, 150, 200, 300, 400, 500, 600, 800,
             1000, 1500, 2000, 3000, 4000, 6000, 8000,
             10000, 15000, 20000, 25000, 30000],
    "ante": [3, 4, 6, 10, 15, 20,
             25, 25, 25, 50, 50, 60, 75, 75,
             100, 150, 200, 300, 400, 600, 800,
             1000, 1500, 2000, 2500, 3000]
  },
  {
    "name": "Bounty Builder",
    "sb":   [100, 125, 150, 200, 250, 300, 350, 400, 500, 600, 800,
             1000, 1250, 1500, 2000, 2500, 3000, 3500, 4000, 5000, 6000, 8000,
             10000, 12500, 15000, 20000, 25000, 30000, 40000, 50000, 60000,
             75000, 90000, 105000, 120000, 140000, 160000, 180000,
             200000, 225000, 250000, 275000, 300000, 325000, 350000,
             400000, 450000, 500000, 600000, 700000, 800000],
    "ante": [20, 25, 30, 40, 50, 60, 70, 80, 100, 120, 160,
             200, 250, 300, 400, 500, 600, 700, 800, 1000, 1200, 1600,
             2000, 2500, 3000, 4000, 5000, 6000, 8000, 10000, 12000,
             15000, 18000, 21000, 24000, 28000, 32000, 36000,
             40000, 45000, 50000, 55000, 60000, 65000, 70000,
             80000, 90000, 100000, 120000, 140000, 160000]
  },
  {
    "name": "BB Sat",
    "sb":   [25, 50, 75, 100, 150, 200, 250, 300, 400, 500, 600, 800,
             1000, 1500, 2000, 3000, 4000, 5000, 7500, 10000, 12500, 15000],
    "ante": [10, 20, 30, 40, 60, 80, 100, 120, 160, 200, 240, 320,
             400, 600, 800, 1200, 1600, 2000, 3000, 4000, 5000, 6000]
  }
  ];

var si = 0;
var level = 0;
var sb = structures[si]["sb"];
var ante = structures[si]["ante"];

function update_random() {
  $("#random").text(Math.floor(Math.random() * 100) + 1);
  var t = setTimeout(update_random, 5000);
}

function inc_level() {
  level += 1;
  $("#level").text(level);
  $("#blinds").text(sb[level-1] + "/" + sb[level-1]*2 + " ante " + ante[level-1]);
  recalc_run_stacks();
}

function recalc_run_stacks() {
  for (var i = 1; i <= 12; i++) {
    var blinds = sb[level-1] * 3;
    var antes = ante[level-1] * parseInt($("#num-players").val());
    $("#stack-" + i).text((blinds + antes) * i);
  }
}

function show_structure(index) {
  for (i = 0; i < structures.length; i++) {
    $("#structure-table-" + i).hide();
    $("#structure-name-" + i).removeClass("btn-info");
  }
  $("#structure-table-" + index).show();
  $("#structure-name-" + index).addClass("btn-info");
}

function start_main(index) {
  si = index;
  sb = structures[si]["sb"];
  ante = structures[si]["ante"];
  update_random();
  inc_level();
  recalc_run_stacks();
  $("#dec-players").click(recalc_run_stacks);
  $("#inc-players").click(recalc_run_stacks);
  $("#init-page").hide();
  $("#main-page").show();
}

function fill_init_page() {
  for (var i = 0; i < structures.length; i++) {
    $("#structure-names").append(
      '<button' +
        ' id="structure-name-' + i + '" ' +
        ' class="btn btn-default" ' +
        ' type="button" ' +
        ' data-index="' + i + '"' +
        ' onmouseover="show_structure(' + i + ')"' +
        'onclick="start_main(' + i + ')"' +
        '>' +
          structures[i]["name"] +
      '</button>'
      );
    var structure = "";
    for (var j = 0; j < structures[i]["sb"].length; j++) {
      structure += "<tr>" +
                     "<td>" +
                       structures[i]["sb"][j] + "/" +
                       structures[i]["sb"][j] * 2 +
                     "</td>" +
                     "<td>" +
                       structures[i]["ante"][j] +
                     "</td>" +
                   "</tr>";
    }
    $("#structure-tables").append(
      '<div id="structure-table-' + i + '" hidden>' +
        '<table class="table" style="width:50%">' +
          '<thead><th>Blinds</th><th>Antes</th></thead>' +
          '<tbody>' + structure + '</tbody>' +
        '</table>' +
      '</div>'
      );
  }
}

function on_dom_loaded() {
  $("#top-cell").append($("#level-blinds-random"));
  $("#left-cell").append($("#players-runs-stacks"));
  fill_init_page();
  $("#init-page").show();
}

$(on_dom_loaded);
