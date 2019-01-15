namespace SingletonPattern {
    export class Singleton {
        // Variável que guarda a única instância dese objeto
        private static instance: Singleton;

        private constructor() { }

        // Método de criação de um singleton, caso ele não existia
        public static getInstance(): Singleton {
            // Checa existencia do singleton
            if (!Singleton.instance) {
                // Se nenhum singleton foi criado, instancia o primeiro
                Singleton.instance = new Singleton();
            }

            // Retorna o singleton (já instanciado)
            return Singleton.instance;
        }
    }
}