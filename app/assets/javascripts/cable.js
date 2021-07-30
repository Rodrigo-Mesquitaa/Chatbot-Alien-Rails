// Action Cable fornece a estrutura para lidar com WebSockets em Rails.
// Você pode gerar novos canais onde os recursos do WebSocket vivem usando o comando `rails generate channel`.
//
//= require action_cable
//= require_self
//= require_tre ./channels

(function() {
    this.App || (this.App = {});

    App.cable = ActionCable.createConsumer();
    
}).call(this);
