<template>
    <header>
        <nav class="navbar bg-dark navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu"
                    aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="navbar-collapse collapse" id="menu">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/">Home</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/">Funcionarios</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/">Fornecedores</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/">Produtos</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/">Relatorio</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/">Sair</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>