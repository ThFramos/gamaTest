const Cliente = require('../../models/cliente')

describe ('Clientes', () => {
    beforeEach(/* async coso for usar db */ ()=>{ // beforEach => executado antes de todos os it

    })
    

    it('Valida propriedade de um cliente', /* async coso for usar db */ () =>{
        let cliente = Cliente.primeiro();
        expect(cliente.id).not.toBeUndefined();
        expect(cliente.nome).not.toBeUndefined();
        expect(cliente.telefone).not.toBeUndefined();

    });

    it('Retorna todos', /* async coso for usar db */ () =>{
        let clientes = Cliente.todos();
        expect(clientes.length).toEqual(10)
        
    });

    it('Nome cliente em Upercase', /* async coso for usar db */ () =>{
        let cliente = Cliente.primeiro();
        cliente.nome ="Thiago"
        expect(cliente.nomeUpercase()).toEqual("THIAGO")
        
    });
})