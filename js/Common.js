
$.getUrl = function(string){
    var search = window.location.search.substr(1);
    var reg =  new RegExp('(&|^)+' +string + '=([^&]*)(&|$)');
    var strings = search.match(reg);
    if(strings === null){
      return null;
    }
    return cat_id = strings[2];
};



//表单序列化
function formSerialize(){
    var form = document.getElementsByTagName('form')[0];
    var eles = form.elements;
    console.log(eles);
    var formArr = [];
    var arr;
    for(var i = 0;i < eles.length;i++){
        var e = eles[i];
        var type = eles[i].type;
        switch(type){
            case 'reset':
            case 'submit':
            case 'button':
                break;
            case 'text':
            case 'password':
            case 'textarea':
                arr = e.name + '=' + e.value;
                formArr.push(arr);
                break;
            case 'checkbox':
            case 'radio':
                e.checked && formArr.push(e.name +'='+ e.value);

                break;
            case 'select-one':
            case 'select-multiple':
                var options = e.getElementsByTagName('option');
                for(var j = 0;j < options.length;j++){
                    if(options[j].selected){
                        formArr.push(e.name + '=' + options[j].value);
                    }
                }
        }
    }
    console.log(formArr);
}

