<template>
    <header>
        <nav class="navbar bg-dark navbar-dark">
            <div class="container-fluid">
                <nuxt-link class="navbar-brand" href="/dashboard">Navbar</nuxt-link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu"
                    aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="navbar-collapse collapse" id="menu">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/dashboard">Home</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/dashboard/funcionarios">Funcionarios</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/dashboard/fornecedores">Fornecedores</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/dashboard/produtos">Produtos</nuxt-link>
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