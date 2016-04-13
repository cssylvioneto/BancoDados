function insert(){
    var nome = $("#txtNome").val();
    var idade = $("#txtIdade").val();
    var sexo = $("#txtSexo").val();
    var email = $("#txtEmail").val();
    var telefone = $("#txtTelefone").val();
    
    var registro = {
        "NOME": nome,
        "IDADE": idade,
        "SEXO": sexo,
        "EMAIL": email,
        "TELEFONE": telefone,
        
    };
    dati.insert("cliente", registro, function(codigo){
        $("#txtNome").val("");
        $("#txtIdade").val("");
        $("#txtSexo").val( "");
        $("#txtEmail").val("");
        $("#txtTelefone").val("");
    });
                
}

function selecionar(){
    
    for(var i = 0; i <= (".uib_w_14").length; i++){
        $(".uib_w_14").remove();
    }
    
  //  var dados;
    dati.selectAll("cliente", function(dados){       
        
        $.each(dados, function(x, cliente){
                        
            var item = "<a  class='list-group-item allow-badge widget uib_w_14' data-uib='twitter%20bootstrap/list_item' data-ver='1' id='item' CODIGO='" + cliente.CODIGO + "'> <h4 class='list-group-item-heading'>" + cliente.NOME + " </h4>  <p class='list-group-item-text'>" + cliente.EMAIL + " </p> </a>";
        
            $("#lista").append(item);
        
        });
        
    });
    
    
    $(".uib_w_24").remove();
    
    
}

function selecionaitem(id){
   var sql = "SELECT * FROM CLIENTE WHERE CODIGO=" + id;
    
    dati.query(sql, function(registros){
       if (registros.rows.length>0){
           
           var dado = registros.rows.item(0);
           
           $("#lblCodigo").text(dado.CODIGO);
           $("#lblNome").text(dado.NOME);
           $("#lblEmail").text(dado.EMAIL);
           $("#lblTelefone").text(dado.TELEFONE);
           $("#lblIdade").text(dado.IDADE);
           $("#lblSexo").text(dado.SEXO);
       }else{
           alert("NÃO ENCOTNRADO");
       }        
    });
    
    activate_page("#detalhe");
    
}

function apagar(id){
    dati.delete("cliente", "CODIGO", id, function(status){
        if(status === false){
//            alert("Apagado com sucesso");
//        }else{
            alert("Falha ao apagar");
        }
    });
    
    
    activate_page("#relatorio");
}

function preencherAtualizacao(){
    $("#txtNomeAtualizar").val($("#lblNome").text());
    $("#txtIdadeAtualizar").val($("#lblIdade").text());
    $("#cmbSexoAtualizar").val($("#lblSexo").text());
    $("#txtEmailAtualizar").val($("#lblEmail").text());
    $("#txtTelefoneAtualizar").val($("#lblTelefone").text());
}

function atualizar(id){
    
    var novosDados = {"NOME": $("#txtNomeAtualizar").val(), 
                      "IDADE": $("#txtIdadeAtualizar").val(),
                      "SEXO": $("#cmbSexoAtualizar").val(),
                      "EMAIL": $("#txtEmailAtualizar").val(),
                      "TELEFONE": $("#txtTelefoneAtualizar").val()
                     };
    
    dati.update("cliente", novosDados, "CODIGO", id, function(status){
        if(status===false){
//            alert("Atualizado com sucesso");
//        }else{
            alert("Erro");
        }
        
    });
    
    selecionaitem(id);
    
    
    activate_page("#detalhe");
}

