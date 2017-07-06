class Demandaro {

  constructor() {
    this.score_step = 200;
  }

  parse_txt(txt) {
    // Tradukas la tekston txt al javascript-objekto,
    // kiu estas array el objektoj en la formato:
    //
    // {
    //   "kategorio": "<nomo>",
    //   "demandoj": [
    //     "<demando1>",
    //     ...
    //     "<demandoN>"
    //   ]
    // }
    //
    // kaj konservas ĝin en this.model.
    // Por la formato de la teksto txt, vidu la
    // priskribon en la dosiero demandoj.js.txt.

    this.model = [];

    var demandlisto = txt.trim().split("\n");

    var nova_kategorio = true;

    for (var i in demandlisto) {

      var d = demandlisto[i].trim();

      if (d == '') {
        nova_kategorio = true;
        continue;
      }

      if (nova_kategorio == true) {
        this.model.push({ 'kategorio': d, 'demandoj': []});
        nova_kategorio = false;
      } else {
        this.model[this.model.length-1]['demandoj'].push(d);
      }

    }
  }

  render_table() {

    var $tbody = $('<tbody>');

    var td_width = 1 / this.model.length * 100;

    var $tr = $('<tr class="tr_titoloj">');
    for (var i in this.model) {
      var $td = $('<td>');
      $td.css("width", td_width + "%");
      $td.text(this.model[i]["kategorio"])
      $tr.append($td);
    }
    $tbody.append($tr);

    var d_len = this.model[0]["demandoj"].length;
    for (var j=0; j<d_len; j++) {
      $tr = $('<tr class="tr_demandoj">');
      for (i in this.model) {
        $td = $('<td>');
        var $a = $('<a href="javascript:void(0)">');
        $a.text(this.score_step*(j+1));
        $td.append($a);
        $tr.append($td);
      }
      $tbody.append($tr);
    }

    return $tbody;

  }

  set_current(category_index, question_index) {
    this.curr_cat = category_index;
    this.curr_quest = question_index;
  }

  get_current_question() {
    return this.model[this.curr_cat].demandoj[this.curr_quest];
  }

  get_current_prize() {
    return (this.curr_quest+1)*this.score_step;
  }
}
