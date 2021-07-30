// Este é um arquivo de manifesto que será compilado em application.js, que incluirá todos os arquivos
// listado abaixo.
//
// Qualquer arquivo JavaScript / Coffee neste diretório, lib / assets / javascripts ou qualquer plugin
// diretório vendor / assets / javascripts pode ser referenciado aqui usando um caminho relativo.
//
// Não é aconselhável adicionar código diretamente aqui, mas se o fizer, ele aparecerá na parte inferior do
// arquivo compilado. O código JavaScript neste arquivo deve ser adicionado após a última instrução require_ *.
//
// Leia Sprockets README (https://github.com/rails/sprockets#sprockets-directives) para obter detalhes
// sobre as diretivas com suporte.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .

// Um ​​contador é necessário para que as mensagens de bate-papo apareçam sequenciais, e assim
// que o jogo não termine tão cedo.
var counter = 2

// Embora este arquivo não converse com o banco de dados, aqui está uma matriz de registros de banco de dados falsos.
var responsearray = [
  {threat: 3, response: 'ARGH! HUMANS MUST DIE!'},
  {threat: 1, response: 'Aaah, OK then. We come in peace 🌸'},
  {threat: 2, response: 'I WANT TO SEE YOUR LEADER!'},
  {threat: 2, response: 'ARE HUMANS TASTY THOUGH? WE ARE HUNGRY!'},
  {threat: 2, response: 'WE HEARD THERE WAS OIL FOR THE TAKING!'},
  {threat: 2, response: 'WE DO NOT LIKE IT HERE!'},
  {threat: 2, response: 'WHY IS THE AIR SO CLEAN! ARGH!'}
]

$(document).ready(function() {
  $('.option').click(function(event) {

  // Esconda as opções de chat enquanto o alienígena está respondendo.
    $('.selector').hide();

    // Descubra quais opções foram selecionadas.
    var thisclass = this.className.slice(0, -7)

   // O bate-papo humano parece ligeiramente atrasado.
    setTimeout(function() {
      var content = $('.' + thisclass).html();
      $('.alienmessage').last().after(
        $('<div/>')
        .addClass('message')
        .html("<img class='profile' src='https://blog.za3k.com/wp-content/uploads/2015/03/default_profile_3.png'>")
        .prepend("<div class='chatbox' id='" + counter + "'></div")
      );
      $('#'+counter).append(content);
      counter = counter + 1
    },100);

    // Se forem os primeiros 2 turnos, o jogo não pode terminar, pois o nível de ameaça é.
    // apenas meio.
    // A resposta alienígena está atualmente selecionada aleatoriamente, caso contrário.
    if (counter < 6) {
      var array = responsearray.slice(2, -1);
      var aliencontent = array[Math.floor(Math.random()*array.length)];
    } else {
      var aliencontent = responsearray[Math.floor(Math.random()*responsearray.length)];
    }

    // Quando a resposta alienígena é usada, ela é excluída para que não apareça novamente.
    for (var i = responsearray.length - 1; i >= 0; i--) {
      if (responsearray[i] === aliencontent) {
       responsearray.splice(i, 1);
      }
    }

    // A mensagem do alienígena está ainda mais atrasada.
    setTimeout(function() {
      $('.message').last().after(
        $('<div/>')
        .addClass('alienmessage')
        .html("<img class='alienprofile' src='https://media.giphy.com/media/r9u2BEXZUzGo/giphy.gif'>")
        .prepend("<div class='alienchatbox' id='" + counter + "'></div")
      );
      $('#'+counter).append(aliencontent.response);
      counter = counter + 1
    },1200);

    // Se o nível de ameaça da resposta alienígena for muito alto ou baixo, o humano.
    // o usuário vê uma mensagem e o jogo termina.
    setTimeout(function() {
      if ( aliencontent.threat === 3) {
        alert('Ah não! O alienígena destruiu o planeta Terra e todos os seus habitantes 😰')
        location.reload();
      } else if ( aliencontent.threat === 1) {
        alert("Obrigado Senhor! Você conversou com a sobrecarga alienígena e eles concordaram em ser nossos amigos! 😊")
        location.reload();
      }
      // Se o jogo não terminou, a seleção de opções de chat volta.
      $('.selector').show();
    },2000);

  // Isso evita que a página seja recarregada.
    event.preventDefault();
  });
});
