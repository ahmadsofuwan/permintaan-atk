var handleDataTableSelect=function(){"use strict";if($('#data-table-select').length!==0){$('#data-table-select').DataTable({select:true,responsive:true});}};var TableManageSelect=function(){"use strict";return{init:function(){handleDataTableSelect();}};}();$(document).ready(function(){TableManageSelect.init();});