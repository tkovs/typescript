namespace SingletonPattern {
    export class Singleton {
        // Variável que guarda a única instância dese objeto
        private static singleton: Singleton;

        private constructor() { }

        // Método de criação de um singleton, caso ele não exista
        public static getInstance(): Singleton {
            // Checa existencia do singleton
            if (!Singleton.singleton) {
                // Se nenhum singleton foi criado, instancia o primeiro
                Singleton.singleton = new Singleton();
            }

            // Retorna o singleton (já instanciado)
            return Singleton.singleton;
        }
    }
}