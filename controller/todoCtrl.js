(function() {
    'use strict';
    
    /**
     *      -> require direto procura por modules em node_modules
     * ./   -> acesso a uma pasta DENTRO da pasta atual
     * ../  -> acesso a uma pasta FORA da pasta atual
     */
    var Todo = require('../model/todo'); // .js é opcional no require

    function todoCtrl(app) {
        // Define os EndPoints
        app.get('/api/todos/:usuario', getTodosPorUsername);
        app.get('/api/todo/:id', getTodoPorId);
        app.post('/api/todo', salvarOuAtualizarTodo);
        app.delete('/api/todo/:id', excluirTodoPorId);
        
        // setup inicial
        app.get('/api/setup', salvarTodosDefault);
    }

    /**
     * Salva os TODOs default
     */
    function salvarTodosDefault(request, response) {
        var todosDefault = [
            { usuario: 'atilla', todo: 'Novo todo 1', finalizado: false },
            { usuario: 'atilla', todo: 'Novo todo 2', finalizado: false },
            { usuario: 'atilla', todo: 'Novo todo 3', finalizado: false },
            { usuario: 'atilla', todo: 'Novo todo 4', finalizado: false }
        ];
        
        Todo.create(todosDefault, function(err, todos) {
            // verifica se houve um problema e dispara a exception
            if (err) throw err;
            
            response.send(todos);
        });
    }

    /**
     * EndPoint que exclui o TODO
     * URI: '/api/todo/:id
     */
    function excluirTodoPorId(request, response) {
        Todo.findByIdAndDelete(request.body.id, function(err) {
            // verifica se houve um problema e dispara a exception
            if (err) throw err;
            
            console.log('TODO excluído com sucesso!');
            
            response.send('TODO excluído com sucesso!');
        });
    }

    /**
     * EndPoint que salva ou atualiza o TODO
     * URI: '/api/todo
     */
    function salvarOuAtualizarTodo(request, response) {
        if (request.body.id) {
            atualizarTodo(request, response);
        } else {
            salvarTodo(request, response);
        }
    }

    /**
     * Salva o TODO
     */
    function salvarTodo(request, response) {
        var todo = Todo({
            usuario: request.body.usuario,
            todo: request.body.todo,
            finalizado: request.body.finalizado
        });
        
        todo.save(function(err, result) {
            // verifica se houve um problema e dispara a exception
            if (err) throw err;
            
            console.log(result);
            
            response.send('TODO salvo com sucesso!');
        });
    }

    /**
     * Atualiza o TODO
     */
    function atualizarTodo(request, response) {
        var todo = {
            usuario: request.body.usuario,
            todo: request.body.todo,
            finalizado: request.body.finalizado
        };
        
        Todo.findByIdAndUpdate(request.body.id, todo, function(err, result) {
            // verifica se houve um problema e dispara a exception
            if (err) throw err;
            
            console.log(result);
            
            response.send('TODO atualizado com sucesso!');
        });
    }

    /**
     * EndPoint que lista o TODO do determinado ID
     * URI: '/api/todo/:id'
     */
    function getTodoPorId(request, response) {
        var criteria = {
            _id: request.params.id
        };
        
        Todo.findById(criteria, function (err, todo) {
            // verifica se houve um problema e dispara a exception
            if (err) throw err;
            
            console.log(todo);
            
            response.send(todo);
        });
    }

    /**
     * EndPoint que lista os TODOs de um determinado usuário
     * URI: '/api/todos/:usuario'
     */
    function getTodosPorUsername(request, response) {
        var criteria = {
            usuario: request.params.usuario
        };
        
        Todo.find(criteria, function (err, todos) {
            // verifica se houve um problema e dispara a exception
            if (err) throw err;
            
            console.log(todos);
            
            response.send(todos);
        });
    }

    module.exports = todoCtrl;
})();
