/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* listitem  Cadastrar clientes */
    $(document).on("click", ".uib_w_2", function(evt)
    {
         /*global activate_page */
         activate_page("#cadastro"); 
    });
    
        /* listitem  Relatório */
    $(document).on("click", ".uib_w_3", function(evt)
    {
         /*global activate_page */
         selecionar();
         activate_page("#relatorio"); 
    });
    
        /* listitem  List item */
    $(document).on("click", ".uib_w_14", function(evt)
    {
         /*global activate_page */
//        selecionaitem();
        var id = $(this).attr("codigo");
        selecionaitem(id);
        
    });
    
        /* button  #voltar */
    $(document).on("click", "#voltar", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
    });
    
        /* button  #btnCadastrar */
    $(document).on("click", "#btnCadastrar", function(evt)
    {
        insert();    
    });
     /* button  #voltar */
    $(document).on("click", "#voltar", function(evt)
    {
         /*global activate_page */
        selecionar();
         activate_page("#relatorio");
    });
    
    
        /* button  #btnApagarDetalhe */
    $(document).on("click", "#btnApagarDetalhe", function(evt)
    {
        /* your code goes here */ 
        var id = eval($("#lblCodigo").text());
        apagar(id);
        selecionar();
    });
    
        /* button  #btnAtualizarDetalhe */
    $(document).on("click", "#btnAtualizarDetalhe", function(evt)
    {
         /*global activate_page */
         preencherAtualizacao();
         activate_page("#atualizar"); 
    });
    
        /* button  #btnVoltarDetalhe */
    $(document).on("click", "#btnVoltarDetalhe", function(evt)
    {
         /*global activate_page */
         selecionar();
         activate_page("#relatorio"); 
    });
    
        /* button  #btnVoltarAtualizar */
    $(document).on("click", "#btnVoltarAtualizar", function(evt)
    {
         /*global activate_page */
         activate_page("#detalhe"); 
        
    });
    
        /* button  #voltarCadastro */
    
    
        /* button  #voltarCadastro */
    $(document).on("click", "#voltarCadastro", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
    });
    
        /* button  #btnAtualizar */
    $(document).on("click", "#btnAtualizar", function(evt)
    {
        /* your code goes here */ 
        var id = eval($("#lblCodigo").text());
        atualizar(id);
    });
    
        /* button  #btnVoltarRelatorio */
    $(document).on("click", "#btnVoltarRelatorio", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
