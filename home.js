function adjecentElementProduct(f){
  var high = f[0]*f[1];
  for(var i=1; i<f.length-1; i++){
   
   if( f[i]*f[i+1] >= high){
      high = f[i]*f[i+1];
    }
  }
  return high;
}document.write(adjecentElementProduct([1,4,6,7,3]));
