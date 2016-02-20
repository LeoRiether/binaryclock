(function(win, doc){
  'use strict';
  
  var $ = doc.querySelector.bind(doc)
  
  function updt() {
    var 
      d = new Date(),
      bh = ('000000' + d.getHours().toString(2)).slice(-6),
      bm = ('000000' + d.getMinutes().toString(2)).slice(-6)
    ;
    
    for(var i = 6; i > 0; i--) {
      if(bh.substring(i-1, i) == '1')
        $('.h' + i).classList.add('on')
      if(bm.substring(i-1, i) == '1')
        $('.m' + i).classList.add('on')
    }
  }
  
  setInterval(updt, 10000)
  
  updt()
  
})(window, document)
