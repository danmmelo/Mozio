module.exports = {
  

   getFileExtension: function (file){
    
        File=[];
        File = file.split(".");
        Ext = ['jpg', 'gif']
  
        for(i=0; i<Ext.length; i++){
           if(File.indexOf(Ext[i]) === -1){
                return false;
              }else{
                return 1;
              }
          }
  }
}


/*
  492  mkdir mochatest
  493  npm init
  495  cd mochatest/
  497  npm init
  500  npm install mocha chai --save-dev
  501  npm run test
*/

