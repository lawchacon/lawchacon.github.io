function randomPalette(){
  const root = Math.floor(Math.random() * 360);
  let palette = [];
  for(let i=0; i< 5; i++){
    palette[i]=root +(72*i);
  }
  pagina = hsvToRgb(palette[0]/360,1,1);
  $(".website-background").css("background-color","rgb("+ pagina[0] + "," + pagina[1] + "," + pagina[2] + ")");
  texto = hsvToRgb(palette[1]/360,1,1);
  $(".element-text").css("color","rgb("+ texto[0] + "," + texto[1] + "," + texto[2] + ")");
  borde = hsvToRgb(palette[2]/360,1,1);
  $(".element-border").css("border-color","rgb("+ borde[0] + "," + borde[1] + "," + borde[2] + ")");
  fondo = hsvToRgb(palette[3]/360,1,1);
  $(".element-background").css("background-color","rgb("+ fondo[0] + "," + fondo[1] + "," + fondo[2] + ")");
  encabezado = hsvToRgb(palette[4]/360,1,1);
  $(".header").css("color","rgb("+ encabezado[0] + "," + encabezado[1] + "," + encabezado[2] + ")");
}

function generateRules(){
  $("#css-rules").text(".website-background{ color: "+ $('.website-background').css( "background-color" )
    +";}\n\n .element-text{ color: " + $('.element-text').css( "color" ) +
    ";} \n\n .element-border{ border-color: "+$( ".element-border" ).css("border-top-color") +
    ";} \n\n .element-background{ background-color: "+$( ".element-background" ).css( "background-color" )+
    ";} \n\n .header{ color: "+$( ".header" ).css( "color" ) +";}");
}

function cleanPalette(){
  $(".website-background").css("background-color","#FFFFFF");
  $(".element-text").css("color","#000000");
  $(".element-border").css("border-color","#000000");
  $(".element-background").css("background-color","#FFFFFF");
  $(".header").css("color","#000000");

}

$(document).ready(function(){

  $("#generar").click(()=>{
    randomPalette();
    generateRules();

  });
  $("#limpiar").click(()=>{
    cleanPalette();
    generateRules();
  });

});